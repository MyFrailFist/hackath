import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import yahoo from '../controllers/yahoo.controller';


const router = express.Router();

router.route('/getFinancialData/:symbol')
	.get(yahoo.getFinancialData)


export default router;
