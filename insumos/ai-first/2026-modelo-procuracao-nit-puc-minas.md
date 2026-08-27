---
id: 2026-modelo-procuracao-nit-puc-minas
titulo: "Modelo — Procuração NIT PUC Minas (INPI)"
tipo: procuracao
origem: disciplina
autor_original: NIT PUC Minas / coordenação TI 4
data_documento: 2026-08-10
data_ingestao: 2026-08-23
arquivo_original: ../originais/2026-modelo-procuracao-nit-puc-minas.docx
sha256_original: 88328930089b1d185d81be47998c04980b35065e550c8dabeb023a6240963e54
fidelidade: integral
superseded_by: null
assina: Representante legal da Acafro (outorgante)
tags: [sprint-1, entregavel, juridico, inpi, modelo]
---

# Modelo — Procuração NIT PUC Minas

> **Conteúdo integral do documento original**, com os placeholders preservados exatamente
> como vieram. Interpretação da equipe na seção [Extração estruturada](#extração-estruturada).

## Conteúdo integral

**PROCURAÇÃO**

Por este instrumento particular de Procuração, a XXXXXXXXXXXXXXXXXXX, com sede na Rua XXX, nº XXXX - Bairro XXXX, XXXXXXXXXXXXXXXXXXX, inscrita no CNPJ sob o nº XXXXXXXXXXXX, neste ato representada por XXXXXXXXXXXXXXXXXXX, confere poderes especiais à SOCIEDADE MINEIRA DE CULTURA – SMC, com sede na Avenida Brasil, nº 2.079 – 10º andar- Bairro Funcionários, Belo Horizonte, inscrita no CNPJ sob o nº 17.178.195/0001-67, neste ato representada por seu Pró-Reitor de Pesquisa e de Pós-graduação, o Professor Martinho Campolina Rebello Horta, para representa-la perante o Instituto Nacional da Propriedade Industrial (INPI), para o fim de requerer e processar direitos de propriedade intelectual face da invenção intitulada "DFDDFD", a ser depositado junto ao INPI, para mantê-lo em vigor com amplos poderes para assinar petições e documentos, pagar taxas, anotar transferências, fazer prova de uso da invenção patenteada, apresentar oposições, recursos, réplicas, anotar, elaborar notificações extrajudiciais e praticar para os fins mencionados, todos os atos necessários perante as autoridades administrativas competentes no Brasil e no exterior, em benefício da Outorgante, ratificando os atos já praticados.

Local, DD de MMMM de 2026.

> [não-textual: espaço para assinatura]

Nome do(a) responsável
Cargo

---

## Extração estruturada

> Interpretação da equipe. **Não faz parte do documento original.**

### O que este documento faz

A **Acafro é a outorgante**: ela dá poderes à Sociedade Mineira de Cultura (mantenedora da
PUC Minas) para representá-la perante o INPI no registro da propriedade intelectual do
software. Quem assina é o **representante legal da Acafro**, não a equipe. É o documento
de maior dependência externa da Sprint 1.

### Campos a preencher

| # | Placeholder no texto | O que entra | Quem fornece |
|---|---|---|---|
| P-01 | `XXXXXXXXXXXXXXXXXXX` (1ª ocorrência) | Razão social da Acafro | Cliente |
| P-02 | `Rua XXX, nº XXXX - Bairro XXXX` | Logradouro, número e bairro da sede | Cliente |
| P-03 | `XXXXXXXXXXXXXXXXXXX` (após o bairro) | Cidade/UF da sede | Cliente |
| P-04 | `CNPJ sob o nº XXXXXXXXXXXX` | CNPJ da Acafro | Cliente |
| P-05 | `neste ato representada por XXXXXXXXXXXXXXXXXXX` | Nome do representante legal (presumivelmente Juliano Comodo) | Cliente |
| P-06 | `invenção intitulada "DFDDFD"` | Nome do software — proposta: **Sistema Acafro** | Equipe + cliente |
| P-07 | `Local, DD de MMMM de 2026` | Cidade e data da assinatura | Equipe |
| P-08 | `Nome do(a) responsável` / `Cargo` | Nome e cargo de quem assina pela Acafro | Cliente |

### Pontos de atenção

- ⚠️ **`"DFDDFD"` é lixo de um preenchimento anterior**, não um placeholder padronizado.
  Não deixe passar — é o campo que nomeia a obra registrada no INPI.
- ⚠️ Os dados da SMC/PUC Minas (CNPJ 17.178.195/0001-67, Pró-Reitor Martinho Campolina
  Rebello Horta) **já vêm preenchidos**. Não alterar.
- ⚠️ O texto usa "invenção" e "invenção patenteada" — linguagem de patente aplicada a
  software. É o modelo oficial do NIT; não adaptar por conta própria.
- ⚠️ Confirmar com a coordenação se a procuração precisa de reconhecimento de firma.
