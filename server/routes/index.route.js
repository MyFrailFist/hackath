import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import postRoutes from './post.route';
import blackrockRoutes from './blackrock.route';
import googleRoutes from './google.route';
import yahooRoutes from './yahoo.route';
import serviceRoutes from './service.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/posts', postRoutes);

router.use('/blackrock', blackrockRoutes);

router.use('/google', googleRoutes);

router.use('/yahoo', yahooRoutes);

router.use('/services', serviceRoutes);

router.get('/', function(req, res){
	res.render("page1");
})

export default router;
