import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Song with GET medthod');
});

export default router;
