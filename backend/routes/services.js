const express = require('express');
const router = express.Router();

// Tailor services data (served directly in-memory without database dependency)
const SERVICES = [
  {
    _id: 'blouse-stitching',
    id: 'blouse-stitching',
    name: 'Blouse Stitching',
    description: 'Custom blouse stitching with perfect fit, intricate embroidery and elegant finish for every occasion.',
    image: '/images/blouse.jpg',
    category: 'blouse',
  },
  {
    _id: 'dress-stitching',
    id: 'dress-stitching',
    name: 'Dress Stitching',
    description: 'Beautiful ladies dresses stitched to your exact measurements with premium fabric and detailing.',
    image: '/images/dress.jpg',
    category: 'dress',
  },
  {
    _id: 'kurtis-suits',
    id: 'kurtis-suits',
    name: 'Kurtis & Suits',
    description: 'Elegant kurtis, salwar suits and palazzo sets crafted with care, creativity and precision.',
    image: '/images/kurtis.jpg',
    category: 'kurtis',
  },
  {
    _id: 'lehengas-traditional',
    id: 'lehengas-traditional',
    name: 'Lehengas & Traditional Wear',
    description: 'Stunning lehengas, ghaghra cholis and traditional festive outfits for every celebration.',
    image: '/images/lehenga.jpg',
    category: 'lehenga',
  },
];

// GET /api/services
router.get('/', (req, res) => {
  res.json({ success: true, data: SERVICES });
});

// GET /api/services/:id
router.get('/:id', (req, res) => {
  const found = SERVICES.find((s) => s._id === req.params.id || s.id === req.params.id);
  if (found) {
    return res.json({ success: true, data: found });
  }
  res.status(404).json({ success: false, message: 'Service not found' });
});

module.exports = router;
