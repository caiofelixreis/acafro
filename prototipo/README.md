# Protótipo — Sistema Acafro

Protótipo navegável para apresentação à ACAFRO. **Sem funcionalidade real**: os formulários
não salvam, os botões não persistem nada. O objetivo é validar a navegação, o escopo dos
perfis e a identidade visual antes de escrever código de verdade.

## Como abrir

```bash
python3 -m http.server 5173 --directory acafro/prototipo
```

Depois acesse **http://localhost:5173**. Também funciona abrindo `index.html` direto no
navegador, sem servidor.

## O que tem

### Site público — `index.html`

Hero com a assinatura da associação · números (2009, 150 alunos, 200+ atendimentos,
4 núcleos) · quem é a ACAFRO · aulas e oficinas · núcleos de atendimento · galeria de
fotos · agenda de eventos · CTA de WhatsApp no topo, no meio, no rodapé e num botão
flutuante · rodapé com CNPJ, endereço e redes.

O WhatsApp aponta para **wa.me/5531984991703** com mensagem pré-preenchida.

### Área restrita — `sistema.html`

Login com dois perfis de demonstração. Basta clicar no perfil para entrar; o botão
"Trocar de perfil / sair" volta para a escolha.

| Perfil | Telas |
|---|---|
| **Administração** | Início · Aulas e horários · Localidades · Alunos · Eventos · Registros de frequência · Relatórios · Fotos · Arquivos |
| **Professor** | Minhas aulas · Marcar frequência · Meus alunos · Fotos · Arquivos |

O professor enxerga só as próprias turmas e alunos — em "Meus alunos" a lista vem
filtrada pelo núcleo dele (Belvedere), enquanto a administração vê todos.

**Marcar frequência** é a tela mais completa: captura de foto/vídeo, confirmação de
geolocalização e lista de presença com botões de presente/falta que respondem ao clique.

**Arquivos** é o diretório central de documentos da associação — editais, estatuto,
convênios, prestação de contas, autorizações de imagem. **Fotos** é o acervo de uso geral.

## Mobile first

O CSS é escrito **mobile first de verdade**: a base é celular (360–430px) e os
breakpoints sobem a partir dela — `min-width:700px` para tablet e `min-width:1000px` para
desktop. Não há nenhuma regra `max-width` cuidando do mobile como exceção.

O que muda no celular:

| Elemento | Mobile | Desktop |
|---|---|---|
| Menu do site | Hambúrguer em tela cheia | Barra horizontal |
| Hero | Logo em cima, texto embaixo, botões em bloco | Duas colunas |
| Galeria | Carrossel com scroll-snap | Grade |
| WhatsApp | Barra verde fixa no rodapé, largura total | Botão flutuante no canto |
| Menu do sistema | Gaveta lateral + barra de abas no rodapé | Sidebar fixa de 250px |
| Tabelas | Cada linha vira um cartão, com rótulo em cada campo | Tabela normal com cabeçalho |
| Formulários | Uma coluna | Duas colunas |

Detalhes: alvos de toque de no mínimo 48px, inputs com `font-size:16px` (evita o zoom
automático do iOS ao focar), `env(safe-area-inset-bottom)` nas barras fixas, e
`scroll-snap` no carrossel de fotos.

## Identidade visual

A **estrutura** vem da proposta de branding da equipe em
[`../branding/identidade-visual-cultural1`](../branding/identidade-visual-cultural1):
layout editorial, eyebrows em caixa alta espaçada, ponto final colorido nos títulos,
painéis de borda suave, sidebar escura. **Tipografia e paleta são outras.**

### Cor pontual

A base é neutra e quente — areia `#F7F3EC`, creme `#FFFDF9`, quase-preto `#14100E`,
borda `#E4DCD0`. As cores da logo entram **só onde carregam significado**:

| Cor | Onde aparece | Por quê |
|---|---|---|
| Vermelho `#E52B22` | Eyebrows, ponto final dos títulos, aba ativa, pill de inadimplência, primeiro número do site | Acento e alerta |
| Verde `#0F8F33` | Pills de presença e "publicado", ponto do WhatsApp, avatar do professor | Confirmação |
| Amarelo `#EFE62E` | Filete das notas de atenção, ponto da marca | Atenção |

Botões primários são **escuros**, não vermelhos. As fotos usam uma família neutra quente
(âmbar, argila, pedra), não as três cores. A faixa tricolor de página inteira saiu: virou
uma **régua curta** de 78px com os três segmentos, usada uma vez por tela.

### Uso da logo

A logo original tem fundo branco sólido e lettering pesado — repetida em cabeçalho, hero,
rodapé, login e sidebar, ela dominava tudo e exigia uma caixa branca sobre fundo escuro.

Agora **a logo aparece uma única vez por página**, no cartão do hero do site, tratada como
peça institucional com legenda e régua de acento. Em todos os outros lugares entra uma
**marca derivada**, desenhada a partir do zigue-zague da própria logo:

- [`assets/marca.svg`](assets/marca.svg) — zigue-zague em `currentColor` com três pontos
  nas cores da ACAFRO. Herda a cor do contexto, então funciona sobre claro e escuro sem
  caixa branca.
- [`assets/padrao.svg`](assets/padrao.svg) — o mesmo motivo em padrão de repetição, para
  fundos e texturas.
- O *lockup* combina a marca com o wordmark "ACAFRO" e a linha "Ouro Branco · MG".

### Tipografia

**Archivo** nos títulos (peso 600/700, tracking negativo) e **Inter** no texto. O Archivo
tem esqueleto levemente quadrado, que conversa com as formas da logo sem competir com ela.

Para trocar, altere `--display` e `--sans` no `:root` de
[`assets/estilo.css`](assets/estilo.css) — o resto do CSS acompanha. Alternativas que
combinam com o layout: *Space Grotesk* ou *Familjen Grotesk* no display, *Instrument Sans*
ou *Figtree* no texto.

As fontes vêm do Google Fonts com fallback para a stack do sistema — offline, o layout
continua íntegro.

## Sobre o conteúdo

Dados **reais**, apurados no [discovery](../docs/2026-08-27-discovery-acafro.md): fundação
em 2009, Mestre Sapo, 150 alunos de capoeira, 200+ atendimentos, núcleos São Francisco /
Belvedere / Olaria / Centro, Medalha Dona Jandira 2025, CNPJ e endereço.

Dados **ilustrativos**, a validar com a associação: horários das aulas, nomes de alunos,
datas de eventos, quantidade de arquivos e fotos. Todo o protótipo carrega uma tarja de
aviso no topo do site público deixando isso explícito.

## O que perguntar na reunião

1. A lista de núcleos está certa? Falta algum? "1º de Maio" é o nome oficial?
2. Quais modalidades estão ativas hoje, e quais têm graduação?
3. Se as oficinas para menores são gratuitas, quem paga mensalidade?
4. Para quais editais e parceiros a ACAFRO presta contas, e em que formato? Isso define
   o relatório de frequência.
5. Quantos professores atuam, e cada um está ligado a um núcleo?
6. Existe acervo de fotos e documentos hoje? Onde fica, quem acessa?
7. Foto e vídeo de menores: há autorização dos responsáveis? Por quanto tempo a mídia
   precisa ficar guardada?
