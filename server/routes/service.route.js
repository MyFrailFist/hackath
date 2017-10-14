import express from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation';
import valueService from '../services/valueService';

const router = express.Router();

router.route('/')
  .get(valueService.attachValues)

export default router;
