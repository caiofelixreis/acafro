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
| Ver o protótipo navegável | [`prototipo/`](prototipo/README.md) |
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
└── branding/          proposta de identidade visual em Next.js
```

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
