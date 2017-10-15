import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import valueService from '../services/valueService';

const router = express.Router();

router.route('/')
  	.get(valueService.attachValues)

router.route('/goPage2/:formula')
	.get(valueService.goPage2)

router.route('/goPage3/:formula')
	.get(valueService.goPage3)

export default router;
