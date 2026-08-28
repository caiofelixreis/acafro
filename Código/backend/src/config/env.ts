import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT ?? 3333),
  jwtSecret: process.env.JWT_SECRET ?? 'dev-secret-change-me',
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173'
};
