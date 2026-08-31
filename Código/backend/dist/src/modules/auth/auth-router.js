export async function authRouter(app) {
    app.post('/demo-token', async (request) => {
        const perfil = request.body?.perfil === 'PROFESSOR' ? 'PROFESSOR' : 'ADMIN';
        return { token: app.jwt.sign({ id: `demo-${perfil.toLowerCase()}`, perfil }), perfil };
    });
}
