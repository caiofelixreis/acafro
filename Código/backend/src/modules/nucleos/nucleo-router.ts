import type { FastifyInstance } from 'fastify';
import { requirePerfil } from '../../middlewares/auth.js';
import { NucleoService } from './nucleo-service.js';

const bodySchema = { type: 'object', required: ['nome'], properties: { nome: { type: 'string', minLength: 1 }, endereco: { type: 'string' }, ativo: { type: 'boolean' } } } as const;

export async function nucleoRouter(app: FastifyInstance) {
  const service = new NucleoService();
  app.get('/', async () => service.list());
  app.get<{ Params: { id: string } }>('/:id', async (request) => service.get(request.params.id));
  app.post<{ Body: { nome: string; endereco?: string; ativo?: boolean } }>('/', { preHandler: requirePerfil('ADMIN'), schema: { body: bodySchema } }, async (request, reply) => reply.code(201).send(await service.create(request.body)));
  app.put<{ Params: { id: string }; Body: { nome?: string; endereco?: string; ativo?: boolean } }>('/:id', { preHandler: requirePerfil('ADMIN') }, async (request) => service.update(request.params.id, request.body));
  app.delete<{ Params: { id: string } }>('/:id', { preHandler: requirePerfil('ADMIN') }, async (request) => service.delete(request.params.id));
}
