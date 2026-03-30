import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middleware/authMiddelware.js';
import { getAllUsers } from '../controller/userController.js';

const router = Router();

router.get('/', protectRoute, requireAdmin, getAllUsers);
//todo: getMessage

export default router;
