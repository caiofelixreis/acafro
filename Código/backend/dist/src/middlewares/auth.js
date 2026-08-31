import { AppError } from '../shared/errors/app-error.js';
export async function requireAuth(request) {
    try {
        await request.jwtVerify();
    }
    catch {
        throw new AppError(401, 'Autenticacao necessaria.');
    }
}
export function requirePerfil(...perfis) {
    return async (request, _reply) => {
        await requireAuth(request);
        if (!perfis.includes(request.user.perfil))
            throw new AppError(403, 'Perfil sem permissao.');
    };
}
