# Discovery — ACAFRO

**Data:** 2026-08-27
**Método:** pesquisa em fontes públicas (site da Prefeitura e da Câmara de Ouro Branco,
registro de CNPJ, redes sociais, imprensa local), cruzada com os insumos do projeto
(ata da reunião de 21/08 e dados fornecidos pelo cliente).

> ⚠️ **Nada aqui substitui a validação do cliente.** Tudo que veio de fonte pública está
> marcado com a origem. Onde a fonte pública diverge do que o Juliano informou, a
> divergência está explicitada — resolver com ele, não escolher por conta própria.

---

## 1. Identificação

| Campo | Valor | Fonte |
|---|---|---|
| Razão social | Associação de Cultura Afro-Brasileira de Ouro Branco | Cliente + registro CNPJ |
| Sigla | ACAFRO | Logo |
| CNPJ | 10.754.160/0001-80 | Cliente (dígitos verificadores conferidos) |
| Fundação | **Janeiro de 2009** | Câmara de Ouro Branco |
| Município | Ouro Branco / MG | — |
| Presidente | Juliano Evangelista Pinto — professor de capoeira | Cliente |
| Fundador | **Wanderson Wagner de Campos, o "Mestre Sapo"**, à frente de um grupo de artistas locais | Câmara de Ouro Branco |
| Facebook | facebook.com/acafro.ob | Busca |

**Assinatura institucional, na própria logo:**
> "Projeto Cultura Afro uma alternativa a formação cidadã"

Essa frase é a síntese da organização e deve guiar o tom do produto: a ACAFRO não se
apresenta como escola de capoeira, e sim como **projeto de formação cidadã** que usa a
cultura afro-brasileira como meio.

## 2. O que a ACAFRO faz

- Instituição **sem fins lucrativos**, criada para promover a cultura negra e o movimento
  artístico no município e na região.
- Atua em **teatro, dança, circo e música**, além da capoeira.
- **Capoeira é hoje a atividade principal**, com cerca de **150 alunos**.
- Somando percussão, pandeiro e música, são **mais de 200 atendimentos**.
- As oficinas são **gratuitas para alunos menores de idade**.
- Público-alvo: crianças e jovens **em situação de vulnerabilidade social**.

## 3. Núcleos de atendimento

A pesquisa pública aponta **quatro núcleos**: **São Francisco, Belvedere, Olaria e Centro**.

A ata de 21/08 (§5.3) cita "Acafro - Matriz" e "1º de Maio" como exemplos, "entre outras a
serem cadastradas".

> ⚠️ **Divergência a resolver (Q-04).** Os nomes não batem. "Matriz" provavelmente é o
> núcleo Centro, e "1º de Maio" não aparece nas fontes públicas — pode ser novo, pode ter
> outro nome oficial, pode ser um local cedido. **Levar a lista das duas fontes para o
> Juliano confirmar e completar.** O cadastro de localidades é requisito de alta prioridade
> (RF02) e depende disso.

## 4. Reconhecimento e relação com o poder público

- **Medalha Dona Jandira (2025)** — a ACAFRO recebeu a honraria na sua **primeira edição**,
  concedida pela Câmara Municipal de Ouro Branco por indicação do vereador Nelinho Alves.
- As oficinas aparecem divulgadas no site da **Prefeitura de Ouro Branco**, o que indica
  relação institucional com o município.

Isso ilumina o requisito mais elaborado do sistema. A ata (§5.1) diz que fotos e vídeos das
aulas servem "como evidência da existência e da continuidade do projeto perante parceiros e
financiadores". Não é preciosismo: uma associação sem fins lucrativos que depende de
editais e de apoio municipal **precisa comprovar execução**. O módulo de frequência com
mídia e geolocalização é, na prática, o **módulo de prestação de contas** — e é ele que
sustenta a captação de recursos da organização.

## 5. Contatos públicos

| Contato | Origem |
|---|---|
| (31) 98499-1703 | Juliano Evangelista Pinto (nosso interlocutor) |
| (31) 98438-8034 | Divulgação de oficina no site da Prefeitura |
| (31) 98514-1443 | Divulgação de oficina no site da Prefeitura |
| julianoevanp1@gmail.com | Cliente |

## 6. Divergência de endereço

| Fonte | Endereço |
|---|---|
| Informado pelo Juliano (24/08) | Rua Professor José Luiz, 460 — Centro |
| Fonte pública consultada | Rua Hermógenes C. Carvalho, 681 — Centro |

> ⚠️ Ambos em Ouro Branco/MG, CEP 36420-000. Pode ser sede registrada × local de
> funcionamento, ou mudança de endereço. **Sem impacto retroativo nos documentos já
> assinados** — foi usado o endereço que o representante legal declarou, que é o
> procedimento correto. Mas vale confirmar qual consta no cartão CNPJ.

## 7. O que o discovery acrescenta aos requisitos

| Achado | Impacto no sistema |
|---|---|
| Modalidades vão além da capoeira: percussão, pandeiro, música, dança, teatro, circo | RF03 precisa tratar **modalidade** como entidade própria, não presumir capoeira |
| "Graduação" no cadastro de aluno (RF01) | Em capoeira é a **corda**. Outras modalidades podem não ter graduação — o campo precisa ser opcional e dependente da modalidade |
| Oficinas gratuitas para menores | O módulo financeiro (RF09) **não se aplica a todos os alunos**. Precisa de isenção/gratuidade como regra, não como exceção |
| Público em vulnerabilidade social, majoritariamente menor de idade | Reforça a criticidade da **Q-06** (consentimento de imagem e prazo de guarda de mídia) |
| Dependência de editais e apoio municipal | O **relatório de frequência exportável** é o artefato de prestação de contas. Deve sair em formato apresentável a financiador, não só como listagem interna |
| Quatro ou mais núcleos, com equipes distintas | Reforça RF02 e RF03: professor precisa enxergar só as suas aulas e o seu núcleo |
| 150 alunos de capoeira, +200 atendimentos totais | Escala do sistema: centenas de registros, não milhares. Não há problema de performance a resolver |

## 8. Perguntas novas para o cliente

Somam-se às sete já registradas em [`../STATUS.md`](../STATUS.md):

| # | Pergunta |
|---|---|
| Q-08 | Quais são hoje todos os núcleos ativos, com nome oficial e endereço? A pesquisa achou São Francisco, Belvedere, Olaria e Centro; a ata cita Matriz e 1º de Maio |
| Q-09 | Quais modalidades estão ativas neste momento, e quais têm sistema de graduação? |
| Q-10 | Se as oficinas para menores são gratuitas, quem paga mensalidade? Só adultos? |
| Q-11 | Para quais editais e parceiros a ACAFRO presta contas hoje, e em que formato? Isso define o relatório de frequência |
| Q-12 | Quantos professores atuam, e cada um está ligado a um núcleo específico? |
| Q-13 | Existe um acervo de fotos e documentos hoje? Onde fica e quem acessa? |

## Fontes

- [Câmara Municipal de Ouro Branco — Medalha Dona Jandira](https://www.ourobranco.cam.mg.gov.br/noticia/371/Camara-de-Ouro-Branco-realiza-primeira-entrega-da-Medalha-Dona-Jandira)
- [Prefeitura de Ouro Branco — Oficina de capoeira ACAFRO](https://www.ourobranco.mg.gov.br/detalhe-da-materia/info/oficina-de-capoeira-acafro/193476)
- [ACAFRO no Facebook](https://www.facebook.com/acafro.ob/)
- [Registro de CNPJ 10.754.160/0001-80](https://cnpj.biz/10754160000180)
