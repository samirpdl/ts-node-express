import app from './app';
import logger from './utils/logger';
import config from './config/config';

app.listen(config.app.port, () =>
  logger.info(`Listening on port ${config.app.port}`)
);
