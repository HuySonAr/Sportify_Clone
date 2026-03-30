import { Router } from 'express';
import { protectRoute, requireAdmin} from '../middleware/authMiddelware.js';
import { getAllSongs, getFeatureSongs, getMadeForYouSongs, getTredingSongs } from '../controller/songController.js';

const router = Router();

router.get("/", protectRoute, requireAdmin, getAllSongs);
router.get("/featured", getFeatureSongs);
router.get("/made-for-you", getMadeForYouSongs);
router.get("/trending", getTredingSongs);


export default router;
