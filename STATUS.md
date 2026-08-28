# STATUS — Projeto ACAFRO

> **Estado atual do projeto.** Arquivo mutável: mova os itens entre as seções conforme avançam.
> Histórico do que aconteceu e quando fica em [`CHANGELOG.md`](CHANGELOG.md) — atualize os dois.

**Última atualização:** 2026-08-27
**Sprint atual:** Sprint 1
**Prazo da Sprint 1:** ⏰ **2026-08-24 (segunda-feira), 18:00** — janela de envio aberta desde 10/08 20:00. Vale 10 pontos, entrega por upload de arquivo.

---

## 🔴 Bloqueios e riscos

- **Prazo apertado:** a Sprint 1 vence amanhã (24/08 18:00) e 6 dos 7 entregáveis ainda não têm artefato no repositório.
- 🔴 **Único item em aberto: a ata de acordo está com 7 de 8 assinaturas — falta o Prof. Filipe Torio Lopes Ruas Nhimi.** Os 7 entregáveis já estão publicados. Discentes e cliente já assinaram. Sem a assinatura do docente a ata está incompleta, e ela é o documento que estabelece autoria, direito de uso e o encaminhamento ao NIT.
- **Pergunta bloqueante à coordenação:** a entrega de 24/08 aceita os documentos apenas **preenchidos**, ou exige **assinados**? A resposta define se o prazo é alcançável. Perguntar hoje.
- **Data e hora da ata de acordo** foram preenchidas como 24/08/2026 às 19h. Se a reunião online de assinatura for em outro momento, o documento precisa ser corrigido — ele afirma que a reunião ocorreu nesse horário.

---

## 🟡 Em andamento

- **Reunião com a ACAFRO hoje (27/08)** — apresentar o [protótipo](prototipo/README.md) e
  validar as pendências. Roteiro de perguntas no README do protótipo e no
  [discovery](docs/2026-08-27-discovery-acafro.md).

- **Documentos jurídicos da Sprint 1** — modelos analisados campo a campo. Ver
  [guia de preenchimento](entregas/sprint-1/guia-preenchimento-documentos.md).
  Próximos passos imediatos:
  - [ ] Levantar os nomes completos dos 6 integrantes (como no SGA)
  - [x] ~~Enviar o pedido de dados ao Juliano pelo WhatsApp~~ — respondido em 24/08, dados registrados na [ficha](entregas/sprint-1/ficha-dados-cliente.md)
  - [x] ~~Reperguntar ao Juliano cidade, CEP, nome do software e assinatura~~ — respondido 24/08: Ouro Branco/MG, CEP 36420-000, "Sistema Acafro", assinatura **online**
  - [x] ~~Preencher os três documentos~~ — [prontos para assinatura](entregas/sprint-1/documentos/README.md)
  - [x] ~~Coletar as assinaturas digitais~~ — 15 das 16 coletadas em 24/08 entre 14h35 e 17h05
  - [ ] 🔴 **Pedir a assinatura do Prof. Filipe na ata de acordo** — é a única que falta
  - [x] ~~Levantar nomes completos da equipe~~ — recebidos em 24/08
  - [ ] Perguntar à coordenação: preenchido basta ou precisa estar assinado? há reconhecimento de firma? o nome da unidade curricular no modelo está correto?
  - [ ] Confirmar com o cliente o nome oficial do software (proposta: "Sistema Acafro")
  - [ ] Ajustar os blocos de assinatura de 5 para 6 discentes nos dois documentos

---

## ⬜ A fazer — Sprint 1

Entregáveis conforme o enunciado (detalhe em [`entregas/sprint-1/README.md`](entregas/sprint-1/README.md)):

- [x] ~~PROCURACAO_NIT_PUC_MINAS~~ — ✅ **assinada** (1/1) — [pdf](insumos/originais/2026-08-24-procuracao-nit-acafro-assinada.pdf)
- [ ] AtaAcordoInicial-ComClienteExterno-Noite — ⚠️ **7/8 assinaturas**, falta o Prof. Filipe — [pdf](insumos/originais/2026-08-24-ata-acordo-inicial-acafro-assinada.pdf)
- [x] ~~Termo de Sigilo e Confidencialidade~~ — ✅ **assinado** (7/7) — [pdf](insumos/originais/2026-08-24-termo-sigilo-confidencialidade-acafro-assinado.pdf)
- [x] ~~Kanban Board~~ — ✅ GitHub Project "DEMANDAS" (privado), print no repositório
- [x] ~~Planejamento da Sprint 1~~ — ✅ recebido do time e publicado
- [x] ~~Levantamento de Requisitos do Projeto~~ — ✅ 15 RF e 8 RNF
- [x] ~~Slides da Apresentação da Proposta~~ — ✅ [Canva](https://www.canva.com/design/DAHTLNxFIhU/ji2hAnZGI0tM7SJ_G3Z7tg/view)

Entrega publicada em **https://github.com/caiofelixreis/ti4-acafro** (pasta `sprint-1`).

## ⬜ A fazer — próximos passos técnicos

Declarados na ata de 21/08 (§11):

- [ ] Detalhar tecnicamente o módulo financeiro (mensalidades)
- [ ] Definir estrutura de perfis de acesso (administrador, professor, aluno/responsável)
- [ ] Especificar os Google Forms de coleta e o processo de migração para o sistema
- [ ] Aprofundar viabilidade e escopo da área social
- [ ] Definir stack tecnológica e cronograma de desenvolvimento

- [x] Estrutura base de código organizada em `Código/`, contendo frontend, backend e analytics
- [x] README atualizado com a estrutura e os comandos de execução da aplicação
- [x] Arquivo `CITATION.cff` criado para citação do software
- [x] Scripts centralizados de `verify` configurados em `Código/package.json`
- [x] Instruções de `/plan` ampliadas com casos de teste por User Story
- [x] Instruções de `/verify` reforçadas para geração obrigatória de relatório Markdown

---

## ✅ Concluído

- [x] **2026-08-21** — Reunião inicial de levantamento de requisitos com o cliente (Juliano Comodo)
- [x] **2026-08-23** — Estrutura do projeto criada: `AGENTS.md`, índice de insumos, rastreamento (STATUS/CHANGELOG)
- [x] **2026-08-23** — Ata da reunião inicial ingerida como insumo AI-first, com conteúdo integral preservado
- [x] **2026-08-23** — Os 3 modelos jurídicos da disciplina ingeridos como insumos e mapeados campo a campo
- [x] **2026-08-23** — Guia de preenchimento e ficha de dados do cliente produzidos
- [x] **2026-08-23** — Link do Canva da reunião registrado em [`insumos/referencias.md`](insumos/referencias.md)
- [x] **2026-08-24** — Dados cadastrais da Acafro e do representante legal recebidos do Juliano por WhatsApp e registrados; CNPJ validado
- [x] **2026-08-24** — Nomes completos dos 6 integrantes recebidos
- [x] **2026-08-24** — Os 3 documentos jurídicos preenchidos e prontos para assinatura, com correções nos defeitos dos modelos
- [x] **2026-08-24** — Procuração e termo de sigilo assinados digitalmente e ingeridos como insumos; ata com 7 de 8 assinaturas

---

## ❓ Dúvidas abertas com o cliente

Levantadas a partir da ata de 21/08. Levar para a próxima reunião:

| # | Dúvida | Origem |
|---|---|---|
| Q-01 | Área social: entra no escopo? Com quais funcionalidades e qual prioridade? | Ata §9 |
| Q-02 | Financeiro: formas de pagamento aceitas, quem emite a cobrança, há gateway? | Ata §6 |
| Q-03 | Perfis de acesso: professor tem perfil próprio? O que cada um pode ver/fazer? | Ata §11 |
| Q-04 | Qual a lista completa de localidades ativas? | Ata §5.3 |
| Q-05 | Quais modalidades existem e como funcionam as graduações de cada uma? Sabemos que **capoeira** é uma delas (Juliano é professor de capoeira) e que a "graduação" é a corda. Faltam as demais — o estoque cita "materiais de dança". | Ata §4 |
| Q-06 | Fotos e vídeos de aulas com menores: há termo de consentimento dos responsáveis? Por quanto tempo a mídia fica armazenada? (LGPD) | Ata §5.1 |
| Q-07 | Quem é o "responsável" no cadastro — pode haver mais de um por aluno? | Ata §4 |
| Q-08 | Quais são todos os núcleos ativos hoje, com nome oficial e endereço? Pesquisa achou São Francisco, Belvedere, Olaria e Centro; a ata cita Matriz e 1º de Maio | Discovery 27/08 |
| Q-09 | Quais modalidades estão ativas, e quais têm sistema de graduação? | Discovery 27/08 |
| Q-10 | Se as oficinas para menores são gratuitas, quem paga mensalidade? | Discovery 27/08 |
| Q-11 | Para quais editais e parceiros a ACAFRO presta contas, e em que formato? | Discovery 27/08 |
| Q-12 | Quantos professores atuam, e cada um está ligado a um núcleo? | Discovery 27/08 |
| Q-13 | Existe acervo de fotos e documentos hoje? Onde fica e quem acessa? | Discovery 27/08 |
| Q-14 | O endereço da sede é Rua Professor José Luiz, 460 ou Rua Hermógenes C. Carvalho, 681? Fontes divergem | Discovery 27/08 |
| Q-08 | O cliente está ciente de que, após o fim da disciplina, a equipe não se responsabiliza por implantação, hospedagem, manutenção e evolução? | Modelo da ata de acordo, cláusula C-05 |
| Q-09 | O nome oficial do software será "Sistema Acafro"? É o nome que vai ao registro no INPI. | Modelo da procuração, campo P-06 |
