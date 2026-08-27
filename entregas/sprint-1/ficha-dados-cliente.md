# Pedido de dados à Acafro — via WhatsApp

Canal de comunicação com o cliente: **WhatsApp** (Juliano Comodo).
Objetivo: pedir de uma vez só tudo que os três documentos jurídicos da Sprint 1 exigem,
deixando claro para que serve cada dado.

Mapeamento de qual campo vai em qual documento:
[guia-preenchimento-documentos.md](guia-preenchimento-documentos.md).

---

## Mensagem pronta para enviar

> Sugestão: mandar em **duas mensagens** — a explicação primeiro, a lista depois. Bloco
> único muito longo no WhatsApp costuma ser lido pela metade.
> A formatação usa a sintaxe do WhatsApp: `*texto*` vira negrito.

### Mensagem 1 — contexto

```
Oi Juliano, tudo bem?

Aqui é o Caio, do grupo da PUC que tá desenvolvendo o sistema da Acafro.

Antes de a gente começar a desenvolver, a faculdade pede três documentos assinados.
Deixa eu te explicar rapidinho pra que serve cada um:

*1. Termo de Sigilo* — a gente se compromete a não divulgar nenhuma informação da
Acafro. É o nosso compromisso com vocês.

*2. Ata de Acordo* — registra o combinado entre a gente, as professoras e a Acafro
sobre o desenvolvimento do sistema. Por ela, a Acafro fica com o direito de uso do
sistema, e alunos, professores e vocês entram como autores do projeto.

*3. Procuração* — autoriza a PUC a registrar a autoria do sistema no INPI (o órgão
de propriedade intelectual) em nome da Acafro. O registro é feito e pago pela PUC,
sem nenhum custo pra vocês.
```

### Mensagem 2 — os dados

```
Pra preencher os três, preciso de alguns dados. Consegue me mandar?

*Da Acafro:*
• Razão social (nome completo registrado)
• CNPJ
• Endereço completo da sede (rua, número, bairro, cidade e CEP)

*De quem vai assinar pela Acafro:*
• Nome completo
• Cargo na Acafro
• Profissão e estado civil
• Nacionalidade
• Telefone e e-mail

Esses dados de quem assina são exigência do INPI pro registro — é o mesmo tipo de
informação que eles pedem da gente, que a PUC pega direto no sistema dela.

Mais duas coisinhas:

• Pode ser *Sistema Acafro* o nome oficial? É o nome que vai no registro do INPI.
• Qual o melhor dia pra gente marcar a assinatura? Precisa da sua assinatura e das
duas professoras da disciplina.

Qualquer dúvida me chama!
```

---

## Respostas recebidas

> Recebidas por WhatsApp em **2026-08-24**, direto do Juliano.
> ⚠️ Este arquivo contém dados pessoais (nome, e-mail, telefone, estado civil). Não
> publicar em repositório aberto nem anexar em entrega pública sem necessidade.

### Dados da Acafro

| Campo | Resposta | Usado em |
|---|---|---|
| Razão social | **ASSOCIAÇÃO DE CULTURA AFRO BRASILEIRA DE OURO BRANCO** | Procuração, Ata, Termo |
| CNPJ | **10.754.160/0001-80** ✅ dígitos verificadores conferem | Procuração, Ata |
| Logradouro e número | **Rua Professor José Luiz, 460** | Procuração, Ata |
| Complemento | — (não informado) | Ata |
| Bairro | **Centro** | Procuração, Ata |
| Cidade / UF | ⚠️ **não informado** — presumivelmente Ouro Branco/MG, pelo nome da associação. Confirmar, não assumir. | Procuração, Ata |
| CEP | ⚠️ **não informado** | Ata |

### Dados de quem assina pela Acafro

| Campo | Resposta | Usado em |
|---|---|---|
| Nome completo | **JULIANO EVANGELISTA PINTO** | Procuração, Ata, Termo |
| Cargo na organização | **Presidente**, coordenador e professor — ⚠️ ver nota abaixo | Procuração |
| Profissão | **Professor de capoeira** | Ata |
| Estado civil | **Solteiro** | Ata |
| Nacionalidade | **Brasileiro** | Ata |
| Telefone | **(31) 98499-1703** — informado como `3198499-1703`, formatação normalizada | Ata |
| E-mail | **julianoevanp1@gmail.com** | Ata |

### Confirmações

| Pergunta | Resposta |
|---|---|
| Nome oficial do software será "Sistema Acafro"? | ⚠️ **não respondeu** |
| Quem assina pela Acafro | Juliano Evangelista Pinto, como Presidente |
| Data da reunião de assinatura | ⚠️ **não respondeu** |

### Pendências a reperguntar

Faltaram 4 itens. Vale mandar tudo numa mensagem só:

```
Juliano, valeu demais! Só faltaram uns detalhes:

• A cidade e o CEP do endereço da Acafro (pra procuração precisa estar completo)
• Pode ser *Sistema Acafro* o nome oficial do sistema? É o nome que vai no registro
• Qual dia fica bom pra gente marcar a assinatura dos documentos?

Ah, e uma dúvida: na procuração entra o cargo de quem assina. Coloco só
*Presidente*? É o cargo que está no estatuto da associação, né?
```

### Notas sobre as respostas

- 🔴 **O nome legal dele é Juliano Evangelista Pinto**, não "Juliano Comodo". A ata da
  reunião de 21/08 registrou "Juliano Comodo" — pelo contexto (ele é professor de
  capoeira e escreveu "KOMODO" como título do bloco), é o apelido de capoeira. Nos três
  documentos jurídicos usar **exclusivamente o nome civil completo**.
- 🟡 **Cargo:** ele informou "Presidente, coordenador e professor". A procuração pede o
  cargo de quem representa legalmente a associação — o que vale é **Presidente**. Os
  outros dois são funções internas e não têm efeito de representação. Confirmar com ele.
- 🟢 **CNPJ conferido:** os dígitos verificadores de 10.754.160/0001-80 batem. Não prova
  que o CNPJ é da Acafro, mas descarta erro de digitação.
- 💡 **A modalidade é capoeira.** Isso responde parcialmente a Q-05 do
  [`../../STATUS.md`](../../STATUS.md): a "graduação" do módulo de Alunos é a corda de
  capoeira. Vale confirmar se há outras modalidades (a ata de 21/08 menciona "materiais
  de dança" no estoque, o que sugere que sim).
- 📍 **A Acafro fica em Ouro Branco**, a cerca de 90 km de Belo Horizonte. Os modelos da
  ata de acordo e do termo de sigilo trazem "Belo Horizonte" fixo como local de
  assinatura, e as duas professoras assinam junto. Resolver logística de assinatura
  presencial vs. assinatura digital **antes** de marcar a reunião.

## O que ficou de fora da mensagem, de propósito

Três assuntos que é melhor tratar **na reunião de assinatura**, olhando no olho, do que
soltar por WhatsApp no meio de um pedido de dados:

- **Suporte após a entrega.** A ata de acordo tem cláusula explícita de que alunos e
  professores não se responsabilizam por implantação, hospedagem, manutenção e evolução
  do sistema depois do fim da disciplina. Não foi conversado em 21/08. O Juliano precisa
  saber disso *antes* de assinar — só não por mensagem seca. (Q-08 no
  [`../../STATUS.md`](../../STATUS.md))
- **Sigilo do código-fonte.** Pela mesma ata, código e artefatos ficam armazenados sob
  sigilo em local definido pelo curso.
- **Dados sensíveis e menores de idade.** O escopo prevê foto, vídeo e geolocalização
  das aulas, com alunos menores. Vai exigir consentimento dos responsáveis e uma
  definição de prazo de guarda da mídia. É conversa de requisito, não de documento —
  vale uma reunião própria. (Q-06)
