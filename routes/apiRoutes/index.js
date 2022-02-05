const express = require('express');
const router = express.Router();

router.use(require('./candidtateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'))

module.exports = router;