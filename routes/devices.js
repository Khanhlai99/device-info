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
  const device = new Device({
    name: req.body.name,

  });
  device.save((err, newDevice) => {
    if (err) {
      res.render('devices/new', {
        device: device,
        errorMessage: 'Error saving device',
      })
    } else {
      // res.redirect(`devices/${newDevice.id}`)
      res.redirect('devices')
    }
  });
});

module.exports = router;
