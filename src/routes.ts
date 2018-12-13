import { Router } from 'express';
import config from './config/config';

const router = Router();

/**
 * GET /info
 */
router.get('/info', (req, res) => {
  res.json({
    name: config.app.name,
    version: config.app.version,
    description: config.app.description
  });
});

export default router;
