const express = require('express');
const router = express.Router();
const Device = require('../models/device');

// All Authors Route
router.get('/', (req, res) => {
  res.render('devices/index');
});

// New Author Route
router.get('/new', (req, res) => {
  res.render('devices/new', { device: new Device() });
});

// Create Author Route
router.post('/', (req, res) => {
  res.send('Create');
});

module.exports = router;
