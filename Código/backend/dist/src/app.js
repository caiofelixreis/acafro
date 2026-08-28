import Fastify from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import { env } from './config/env.js';
import { errorHandler } from './middlewares/error-handler.js';
import { authRouter } from './modules/auth/auth-router.js';
import { nucleoRouter } from './modules/nucleos/nucleo-router.js';
export function buildApp() {
    const app = Fastify({ logger: true });
    app.register(cors, { origin: env.corsOrigin });
    app.register(jwt, { secret: env.jwtSecret });
    app.setErrorHandler(errorHandler);
    app.get('/health', async () => ({ status: 'ok', service: 'acafro-backend' }));
    app.register(authRouter, { prefix: '/api/auth' });
    app.register(nucleoRouter, { prefix: '/api/nucleos' });
    return app;
}
