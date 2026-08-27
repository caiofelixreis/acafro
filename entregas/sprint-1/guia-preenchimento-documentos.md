# Guia de preenchimento — documentos jurídicos da Sprint 1

Como preencher os três documentos da disciplina, o que dá para adiantar sem o cliente e
o que só ele pode fornecer.

Textos integrais dos modelos:
[procuração](../../insumos/ai-first/2026-modelo-procuracao-nit-puc-minas.md) ·
[ata de acordo](../../insumos/ai-first/2026-modelo-ata-acordo-cliente-externo.md) ·
[termo de sigilo](../../insumos/ai-first/2026-modelo-termo-sigilo-confidencialidade.md)

---

## Visão geral

| Documento | Quem assina | Dependência do cliente | Dificuldade |
|---|---|---|---|
| Termo de Sigilo | 6 discentes + cliente | Só razão social + assinatura | 🟢 baixa |
| Ata de Acordo | 6 discentes + 2 docentes + cliente | Razão social + dados INPI + assinatura | 🟡 média |
| Procuração NIT | **Só o representante legal da Acafro** | Razão social, CNPJ, endereço, representante, cargo | 🔴 alta |

Os três se encadeiam: a **ata de acordo** é o que estabelece que os artefatos vão ao NIT
para registro no INPI, e a **procuração** é o instrumento que dá à PUC Minas poderes para
fazer esse registro em nome da Acafro. Ou seja, faz sentido apresentar os dois juntos ao
cliente, explicando a ligação — a procuração isolada parece desproporcional.

---

## Bloco 1 — o que a equipe resolve sozinha

Isso não depende de ninguém de fora. Resolver **antes** de falar com o cliente:

- [ ] **Nomes completos dos 6 integrantes**, como constam no SGA. Hoje temos: Caio Felix,
      Milena Cardoso, Marina Diniz, Mariana Tavares, Murilo (sobrenome?), João Gabriel
      (sobrenome?). Os documentos são jurídicos — nome completo, sem apelido.
- [ ] **Corrigir o bloco de assinaturas dos dois documentos para 6 linhas.** Os modelos
      vêm com 5, e na ata de acordo uma das vagas está quebrada (um `NOME DO DISCENTE`
      sem a linha de assinatura acima).
- [ ] **Definir o nome oficial do software.** Proposta: **Sistema Acafro**. Esse nome vai
      para a procuração e é o que fica registrado no INPI — combine com o cliente, não
      decida sozinho.
- [ ] **Definir a data e a hora da reunião de acordo** (a que a ata de acordo registra).
      Pode ser a própria reunião de assinatura.
- [ ] **Corrigir o erro de digitação** `NOME DOS DISCENTE` → nome do integrante.
- [ ] **Ler a cláusula C-05 da ata de acordo** (discentes e docentes não se
      responsabilizam por implantação, hospedagem, manutenção e evolução após a entrega)
      e preparar como explicar isso ao Juliano. É a cláusula com maior chance de gerar
      expectativa frustrada, e não foi mencionada na reunião de 21/08.

## Bloco 2 — o que precisa vir do cliente

Um único conjunto de dados alimenta os três documentos. Peça tudo de uma vez usando a
[ficha de dados do cliente](ficha-dados-cliente.md) — evita três idas e voltas.

| Dado | Procuração | Ata de Acordo | Termo de Sigilo |
|---|:--:|:--:|:--:|
| Razão social da Acafro | ✔ | ✔ | ✔ |
| CNPJ | ✔ | ✔ | |
| Endereço completo da sede (logradouro, nº, bairro, cidade/UF, CEP) | ✔ | ✔ | |
| Nome do representante legal | ✔ | ✔ | ✔ |
| Cargo do representante legal | ✔ | | |
| Qualificação (profissão/estado civil) | | ✔ | |
| Nacionalidade | | ✔ | |
| Telefone | | ✔ | |
| E-mail | | ✔ | |

## Bloco 3 — o que precisa vir da coordenação

- [ ] Confirmar se o nome da unidade curricular no modelo da ata — *"Trabalho
      Interdisciplinar: aplicações para sustentabilidade"* — é o correto para a TI 4, ou
      se deve ser substituído.
- [ ] Confirmar se a procuração exige **reconhecimento de firma** em cartório. Se exigir,
      o prazo muda de figura e precisa entrar no planejamento da sprint.
- [ ] Confirmar se para a entrega da Sprint 1 basta o documento **preenchido**, ou se
      precisa já estar **assinado**. Isso define se o prazo de 24/08 é alcançável.

---

## Preenchimento campo a campo

### Procuração NIT

```
Por este instrumento particular de Procuração, a [RAZÃO SOCIAL DA ACAFRO], com sede na
[LOGRADOURO], nº [NÚMERO] - Bairro [BAIRRO], [CIDADE/UF], inscrita no CNPJ sob o nº
[CNPJ], neste ato representada por [NOME DO REPRESENTANTE LEGAL], confere poderes
especiais à SOCIEDADE MINEIRA DE CULTURA – SMC, [...] face da invenção intitulada
"[NOME DO SOFTWARE]", [...]

Belo Horizonte, [DD] de [MÊS] de 2026.

_______________________________
[NOME DO RESPONSÁVEL]
[CARGO]
```

- Os dados da SMC/PUC Minas já vêm preenchidos (CNPJ 17.178.195/0001-67, Pró-Reitor
  Martinho Campolina Rebello Horta). **Não alterar.**
- 🔴 O modelo veio com `"DFDDFD"` no campo do nome da invenção — lixo de um preenchimento
  anterior. É o campo que nomeia a obra no INPI. Não deixe passar.
- O `Local` na linha da data é a cidade da assinatura, normalmente Belo Horizonte.

### Ata de Acordo

```
Às [HH] horas do dia [DD] de [MÊS] de [ANO], realizou-se a reunião [...]
Estiveram presentes à reunião Joyce Christina de Paiva Carvalho e Soraia Lúcia da Silva,
professores da unidade curricular; [JULIANO COMODO], stakeholder externo como Product
Owner da [RAZÃO SOCIAL DA ACAFRO], e [OS 6 NOMES COMPLETOS], discentes [...]

Dados pessoais do cliente externo necessários ao registro no INPI são: [NOME],
[QUALIFICAÇÃO], [CNPJ], [ENDEREÇO COMPLETO], [NACIONALIDADE], [TELEFONE] e [E-MAIL].
```

- "Product Owner" é o papel que o modelo atribui ao cliente. Juliano assume esse papel.
- Os nomes das duas professoras já vêm preenchidos.
- Assinaturas: 6 discentes + Joyce + Soraia + Juliano = **9 linhas**.

### Termo de Sigilo

```
[...] os discentes do curso de Engenharia de Software da PUC Minas: [OS 6 NOMES
COMPLETOS], doravante designados simplesmente RESPONSÁVEIS, [...] a não divulgar, sem
autorização, quaisquer informações de [RAZÃO SOCIAL DA ACAFRO], [...]

I. Reconheço que, em razão da utilização das ferramentas tecnológicas/equipamentos
disponibilizados pelo [RAZÃO SOCIAL DA ACAFRO], [...]

Belo Horizonte, [DD] de [MÊS] de [ANO].
```

- `NOME DO CLIENTE EXTERNO` aparece 3 vezes com sentidos diferentes: no cabeçalho e no
  item I é a **organização** (razão social); na linha de assinatura é a **pessoa**
  (Juliano Comodo).
- Assinaturas: 6 discentes + Juliano = **7 linhas**. Sem docentes neste.

---

## Ordem sugerida de execução

1. Fechar o Bloco 1 (nomes completos, blocos de assinatura, nome do software).
2. Enviar a [ficha de dados](ficha-dados-cliente.md) ao Juliano — é o item de maior lead
   time, dispare primeiro.
3. Mandar as perguntas do Bloco 3 à coordenação, em paralelo.
4. Com os dados na mão, preencher os três documentos.
5. Reunião de assinatura com Juliano e as professoras.

⚠️ **Sobre o prazo:** a Sprint 1 vence em **24/08/2026 às 18:00**. Coletar dados do
cliente, preencher, imprimir e reunir 9 assinaturas nesse intervalo é improvável. Trate o
item 3 acima como bloqueante: se a coordenação aceitar os documentos preenchidos e ainda
não assinados, a entrega vira viável. Se exigir assinatura, converse com as professoras
sobre o prazo **hoje**, não amanhã.
