import type { FastifyInstance } from 'fastify';
import type { Perfil } from '../../middlewares/auth.js';

export async function authRouter(app: FastifyInstance) {
  app.post<{ Body: { perfil?: Perfil } }>('/demo-token', async (request) => {
    const perfil = request.body?.perfil === 'PROFESSOR' ? 'PROFESSOR' : 'ADMIN';
    return { token: app.jwt.sign({ id: `demo-${perfil.toLowerCase()}`, perfil }), perfil };
  });
}
