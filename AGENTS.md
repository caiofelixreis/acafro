# AGENTS.md — Projeto ACAFRO

> Leia este arquivo **antes** de qualquer tarefa neste diretório.
> Ele diz onde estão os insumos, como registrá-los e onde marcar o que foi feito.

## 1. O que é este projeto

Aplicação web para a **ACAFRO** — associação de cultura (aulas, alunos, professores,
materiais, eventos, localidades). Trabalho Interdisciplinar da disciplina **TI 4**,
PUC Minas, 2026/2.

- **Cliente externo:** Juliano Comodo (responsável pela Acafro)
- **Equipe:** Caio Felix, Milena Cardoso, Marina Diniz, Mariana Tavares, Murilo, João Gabriel

## 2. Mapa do diretório

```
acafro/
├── AGENTS.md                  ← você está aqui: regras de operação
├── README.md                  ← visão geral para humanos
├── STATUS.md                  ← estado atual: fazendo / feito / bloqueado
├── CHANGELOG.md               ← log cronológico append-only (o que foi feito e quando)
├── insumos/
│   ├── INDEX.md               ← catálogo de TODOS os insumos (fonte de verdade)
│   ├── referencias.md         ← links sem arquivo (Canva, Drive, boards)
│   ├── originais/             ← arquivos como recebidos, IMUTÁVEIS (.docx, .pdf, .xlsx…)
│   └── ai-first/              ← mesmo conteúdo em Markdown, legível por agente
│       └── _TEMPLATE.md       ← modelo obrigatório para novos insumos
├── entregas/
│   └── sprint-1/              ← uma pasta por sprint, com checklist de entregáveis
└── docs/                      ← artefatos produzidos pela equipe (requisitos, arquitetura…)
```

## 3. Onde estão os insumos

**Ponto de entrada único: [`insumos/INDEX.md`](insumos/INDEX.md).**
Recursos externos que não são arquivo (links do Canva, Drive, boards) ficam em
[`insumos/referencias.md`](insumos/referencias.md).

Nunca varra o diretório procurando arquivos. Leia o INDEX, escolha o insumo relevante
e abra a versão `ai-first/`. Os `.docx`/`.pdf` em `originais/` existem para prova de
proveniência e para reenvio ao cliente/professor — não são fonte de leitura para agentes.

## 4. Regra AI-first para insumos

Todo documento que entra no projeto passa por este processo, **sem exceção**:

1. **Preservar o original.** Copie o arquivo recebido para `insumos/originais/` com o nome
   `AAAA-MM-DD-slug.ext` (data do documento, não a de hoje). Nunca edite, renomeie
   destrutivamente ou apague um original.
2. **Registrar o hash.** `shasum -a 256 <arquivo>` — vai no frontmatter da versão ai-first.
   É o que garante que o Markdown corresponde ao original.
3. **Converter para Markdown** em `insumos/ai-first/AAAA-MM-DD-slug.md`, partindo de
   [`_TEMPLATE.md`](insumos/ai-first/_TEMPLATE.md).
4. **Conteúdo íntegro, obrigatoriamente.** A seção `## Conteúdo integral` reproduz o
   documento inteiro — todos os itens, números de seção, tabelas e valores. Não resuma,
   não corte, não "melhore" a redação, não normalize termos do cliente. Se algo do
   original não for representável em Markdown (imagem, assinatura, carimbo), registre
   um marcador explícito: `> [não-textual: assinatura digitalizada]`.
5. **Interpretação fica separada.** Leituras, requisitos derivados e dúvidas vão na seção
   `## Extração estruturada`, claramente apartada do conteúdo original. Nada inferido
   pode contaminar o conteúdo integral.
6. **Atualizar o INDEX** e registrar a entrada no `CHANGELOG.md`.

**Insumo corrigido pelo cliente ⇒ novo insumo.** Nunca sobrescreva. Adicione a nova
versão com a data dela e marque a anterior como `superseded-by:` no frontmatter.

## 5. Rastreamento: o que está sendo feito, o que foi feito, quando

Dois arquivos, com papéis distintos — mantenha os dois:

| Arquivo | Responde | Como escrever |
|---|---|---|
| `STATUS.md` | "Como está **agora**?" | Estado mutável. Mova itens entre as seções. Sempre atualize o campo `Última atualização`. |
| `CHANGELOG.md` | "O que aconteceu e **quando**?" | Append-only. Entrada nova no topo, com data `AAAA-MM-DD`. Nunca reescreva entradas antigas. |

**Ao encerrar qualquer tarefa neste diretório, atualize os dois.** Uma tarefa sem
registro no CHANGELOG é considerada não feita.

Formato de entrada no CHANGELOG:

```
## 2026-08-23
- **[insumo]** Ata da reunião inicial (21/08) ingerida e convertida para ai-first. — Caio
```

Prefixos: `[insumo]` `[doc]` `[entrega]` `[decisão]` `[código]` `[reunião]`.

## 6. Convenções

- **Idioma:** português (pt-BR) em toda a documentação. Termos do cliente ficam como o
  cliente fala (ex.: "graduação", "localidade", "marcação de ponto").
- **Datas:** sempre `AAAA-MM-DD` em metadados. Datas relativas ("semana que vem") são
  proibidas — converta para data absoluta.
- **Nomes de arquivo:** `AAAA-MM-DD-slug-em-kebab-case.ext`.
- **Incerteza:** não invente. Se a informação não está num insumo, marque
  `⚠️ A CONFIRMAR COM O CLIENTE` e registre em `STATUS.md` na seção de dúvidas abertas.

## 7. Contexto funcional já levantado

Escopo definido na reunião de 21/08/2026 (ver
[insumo](insumos/ai-first/2026-08-21-ata-reuniao-inicial.md) para o texto completo):

- Duas áreas de acesso: **Administrativa** e **Cliente (Aluno)**
- Módulos: Alunos · Frequência/Presença · Financeiro (mensalidades) · Estoque · Eventos
- Frequência com foto, vídeo e geolocalização + lista de presença manual por localidade
- Página pública institucional para eventos, parcerias e editais
- Em avaliação: área social
- Coleta inicial de dados via Google Forms
