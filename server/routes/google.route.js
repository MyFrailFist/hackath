import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import googleCtrl from '../controllers/google.controller';


const router = express.Router();

router.route('/')
  //get portfolio account
  .get(googleCtrl.getPortfolio);


router.route('/search/:nameParam')
  /** GET /api/post/:postId - Get post */
  .get(googleCtrl.search);


router.route('/data/:id')
  .get(googleCtrl.data);
/** Load post when API with postId route parameter is hit */

router.route('/performance/:id')
  .get(googleCtrl.performance);

export default router;
