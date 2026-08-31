import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { AppError } from '../shared/errors/app-error.js';

export function errorHandler(error: FastifyError, _request: FastifyRequest, reply: FastifyReply) {
  const statusCode = error instanceof AppError ? error.statusCode : error.statusCode ?? 500;
  const message = statusCode >= 500 ? 'Erro interno do servidor.' : error.message;
  if (statusCode >= 500) console.error(error);
  return reply.status(statusCode).send({ error: message });
}
