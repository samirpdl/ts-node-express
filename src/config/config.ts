import * as dotenv from 'dotenv';
import * as pkg from '../../package.json';

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === 'test';
const PORT = (isTestEnvironment && 8888) || process.env.PORT || 8080;

export default {
  app: {
    name: (pkg as any).name,
    version: (pkg as any).version,
    description: (pkg as any).description,
    host: process.env.APP_HOST,
    baseUrl: process.env.API_BASE_URL,
    port: PORT,
    isTestEnvironment
  },
  logging: {
    path: process.env.LOGGING_DIR || 'logs',
    level: process.env.LOGGING_LEVEL || 'info',
    maxFiles: process.env.LOGGING_MAX_FILES || 5
  },
  database: {
    client: process.env.DB_CLIENT,
    connection: {
      charset: 'utf8',
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST || '127.0.0.1'
    }
  }
};
