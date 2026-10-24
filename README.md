# 👗 Sonali Ladies Tailor

A beautiful, professional MERN-stack website for **Sonali Ladies Tailor** — a ladies' tailoring boutique in Rajkot, Gujarat.

![Sonali Ladies Tailor](./frontend/public/logo.png)

---

## 🌐 Live Demo

| Service | URL |
|---|---|
| Frontend | [sonali-ladies-tailor.vercel.app](https://sonali-ladies-tailor.vercel.app) |
| Backend API | [sonali-ladies-tailor-api.vercel.app](https://sonali-ladies-tailor-api.vercel.app) |

---

## 📁 Project Structure

```
Tailor Project/
├── frontend/          # React.js SPA
│   ├── public/        # Static assets, logo, images
│   ├── src/
│   │   ├── components/    # Navbar, Hero, Footer, Gallery, etc.
│   │   ├── pages/         # Home, GalleryDetailPage
│   │   └── data/          # Gallery and services data
│   └── vercel.json    # Vercel deployment config
│
└── backend/           # Node.js + Express.js API
    ├── routes/        # API routes (services)
    ├── server.js      # Main server with security middleware
    └── vercel.json    # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Run Frontend
```bash
cd frontend
npm install
npm start
```

### Run Backend
```bash
cd backend
npm install
npm start
```

Frontend runs on `http://localhost:3000`, Backend on `http://localhost:5000`.

---

## 🔒 Security Features

- **Helmet.js** — Secure HTTP headers (CSP, HSTS, XSS protection)
- **Rate Limiting** — DDoS / brute-force protection (200 req/15min)
- **CORS Whitelist** — Only trusted origins allowed
- **HPP** — HTTP Parameter Pollution protection
- **GZIP Compression** — Faster responses
- **Bot Blocking** — Known scanner user-agents blocked
- **Vercel Security Headers** — X-Frame-Options, Referrer-Policy, Permissions-Policy

---

## 📍 Shop Location

**Sonali Ladies Tailor**
Shop No-2, Ami Complex, Near Big Bazar Street,
Gulab Vihar Road, 150 Feet Ring Road,
Rajkot - 360005, Gujarat

📞 +91 76986 03287
📍 [Open in Google Maps](https://maps.app.goo.gl/eqPDtoqvgYkjsySm7)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, CSS3, React Router |
| Backend | Node.js, Express.js |
| Security | Helmet, express-rate-limit, HPP, CORS |
| Deployment | Vercel (frontend + backend) |
| Fonts | Google Fonts (Playfair Display, Poppins) |
| Maps | Google Maps Embed API |
