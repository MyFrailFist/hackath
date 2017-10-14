import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import blackrockCtrl from '../controllers/blackrock.controller';

const router = express.Router();

router.route('/')
  //get portfolio account
  .get(blackrockCtrl.getPortfolio);


router.route('/search/:nameParam')
  /** GET /api/post/:postId - Get post */
  .get(blackrockCtrl.search);


router.route('/data/:id')
  .get(blackrockCtrl.data);
/** Load post when API with postId route parameter is hit */

router.route('/performance/:id')
  .get(blackrockCtrl.performance);

export default router;
