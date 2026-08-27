---
id: 2026-08-21-ata-reuniao-inicial
titulo: "Ata de Reunião — Desenvolvimento do Sistema de Controle Acafro (reunião inicial)"
tipo: ata-de-reuniao
origem: cliente-externo
autor_original: Equipe TI 4 (anotações da reunião)
data_documento: 2026-08-21
data_ingestao: 2026-08-23
arquivo_original: ../originais/2026-08-21-ata-reuniao-inicial.docx
sha256_original: fb00aa1960bbb1c5e69af2a98fe17ebacb592257fa7380f0467d01e133d4efc6
fidelidade: integral
superseded_by: null
participantes:
  - Juliano Comodo (responsável pela Acafro)
  - Caio Felix
  - Milena Cardoso
  - Marina Diniz
  - Mariana Tavares
  - Murilo
  - João Gabriel
entidades:
  - Aluno
  - Responsável
  - Professor
  - Turma
  - Localidade
  - Aula
  - Presença
  - Mensalidade
  - Item de Estoque
  - Evento
modulos:
  - alunos
  - frequencia
  - financeiro
  - estoque
  - eventos
  - area-social (em avaliação)
tags: [requisitos, escopo, reuniao-inicial, sprint-1]
---

# Ata de Reunião — Sistema de Controle Acafro

> **Conteúdo integral do documento original**, reproduzido sem cortes, resumos ou
> reescrita. Interpretações da equipe estão isoladas na seção
> [Extração estruturada](#extração-estruturada), ao final.

## Conteúdo integral

**ATA DE REUNIÃO**
**Desenvolvimento do Sistema de Controle Acafro**

| Campo | Valor |
|---|---|
| Organização | Acafro |
| Projeto | Sistema Acafro — Sistema de Controle de Aulas, Alunos e Gestão Administrativa |
| Disciplina | TI 4 |
| Data | Sexta-feira, 21 de agosto de 2026 |
| Horário | 15h30 |
| Pauta | Levantamento inicial de requisitos para o sistema |

### 1. Participantes

**Responsável pela Acafro**

- Juliano Comodo

**Alunos (equipe do projeto — Disciplina TI 4)**

- Caio Felix
- Milena Cardoso
- Marina Diniz
- Mariana Tavares
- Murilo
- João Gabriel

### 2. Objetivo da Reunião

Reunião de levantamento de requisitos para o desenvolvimento de um sistema de controle voltado à Acafro, contemplando a gestão de aulas, alunos, frequência, estoque de materiais, mensalidades e eventos institucionais. O objetivo foi mapear as necessidades da organização e definir o escopo funcional inicial do sistema.

### 3. Visão Geral do Sistema

Ficou definido que o sistema será dividido em duas grandes áreas de acesso:

- **Área Administrativa:** destinada à gestão interna da Acafro (cadastros, controle financeiro, estoque, frequência e eventos).
- **Área do Cliente (Aluno):** destinada ao acesso dos alunos e/ou responsáveis, com visualização de informações pessoais, frequência e comunicados.

A base de dados inicial para o levantamento de informações será construída a partir de formulários (Google Forms), utilizados como ponto de partida para estruturar os cadastros do sistema.

### 4. Módulo de Alunos

Foram definidos os seguintes dados obrigatórios para o cadastro de cada aluno:

- Nome completo do aluno
- Nome dos responsáveis (para alunos menores de idade)
- Graduação (faixa/nível na modalidade)
- Telefone de contato
- Endereço
- Idade
- E-mail

### 5. Módulo de Frequência e Controle de Presença

#### 5.1 Marcação de ponto das aulas

O sistema deverá permitir o registro de presença das aulas por meio de:

- Marcação de ponto digital, com anexo de foto e vídeo como comprovação da realização da aula.
- Uso de geolocalização no momento do registro, para validar o local em que a aula está sendo ministrada.

As fotos e vídeos servirão como evidência da existência e da continuidade do projeto perante parceiros e financiadores.

#### 5.2 Lista de presença manual

Além do ponto digital, o sistema deverá contemplar uma lista de presença manual, organizada por localidade, para os casos em que o registro digital não seja viável no momento da aula.

#### 5.3 Estrutura de localidades e cronograma

As aulas ocorrem em múltiplas localidades (ex.: Acafro - Matriz, 1º de Maio, entre outras a serem cadastradas), de segunda-feira a sábado. O sistema deverá permitir o cadastro de novas localidades e a vinculação de turmas, professores e horários a cada uma delas.

### 6. Módulo Financeiro — Mensalidades

O sistema deverá contemplar o controle de mensalidades dos alunos, incluindo emissão, acompanhamento de pagamentos e inadimplência. Os detalhes operacionais desse módulo (formas de pagamento, geração de cobranças, integração com gateways etc.) serão definidos em etapa posterior de detalhamento técnico.

### 7. Módulo de Estoque

Controle de estoque para os equipamentos utilizados nas atividades da Acafro, incluindo:

- Equipamentos de luta
- Materiais de dança
- Outros itens e materiais diversos utilizados nas aulas

### 8. Módulo de Eventos

O sistema contará com uma página principal pública, destinada à divulgação institucional, contendo:

- Data dos eventos
- Nome do evento
- Fotos
- Parcerias
- Editais
- Professores envolvidos

### 9. Proposta em Avaliação — Área Social

Foi levantada a possibilidade de incluir uma área social dentro do sistema. Esse ponto ainda está em avaliação e deverá ser melhor definido em reuniões futuras quanto ao escopo, funcionalidades e prioridade de implementação.

### 10. Levantamento de Dados

A coleta inicial de informações (alunos, professores, localidades) será realizada por meio de formulários eletrônicos (Google Forms), que servirão de base para a estruturação do banco de dados do sistema.

### 11. Próximos Passos

1. Detalhar tecnicamente o módulo financeiro (mensalidades).
2. Definir a estrutura de perfis de acesso (administrador, professor, aluno/responsável).
3. Especificar os formulários de coleta de dados (Google Forms) e o processo de migração para o sistema.
4. Aprofundar a discussão sobre a viabilidade e o escopo da área social.
5. Definir stack tecnológica e cronograma de desenvolvimento.

*Documento elaborado com base nas anotações da reunião realizada em 21/08/2026.*

---

## Extração estruturada

> Interpretação da equipe. **Não faz parte do documento original.**

### Decisões tomadas

| # | Decisão | Origem |
|---|---|---|
| D-01 | O sistema terá duas áreas de acesso: Administrativa e Cliente (Aluno) | §3 |
| D-02 | A carga inicial de dados virá de formulários Google Forms | §3, §10 |
| D-03 | O registro de aula terá foto, vídeo e geolocalização como comprovação | §5.1 |
| D-04 | Haverá lista de presença manual como alternativa ao ponto digital | §5.2 |
| D-05 | Existirá página pública institucional para divulgação de eventos | §8 |

### Requisitos citados pelo cliente

| # | Requisito | Módulo | Origem |
|---|---|---|---|
| R-01 | Cadastro de aluno com nome, responsáveis, graduação, telefone, endereço, idade e e-mail | Alunos | §4 |
| R-02 | Marcação de ponto digital da aula com anexo de foto e vídeo | Frequência | §5.1 |
| R-03 | Captura de geolocalização no momento do registro da aula | Frequência | §5.1 |
| R-04 | Lista de presença manual organizada por localidade | Frequência | §5.2 |
| R-05 | Cadastro de localidades e vínculo de turmas, professores e horários | Frequência | §5.3 |
| R-06 | Controle de mensalidades: emissão, pagamentos e inadimplência | Financeiro | §6 |
| R-07 | Controle de estoque de equipamentos de luta, materiais de dança e itens diversos | Estoque | §7 |
| R-08 | Página pública com data, nome, fotos, parcerias, editais e professores dos eventos | Eventos | §8 |
| R-09 | Área do aluno com informações pessoais, frequência e comunicados | Cliente | §3 |

### Em aberto — a confirmar com o cliente

- ⚠️ **Área social:** escopo, funcionalidades e prioridade ainda indefinidos (§9).
- ⚠️ **Financeiro:** formas de pagamento, geração de cobranças e integração com gateway (§6).
- ⚠️ **Perfis de acesso:** administrador, professor, aluno/responsável — estrutura não definida (§11.2).
- ⚠️ **Localidades:** apenas "Acafro - Matriz" e "1º de Maio" citadas; lista completa pendente (§5.3).
- ⚠️ **Modalidades e graduações:** o termo "graduação (faixa/nível na modalidade)" implica um domínio de modalidades que não foi enumerado (§4).
- ⚠️ **Retenção de mídia:** fotos e vídeos de aula envolvem menores de idade; tratamento, consentimento e armazenamento (LGPD) não foram discutidos (§5.1).

### Próximos passos declarados na ata

Ver §11 do conteúdo integral. Espelhados como itens acionáveis em [`../../STATUS.md`](../../STATUS.md).
