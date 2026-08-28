# Backend ACAFRO

## Inicializacao

```powershell
Copy-Item .env.example .env
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

A API inicia em `http://localhost:3333`. O CRUD de nucleos fica em `/api/nucleos`.

Para obter um token local de desenvolvimento, use `POST /api/auth/demo-token` com `{ "perfil": "ADMIN" }` ou `{ "perfil": "PROFESSOR" }` e envie o token como `Authorization: Bearer <token>`.
