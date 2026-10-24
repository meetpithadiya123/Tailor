require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const compression = require('compression');

const servicesRouter = require('./routes/services');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Trusted Proxy (Vercel / reverse proxy) ──────────────────────────────────
app.set('trust proxy', 1);

// ── Security: Helmet (HTTP headers) ────────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        imgSrc: ["'self'", 'data:', 'https:'],
        connectSrc: ["'self'"],
        frameSrc: ["'none'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    crossOriginEmbedderPolicy: false, // allow map embeds
    hsts: {
      maxAge: 31536000,       // 1 year
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    xssFilter: true,
    noSniff: true,
    ieNoOpen: true,
    hidePoweredBy: true,
  })
);

// ── Security: Remove X-Powered-By ───────────────────────────────────────────
app.disable('x-powered-by');

// ── Security: Rate Limiting (anti-DDoS / brute-force) ───────────────────────
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,                  // max 200 requests per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: 'Too many requests. Please try again later.',
  },
  skip: (req) => req.method === 'OPTIONS', // allow preflight
});

const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 60,                  // max 60 API calls per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: 'Too many API requests. Please slow down.',
  },
});

app.use(globalLimiter);
app.use('/api/', apiLimiter);

// ── Performance: GZIP Compression ───────────────────────────────────────────
app.use(compression({ threshold: 0 }));

// ── Security: CORS (restrict to known origins) ──────────────────────────────
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  process.env.FRONTEND_URL,               // set in .env / Vercel env vars
  'https://sonali-ladies-tailor.vercel.app',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      // allow requests with no origin (e.g. curl, Postman, server-side)
      if (!origin) return cb(null, true);
      if (allowedOrigins.includes(origin)) return cb(null, true);
      cb(new Error('CORS: origin not allowed'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ── Security: HTTP Parameter Pollution ──────────────────────────────────────
app.use(hpp());

// ── Body Parsing (size limit to prevent payload attacks) ────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// ── Security: Block suspicious User-Agents / bots ───────────────────────────
app.use((req, _res, next) => {
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const blocked = ['sqlmap', 'nikto', 'nmap', 'masscan', 'zgrab', 'python-requests/2.0'];
  if (blocked.some((b) => ua.includes(b))) {
    return _res.status(403).json({ message: 'Forbidden' });
  }
  next();
});

// ── Routes ──────────────────────────────────────────────────────────────────
app.get('/', (_req, res) =>
  res.json({ message: 'Sonali Ladies Tailor API is running ✅' })
);
app.use('/api/services', servicesRouter);

// ── 404 Handler ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// ── Global Error Handler ─────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err.message && err.message.startsWith('CORS')) {
    return res.status(403).json({ message: err.message });
  }
  console.error('Unhandled error:', err.message);
  res.status(500).json({ message: 'Internal server error' });
});

// ── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Sonali Ladies Tailor backend running on http://localhost:${PORT}`);
  console.log(`🔒 Security: helmet, rate-limit, hpp, compression — all active`);
});
