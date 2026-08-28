import { requirePerfil } from '../../middlewares/auth.js';
import { NucleoService } from './nucleo-service.js';
const bodySchema = { type: 'object', required: ['nome'], properties: { nome: { type: 'string', minLength: 1 }, endereco: { type: 'string' }, ativo: { type: 'boolean' } } };
export async function nucleoRouter(app) {
    const service = new NucleoService();
    app.get('/', async () => service.list());
    app.get('/:id', async (request) => service.get(request.params.id));
    app.post('/', { preHandler: requirePerfil('ADMIN'), schema: { body: bodySchema } }, async (request, reply) => reply.code(201).send(await service.create(request.body)));
    app.put('/:id', { preHandler: requirePerfil('ADMIN') }, async (request) => service.update(request.params.id, request.body));
    app.delete('/:id', { preHandler: requirePerfil('ADMIN') }, async (request) => service.delete(request.params.id));
}
