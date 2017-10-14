import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import googleCtrl from '../controllers/google.controller';


const router = express.Router();

router.route('/')
  //get all the major indices
  .get(googleCtrl.getAllData);


router.route('/companyNews/:symbol')
  /** GET /api/post/:postId - Get post */
  .get(googleCtrl.companyNews);


router.route('/historicalData/:symbol')
  .get(googleCtrl.historicalData);
/** Load post when API with postId route parameter is hit */


export default router;
