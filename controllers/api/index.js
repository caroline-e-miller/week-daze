const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const statusRoutes = require('./statusRoutes');

router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/status', statusRoutes);

module.exports = router;