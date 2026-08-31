# Sistema ACAFRO

Aplicação web para a **ACAFRO** — Associação de Cultura Afro-Brasileira de Ouro Branco/MG,
que oferece capoeira, percussão, música e dança a crianças e jovens em quatro núcleos da
cidade, com oficinas gratuitas para menores de idade.

Trabalho Interdisciplinar 4 — Engenharia de Software, PUC Minas, 2026/2.

- **Cliente:** Juliano Evangelista Pinto, presidente da ACAFRO
- **Professor orientador:** Filipe Torio Lopes Ruas Nhimi
- **Equipe:** Caio Felix Reis · Marina Silva Diniz · Mariana Fonseca Reis Tavares ·
  Milena Cardoso de Araújo · Murilo Duarte Moura de Almeida · João Gabriel da Silva Moreira

## Por onde começar

| Se você quer… | Abra |
|---|---|
| Trabalhar neste projeto (pessoa ou agente) | [`AGENTS.md`](AGENTS.md) — regras de operação |
| Saber o estado atual e o que está pendente | [`STATUS.md`](STATUS.md) |
| Saber o que já foi feito e quando | [`CHANGELOG.md`](CHANGELOG.md) |
| Citar o software | [`CITATION.cff`](CITATION.cff) |
| Ver o protótipo navegável | [`prototipo/`](prototipo/README.md) |
| Executar o código da aplicação | [`Código/`](Código/) |
| Entender quem é a ACAFRO | [`docs/2026-08-27-discovery-acafro.md`](docs/2026-08-27-discovery-acafro.md) |
| Consultar os documentos do cliente | [`insumos/INDEX.md`](insumos/INDEX.md) |
| Ver a entrega da Sprint 1 | [`entregas/sprint-1/`](entregas/sprint-1/README.md) |

## Estrutura

```
acafro/
├── AGENTS.md          regras de operação do repositório
├── STATUS.md          o que está sendo feito, feito e bloqueado
├── CHANGELOG.md       registro cronológico, append-only
├── PRIVACIDADE.md     ⚠️ quais arquivos contêm dados pessoais
├── insumos/           documentos recebidos de fora (originais + versão AI-first)
├── docs/              artefatos produzidos pela equipe (discovery, requisitos)
├── entregas/          entregáveis por sprint
├── marca/             logo e paleta
├── prototipo/         protótipo navegável (HTML estático, mobile first)
├── branding/          proposta de identidade visual em Next.js
└── Código/            código executável da aplicação
    ├── backend/         API Node.js + TypeScript + Fastify + Prisma/SQLite
    ├── frontend/        interface React + TypeScript + Vite
    └── data-analytics/  relatórios Python + Pandas + ReportLab
```

`Código/` contém somente o código e as configurações necessárias para executar a
aplicação. Documentação, insumos, protótipo e identidade visual ficam nas pastas
correspondentes da raiz.

## Código da aplicação

### Backend

Em um terminal PowerShell:

```powershell
Set-Location Código/backend
Copy-Item .env.example .env
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

A API fica disponível em `http://localhost:3333`. O endpoint de saúde é
`GET /health`, e o CRUD de núcleos fica em `/api/nucleos`. Consulte
[`Código/backend/README.md`](Código/backend/README.md) para o token de demonstração e os perfis de acesso.

### Frontend

Em outro terminal:

```powershell
Set-Location Código/frontend
Copy-Item .env.example .env
npm install
npm run dev
```

A interface fica disponível em `http://localhost:5173` e consome a API pelo hook
`useNucleos`. Detalhes em [`Código/frontend/README.md`](Código/frontend/README.md).

### Analytics

Com o banco criado pelo backend:

```powershell
Set-Location Código/data-analytics
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python report_nucleos.py --database ..\backend\prisma\dev.db --output .\relatorio-nucleos.pdf
```

O script lê o SQLite, agrega os núcleos ativos com Pandas e gera um relatório PDF.
Veja [`Código/data-analytics/README.md`](Código/data-analytics/README.md).

## Protótipo

Roda sem build. Da raiz do projeto:

```bash
python3 -m http.server 5173 --directory prototipo
```

Depois acesse `http://localhost:5173`. A área restrita fica em `/sistema.html`, com dois
perfis de demonstração (administração e professor). Detalhes em
[`prototipo/README.md`](prototipo/README.md).

## Como este repositório funciona

Todo documento recebido de fora entra como **insumo**: o arquivo original é preservado
intacto em `insumos/originais/` e ganha uma versão Markdown em `insumos/ai-first/` com o
conteúdo integral, metadados e hash — de modo que qualquer pessoa ou agente consiga
trabalhar sem abrir um `.docx`, e sem que nada do original se perca.

Estado atual fica em `STATUS.md`; histórico em `CHANGELOG.md`. **Toda tarefa concluída
atualiza os dois.** O processo completo está em [`AGENTS.md`](AGENTS.md).

> ⚠️ Este repositório é público e contém dados pessoais de terceiros (documentos
> assinados e dados cadastrais do cliente). Leia [`PRIVACIDADE.md`](PRIVACIDADE.md) antes
> de adicionar ou redistribuir conteúdo.
