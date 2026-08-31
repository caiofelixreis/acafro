# CHANGELOG — Projeto ACAFRO

Registro cronológico do que foi feito e quando. **Append-only:** entradas novas vão no
topo; entradas antigas nunca são reescritas nem removidas. Estado atual fica em
[`STATUS.md`](STATUS.md).

Formato: `- **[prefixo]** descrição — autor`
Prefixos: `[insumo]` `[doc]` `[entrega]` `[decisão]` `[código]` `[reunião]`

---

## 2026-08-31

- **[insumo]** Cliente forneceu a **logo em PNG com transparência**. Recortada no limite do conteúdo (612 × 276) e salva como `marca/logo-acafro.png`; gerada a variante `logo-acafro-escura.png` recolorindo só o lettering, para uso sobre fundo claro. O JPEG de fundo branco foi descartado. — Caio
- **[código]** A logo real substituiu a marca derivada em SVG nas seis superfícies do protótipo. Sem fundo branco, ela assenta direto no escuro — o cartão branco do hero saiu. — Caio
- **[entrega]** Protótipo publicado em **https://acafro.vercel.app**. — Caio

## 2026-08-27

- **[decisão]** Uso de cor revisto para **pontual**: base neutra quente (areia, creme, quase-preto) e as cores da logo reservadas ao que carrega significado — vermelho em acento e alerta, verde em confirmação, amarelo em atenção. Botões primários passaram a ser escuros; faixas tricolores de página inteira viraram uma régua curta de 78px; as fotos ganharam família neutra quente no lugar do revezamento vermelho/amarelo/verde. — Caio
- **[decisão]** Uso da logo revisto. Ela aparecia em 6 pontos, sempre em caixa branca sobre fundo escuro. Agora aparece **uma vez por página**, como peça institucional no hero. Nos demais lugares entra uma **marca derivada** desenhada a partir do zigue-zague da própria logo (`prototipo/assets/marca.svg`), em `currentColor` com três pontos nas cores da ACAFRO — funciona sobre claro e escuro sem caixa branca. Criado também um padrão de repetição (`padrao.svg`) e um lockup com wordmark. — Caio
- **[decisão]** Tipografia trocada: **Archivo** (títulos) + **Inter** (texto), no lugar de Fraunces + DM Sans da proposta de branding. O Archivo tem esqueleto quadrado que conversa com as formas da logo. Troca centralizada em `--display`/`--sans`. — Caio

- **[decisão]** Protótipo migrado para a linguagem visual da proposta de branding da equipe (`branding/identidade-visual-cultural1`): editorial e quente, display serifado Fraunces em peso 400 com tracking negativo, DM Sans no texto, eyebrows, painéis suaves, sidebar escura e ponto final colorido nos títulos. A **estrutura** foi preservada e a **paleta** trocada pelas cores da logo da ACAFRO — primária vermelho `#E52B22`, acento amarelo `#EFE62E`/ouro `#A8930C`, secundária verde `#0F8F33`, escuro `#14100E`, fundo areia `#F7F3EC`. — Caio

- **[código]** Protótipo reescrito **mobile first**: base de CSS para celular com breakpoints em 700px e 1000px, menu hambúrguer no site, gaveta lateral + barra de abas no sistema, tabelas que viram cartões no celular, barra fixa de WhatsApp, alvos de toque de 48px e inputs de 16px. — Caio
- **[código]** Bug corrigido: o atributo `hidden` estava sendo sobrescrito pelo `display:flex` das classes `.login`/`.shell`, então a tela de login continuava visível por cima do app depois do login. — Caio

- **[doc]** Discovery da ACAFRO em fontes públicas: [`docs/2026-08-27-discovery-acafro.md`](docs/2026-08-27-discovery-acafro.md). Achados principais — fundada em janeiro de 2009 por Wanderson Wagner de Campos (Mestre Sapo); ~150 alunos de capoeira e 200+ atendimentos; núcleos São Francisco, Belvedere, Olaria e Centro; oficinas gratuitas para menores; Medalha Dona Jandira 2025 pela Câmara de Ouro Branco. Seis perguntas novas para o cliente (Q-08 a Q-13). — Caio
- **[insumo]** Logo da ACAFRO salva em [`marca/`](marca/README.md), com paleta amostrada dos pixels: preto `#0D0D0D`, vermelho `#E52B22`, amarelo `#EFE62E`, verde `#0F8F33`. — Caio
- **[código]** Protótipo navegável em [`prototipo/`](prototipo/README.md): site público com CTA de WhatsApp e área restrita com perfis de administração e professor, 14 telas no total. Sem funcionalidade real — serve para validar navegação, escopo por perfil e identidade visual. — Caio
- **[decisão]** O módulo de frequência é, na prática, o **módulo de prestação de contas**: a ACAFRO depende de editais e apoio municipal, e as fotos/vídeos das aulas são a evidência de execução. Isso muda a prioridade do relatório exportável, que precisa sair apresentável a financiador. — Caio

## 2026-08-24

- **[entrega]** Planejamento da Sprint 1 recebido do time e publicado. **Os 7 entregáveis da Sprint 1 estão no repositório.** Pendência remanescente: a 8ª assinatura da ata de acordo (Prof. Filipe). — Caio

- **[entrega]** Repositório público [`caiofelixreis/ti4-acafro`](https://github.com/caiofelixreis/ti4-acafro) criado com a pasta `sprint-1`, contendo exclusivamente os artefatos produzidos pela equipe: os 3 PDFs assinados, o levantamento de requisitos, o print do Kanban e os links do Canva (slides do pitch e gravação da reunião). Conferido byte a byte que os arquivos são idênticos aos enviados — alteração invalidaria as assinaturas digitais. — Caio
- **[decisão]** Documentos que eu havia redigido (planejamento da sprint, levantamento de requisitos em markdown, descrições do Kanban e da apresentação) foram removidos do repositório a pedido do time: a entrega contém apenas material produzido pela equipe. — Caio
- **[insumo]** Links registrados em [`insumos/referencias.md`](insumos/referencias.md): gravação da reunião com o cliente, slides do pitch, board DEMANDAS e o repositório da entrega. — Caio

- **[insumo]** Os três documentos assinados digitalmente ingeridos como insumos (PDFs originais preservados + versões ai-first com conteúdo integral e tabela de signatários). Verificação das assinaturas embutidas: procuração **1/1** ✅, termo de sigilo **7/7** ✅, ata de acordo **7/8** ⚠️ — falta a assinatura do Prof. Filipe Torio Lopes Ruas Nhimi. Discentes e cliente assinaram entre 14h35 e 17h05. — Caio

- **[entrega]** Documentos regerados: o modelo da ata de acordo trazia Joyce Christina de Paiva Carvalho e Soraia Lúcia da Silva como docentes, mas o professor da turma é **Filipe Torio Lopes Ruas Nhimi**, e é o único. Nomes substituídos no corpo, concordância ajustada para o singular ("professor da unidade curricular") e bloco de assinatura de docentes reduzido de 2 para 1. Total de assinaturas na ata caiu de 9 para 8. — Caio

- **[entrega]** Os três documentos jurídicos preenchidos e prontos para assinatura em [`entregas/sprint-1/documentos/`](entregas/sprint-1/documentos/README.md), preservando a formatação dos modelos originais. Além do preenchimento, corrigidos defeitos dos modelos: `"DFDDFD"` no campo do nome da invenção na procuração; blocos de assinatura reconstruídos de 5 para 6 vagas de discente (a ata tinha uma vaga sem linha de assinatura); concordância `de/pelo ASSOCIAÇÃO` → `da/pela` no termo; marca-texto amarelo dos placeholders removido. — Caio
- **[decisão]** Assinatura será **online**. Local mantido como "Belo Horizonte" na ata e no termo (texto fixo do modelo) e definido como "Ouro Branco" na procuração, onde o outorgante assina. A confirmar com as professoras. — Caio
- **[decisão]** Data e hora da ata de acordo preenchidas como 24/08/2026 às 19h — a reunião de assinatura ainda não tem data marcada, então esse é o campo a corrigir se ela ocorrer em outro momento. — Caio
- **[insumo]** Nomes completos dos 6 integrantes recebidos do time. Endereço completo (Ouro Branco/MG, CEP 36420-000) e nome do software ("Sistema Acafro") confirmados pelo Juliano. — Caio

- **[insumo]** Dados cadastrais da Acafro e do representante legal recebidos do Juliano por WhatsApp e registrados na [ficha](entregas/sprint-1/ficha-dados-cliente.md): razão social ASSOCIAÇÃO DE CULTURA AFRO BRASILEIRA DE OURO BRANCO, CNPJ 10.754.160/0001-80 (dígitos verificadores conferidos), endereço, e qualificação completa do representante. — Caio
- **[decisão]** O nome civil do cliente é **Juliano Evangelista Pinto**; "Comodo/Komodo" é apelido de capoeira. Os três documentos jurídicos usam exclusivamente o nome civil. A ata de 21/08 permanece como está — é registro histórico, não se altera. — Caio
- **[decisão]** Cargo na procuração será **Presidente** (ele informou "presidente, coordenador e professor"; só o primeiro tem efeito de representação legal). A confirmar com o cliente. — Caio
- **[insumo]** Ficaram 4 pendências com o cliente: cidade, CEP, nome oficial do software e data da assinatura. Mensagem de follow-up redigida na ficha. — Caio

## 2026-08-23

- **[insumo]** Os 3 modelos jurídicos da disciplina ingeridos: procuração NIT (sha256 `88328930…`), ata de acordo com cliente externo (`4077ec50…`) e termo de sigilo/LGPD (`5b947028…`). Originais preservados e convertidos para AI-first com conteúdo integral e mapa de placeholders. — Caio
- **[doc]** [`entregas/sprint-1/guia-preenchimento-documentos.md`](entregas/sprint-1/guia-preenchimento-documentos.md): mapa campo a campo dos três documentos, separando o que a equipe resolve sozinha, o que depende do cliente e o que depende da coordenação. — Caio
- **[doc]** [`entregas/sprint-1/ficha-dados-cliente.md`](entregas/sprint-1/ficha-dados-cliente.md): pedido de dados à Acafro. Escrito como mensagem informal pronta para WhatsApp (canal de comunicação com o cliente), explicando para que serve cada documento, mais tabela para registrar as respostas. — Caio
- **[decisão]** A comunicação com a Acafro acontece por WhatsApp. Assuntos delicados (cláusula de não responsabilidade pós-entrega, sigilo do código, mídia de menores) ficam para a reunião de assinatura, não para mensagem. — Caio
- **[insumo]** Link do Canva da reunião com o cliente registrado em [`insumos/referencias.md`](insumos/referencias.md), novo arquivo para recursos externos sem arquivo. — Caio
- **[decisão]** Achados na análise dos modelos, levados para STATUS: os blocos de assinatura têm 5 vagas de discente para uma equipe de 6; a procuração veio com `"DFDDFD"` no campo do nome da invenção (lixo de preenchimento anterior); a ata de acordo tem cláusula de não responsabilidade pós-entrega (C-05) que não foi conversada com o cliente. — Caio

- **[doc]** Estrutura do projeto ACAFRO criada em `Academic/PUC/acafro/`: `AGENTS.md` com as regras de operação, `insumos/` (originais imutáveis + versões AI-first), `entregas/`, `docs/`, e o par de rastreamento `STATUS.md` / `CHANGELOG.md`. — Caio
- **[insumo]** Ata da reunião inicial (21/08/2026) ingerida: original preservado em `insumos/originais/2026-08-21-ata-reuniao-inicial.docx` (sha256 `fb00aa19…`) e convertida para `insumos/ai-first/2026-08-21-ata-reuniao-inicial.md` com conteúdo integral + extração estruturada (5 decisões, 9 requisitos, 6 pontos em aberto). — Caio
- **[entrega]** Checklist da Sprint 1 montada em `entregas/sprint-1/README.md` a partir do enunciado da disciplina. Prazo: 24/08/2026 às 18:00. — Caio

## 2026-08-21

- **[reunião]** Reunião inicial de levantamento de requisitos com Juliano Comodo (responsável pela Acafro), 15h30. Escopo funcional inicial definido: duas áreas de acesso (administrativa e do aluno) e os módulos de Alunos, Frequência, Financeiro, Estoque e Eventos. Área social ficou em avaliação. — Equipe TI 4
