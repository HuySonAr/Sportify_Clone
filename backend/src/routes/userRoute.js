import { Router } from 'express';
import { protectRoute, requireAdmin } from '../middleware/authMiddelware.js';
import { getAllUsers, getMessages } from '../controller/userController.js';

const router = Router();

router.get('/', protectRoute, requireAdmin, getAllUsers);
router.get("/messsage/:userId", protectRoute, getMessages);

export default router;
