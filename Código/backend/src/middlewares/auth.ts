import type { FastifyReply, FastifyRequest } from 'fastify';
import { AppError } from '../shared/errors/app-error.js';

export type Perfil = 'ADMIN' | 'PROFESSOR';
export type AuthUser = { id: string; perfil: Perfil };

declare module '@fastify/jwt' {
  interface FastifyJWT { user: AuthUser }
}

export async function requireAuth(request: FastifyRequest) {
  try {
    await request.jwtVerify();
  } catch {
    throw new AppError(401, 'Autenticacao necessaria.');
  }
}

export function requirePerfil(...perfis: Perfil[]) {
  return async (request: FastifyRequest, _reply: FastifyReply) => {
    await requireAuth(request);
    if (!perfis.includes(request.user.perfil)) throw new AppError(403, 'Perfil sem permissao.');
  };
}
