import { AppError } from '../shared/errors/app-error.js';
export function errorHandler(error, _request, reply) {
    const statusCode = error instanceof AppError ? error.statusCode : error.statusCode ?? 500;
    const message = statusCode >= 500 ? 'Erro interno do servidor.' : error.message;
    if (statusCode >= 500)
        console.error(error);
    return reply.status(statusCode).send({ error: message });
}
