const router = require('express').Router();

const developerRoutes = require('./developer-routes.js');
const membersRoutes = require('./members-routes');
const responseRoutes = require('./response-routes');
const servicesRoutes = require('./service-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/comments', commentRoutes);

module.exports = router;