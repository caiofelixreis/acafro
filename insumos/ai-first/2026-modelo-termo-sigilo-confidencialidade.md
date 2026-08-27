---
id: 2026-modelo-termo-sigilo-confidencialidade
titulo: "Modelo — Termo de Confidencialidade e Não Divulgação (LGPD)"
tipo: termo
origem: disciplina
autor_original: Coordenação TI 4
data_documento: 2026-08-10
data_ingestao: 2026-08-23
arquivo_original: ../originais/2026-modelo-termo-sigilo-confidencialidade.docx
sha256_original: 5b9470287cf4d487e43d9792faa395af67bf31b245e6bdf67577b28d8948b2f7
fidelidade: integral
superseded_by: null
assina: 6 discentes + stakeholder externo
tags: [sprint-1, entregavel, juridico, lgpd, modelo]
---

# Modelo — Termo de Confidencialidade e Não Divulgação

> **Conteúdo integral do documento original**, com os placeholders preservados exatamente
> como vieram. Interpretação da equipe na seção [Extração estruturada](#extração-estruturada).

## Conteúdo integral

**TERMO DE CONFIDENCIALIDADE E NÃO DIVULGAÇÃO**
**Em observância à Lei Geral de Proteção de Dados número 13.853, de 2019**

Em observância à Lei Geral de Proteção de Dados nº 13.853 de 2019, por meio do presente instrumento, os discentes do curso de Engenharia de Software da PUC Minas: NOMES DOS ALUNOS, doravante designados simplesmente RESPONSÁVEIS, se comprometem, por intermédio do presente TERMO DE CONFIDENCIALIDADE E NÃO DIVULGAÇÃO, a não divulgar, sem autorização, quaisquer informações de  NOME DO CLIENTE EXTERNO, em conformidade com as seguintes condições:

I. Reconheço que, em razão da utilização das ferramentas tecnológicas/equipamentos disponibilizados pelo NOME DO CLIENTE EXTERNO, poderei ter acesso a diversas informações pessoais, sensíveis, estratégicas, comerciais, entre outras - confidenciais ou não.

II. Tenho ciência de que as credenciais de acesso (login e senha) a eventuais ferramentas tecnológicas/equipamentos são de uso pessoal e intransferível e de conhecimento exclusivo.

III. Reconheço que para os fins deste documento serão consideradas confidenciais todas as informações, transmitidas por meios escritos, eletrônicos, verbais ou quaisquer outros e de qualquer natureza, incluindo, mas não se limitando a:

a. Dados pessoais - qualquer informação que possa tornar uma pessoa física identificada ou identificável;
b. Dados sensíveis - Qualquer dado pessoal que diga respeito à origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização de caráter religioso, filosófico ou político, bem como dado referente à saúde, dado genético ou biométrico;
c. Técnicas, design, especificações, desenhos, cópias, modelos, fluxogramas, croquis, fotografias, software, mídias, contratos, planos de negócios, propostas comerciais, processos, tabelas, projetos, nomes de clientes, resultados de pesquisas, invenções e ideias, financeiras, comerciais, dentre outros.

Belo Horizonte, XX de MÊS de ANO.

> [não-textual: bloco de assinaturas, transcrito abaixo na ordem original]

```
__________________________________________________
NOME DO DISCENTE   (× 5)

__________________________________________________
NOME DO STAKEHOLDER EXTERNO
```

---

## Extração estruturada

> Interpretação da equipe. **Não faz parte do documento original.**

### O que este documento faz

Compromisso dos discentes de não divulgar informações da Acafro. É o documento **mais
fácil dos três**: praticamente todos os campos estão ao alcance da equipe. Só depende do
cliente para a assinatura final e para o nome/razão social correto.

### Campos a preencher

| # | Placeholder no texto | O que entra | Quem fornece |
|---|---|---|---|
| T-01 | `NOMES DOS ALUNOS` | Os 6 nomes completos da equipe | Equipe |
| T-02 | `NOME DO CLIENTE EXTERNO` (3 ocorrências: cabeçalho, item I e assinatura) | Acafro / Juliano Comodo — ver atenção abaixo | Cliente |
| T-03 | `Belo Horizonte, XX de MÊS de ANO` | Data da assinatura | Equipe |
| T-04 | Bloco de assinaturas | Nomes completos sob cada linha | Equipe + cliente |

### Pontos de atenção

- ⚠️ **`NOME DO CLIENTE EXTERNO` é ambíguo entre pessoa e organização.** No item I
  ("ferramentas disponibilizadas pelo…") o sentido é a **organização** (Acafro); na linha
  de assinatura é a **pessoa** (Juliano Comodo). Preencher com a razão social nos dois
  primeiros e com o nome da pessoa na assinatura.
- ⚠️ **5 vagas de discente, equipe de 6.** Acrescentar uma linha, igual à ata de acordo.
- ⚠️ Este termo é altamente relevante para o escopo levantado: o sistema tratará **dados
  sensíveis** na acepção do item III.b (origem racial ou étnica) e **fotos e vídeos de
  menores de idade** (item III.c). Vale citar isso ao cliente na conversa sobre a Q-06
  de [`../../STATUS.md`](../../STATUS.md).
- ℹ️ O modelo cita a LGPD como "Lei nº 13.853 de 2019". A LGPD é a Lei 13.709/2018;
  a 13.853/2019 é a lei que a alterou. É o texto oficial da disciplina — **não corrigir
  sem consultar as professoras**.
