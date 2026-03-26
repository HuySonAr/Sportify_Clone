import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middleware/authMiddelware.js';

const router = Router();

router.get('/', protectRoute, requireAdmin);

export default router;
