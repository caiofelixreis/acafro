'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  ClipboardCheck,
  Compass,
  FileText,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  Package,
  Plus,
  Search,
  ShieldCheck,
  Users,
  WalletCards,
  Camera,
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  ImagePlus,
  Bookmark,
  Flame,
  UserRound,
} from 'lucide-react'

type Section = 'comunidade' | 'visao geral' | 'alunos' | 'professores' | 'frequência' | 'eventos' | 'estoque'

const navItems: { id: Section; label: string; icon: typeof LayoutDashboard }[] = [
  { id: 'comunidade', label: 'Comunidade', icon: Users },
  { id: 'visao geral', label: 'Visão geral', icon: LayoutDashboard },
  { id: 'alunos', label: 'Alunos', icon: Users },
  { id: 'professores', label: 'Professores', icon: UserRound },
  { id: 'frequência', label: 'Frequência', icon: ClipboardCheck },
  { id: 'eventos', label: 'Eventos', icon: CalendarDays },
  { id: 'estoque', label: 'Estoque', icon: Package },
]

const students = [
  { name: 'Aline Santos', level: 'Capoeira • Graduada', locality: 'Acafro — Matriz', presence: '92%', color: 'coral' },
  { name: 'João Pedro Lima', level: 'Dança • Intermediário', locality: '1º de Maio', presence: '88%', color: 'gold' },
  { name: 'Larissa Oliveira', level: 'Luta • Iniciante', locality: 'Acafro — Matriz', presence: '96%', color: 'green' },
  { name: 'Maya Costa', level: 'Dança • Avançada', locality: 'Jardim União', presence: '84%', color: 'brown' },
]

const teachers = [
  { name: 'Mestre Dendê', specialty: 'Capoeira e cultura popular', locality: 'Acafro — Matriz', classes: '08 turmas', status: 'Ativo', color: 'coral' },
  { name: 'Profª. Janaína Alves', specialty: 'Dança afro-brasileira', locality: 'Jardim União', classes: '05 turmas', status: 'Ativo', color: 'gold' },
  { name: 'Professor Nego Badu', specialty: 'Percussão e musicalidade', locality: '1º de Maio', classes: '04 turmas', status: 'Ativo', color: 'brown' },
  { name: 'Profª. Luana Reis', specialty: 'Expressão corporal', locality: 'Acafro — Matriz', classes: '03 turmas', status: 'Férias', color: 'green' },
]

const events = [
  { month: 'AGO', day: '29', title: 'Roda de Saberes', meta: 'Sábado • 16h • Acafro — Matriz', tag: 'Cultura', date: '29 de agosto de 2026', banner: 'event-banner-roda', partners: ['Instituto Gunga', 'Casa Ijexá'], teachers: ['Mestre Dendê', 'Profª. Janaína Alves'], description: 'Uma tarde de roda, memória e troca entre gerações para celebrar os saberes que mantêm nossa comunidade em movimento.' },
  { month: 'SET', day: '07', title: 'Festival Raízes em Movimento', meta: 'Domingo • Praça da Liberdade', tag: 'Evento aberto', date: '07 de setembro de 2026', banner: 'event-banner-festival', partners: ['Sesc Cultura', 'Coletivo Gira'], teachers: ['Professor Nego Badu'], description: 'Festival aberto com apresentações, oficinas e encontros de diferentes territórios.' },
  { month: 'SET', day: '21', title: 'Encontro de Graduação', meta: 'Sábado • 10h • Centro Comunitário', tag: 'Alunos', date: '21 de setembro de 2026', banner: 'event-banner-graduacao', partners: ['Acafro'], teachers: ['Mestre Dendê'], description: 'Celebração das novas graduações e do caminho percorrido por cada aluno.' },
]

const nextEvent = events[0]

export default function Page() {
  const [active, setActive] = useState<Section>('comunidade')
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')

  const filteredStudents = useMemo(
    () => students.filter((student) => student.name.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  function showNotice(message: string) {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2800)
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-mark" aria-hidden="true"><span /><span /><span /></div>
          <div><strong>acafro</strong><small>raízes que movem</small></div>
        </div>
        <div className="workspace-label">GESTÃO DA ORGANIZAÇÃO</div>
        <nav aria-label="Navegação principal" className="main-nav">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} className={active === id ? 'nav-item active' : 'nav-item'} onClick={() => setActive(id)}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>{active === id && <ChevronRight size={15} className="nav-arrow" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="roots-card"><Compass size={18} /><div><strong>Comunidade viva</strong><span>Seu trabalho deixa marcas.</span></div></div>
          <button className="profile-mini" onClick={() => showNotice('Perfil de Juliano aberto')}><div className="avatar avatar-small">JC</div><div><strong>Juliano Comodo</strong><span>Responsável Acafro</span></div><ChevronRight size={15} /></button>
        </div>
      </aside>

      <section className="content-area">
        <header className="topbar">
          <div className="mobile-brand"><div className="brand-mark" aria-hidden="true"><span /><span /><span /></div><strong>acafro</strong></div>
          <div className="breadcrumbs"><span>Acafro</span><ChevronRight size={14} /><strong>{active === 'visao geral' ? 'Visão geral' : active[0].toUpperCase() + active.slice(1)}</strong></div>
          <div className="top-actions"><button className="icon-button" aria-label="Notificações" onClick={() => showNotice('Você não tem novas notificações')}><Bell size={18} /><i /></button><button className="help-link" onClick={() => showNotice('Central de ajuda aberta')}>Ajuda</button></div>
        </header>

        <div className="page-content">
          {active === 'comunidade' && <Community onAction={showNotice} />}
          {active === 'visao geral' && <Overview onNavigate={setActive} onAction={showNotice} />}
          {active === 'alunos' && <Students query={query} setQuery={setQuery} students={filteredStudents} onAction={showNotice} />}
          {active === 'professores' && <Teachers query={query} setQuery={setQuery} onAction={showNotice} />}
          {active === 'frequência' && <Attendance onAction={showNotice} />}
          {active === 'eventos' && <Events onAction={showNotice} />}
          {active === 'estoque' && <Inventory onAction={showNotice} />}
        </div>
      </section>
      {notice && <div className="toast"><Check size={16} />{notice}</div>}
    </main>
  )
}

type Post = { id: number; author: string; initials: string; time: string; caption: string; place: string; tone: string; likes: number; comments: number; kind: string }

const communityPosts: Post[] = [
  { id: 1, author: 'Aline Santos', initials: 'AS', time: 'há 18 min', caption: 'Treino de hoje foi daqueles que fazem a gente lembrar por que começou. Axé para toda a roda.', place: 'Acafro — Matriz', tone: 'post-terracotta', likes: 34, comments: 8, kind: 'Treino' },
  { id: 2, author: 'João Pedro Lima', initials: 'JL', time: 'há 1 h', caption: 'Entre passos, suor e risadas. A turma do 1º de Maio mandou muito bem hoje.', place: '1º de Maio', tone: 'post-umber', likes: 27, comments: 4, kind: 'Turma' },
  { id: 3, author: 'Larissa Oliveira', initials: 'LO', time: 'ontem', caption: 'Nossa comunidade cresce quando cada pessoa compartilha sua caminhada.', place: 'Jardim União', tone: 'post-gold', likes: 51, comments: 12, kind: 'Comunidade' },
]

function Community({ onAction }: { onAction: (message: string) => void }) {
  const [posts, setPosts] = useState(communityPosts)
  const [liked, setLiked] = useState<number[]>([])
  const [draft, setDraft] = useState('')
  const [filter, setFilter] = useState('Tudo')
  const filters = ['Tudo', 'Treino', 'Turma', 'Comunidade']
  const visiblePosts = filter === 'Tudo' ? posts : posts.filter((post) => post.kind === filter)

  function publish() {
    if (!draft.trim()) return onAction('Escreva algo para compartilhar com a comunidade')
    setPosts([{ id: Date.now(), author: 'Juliano Comodo', initials: 'JC', time: 'agora', caption: draft, place: 'Acafro — Matriz', tone: 'post-brown', likes: 0, comments: 0, kind: 'Treino' }, ...posts])
    setDraft('')
    onAction('Publicação compartilhada com a comunidade')
  }

  return <>
    <div className="community-hero"><div><p className="eyebrow">HUB DOS ALUNOS</p><h1>Comunidade<span className="period">.</span></h1><p className="intro">Um lugar para celebrar os treinos, trocar energia e manter nossas raízes conectadas.</p></div><button className="primary-button" onClick={() => document.getElementById('community-composer')?.focus()}><Camera size={17} /> Compartilhar treino</button></div>
    <div className="community-layout"><div className="community-feed">
      <section className="community-composer panel"><div className="composer-top"><div className="avatar avatar-small">JC</div><input id="community-composer" value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) publish() }} placeholder="O que aconteceu no treino de hoje?" aria-label="Escreva uma publicação" /></div><div className="composer-actions"><button onClick={() => onAction('Seletor de fotos aberto')}><ImagePlus size={17} /> Adicionar foto</button><button onClick={() => onAction('Localização adicionada')}><MapPin size={17} /> Marcar local</button><button className="composer-submit" onClick={publish}><Send size={16} /> Publicar</button></div></section>
      <div className="feed-toolbar"><div><p className="eyebrow">MURAL DA COMUNIDADE</p><h2>O que está movendo a Acafro</h2></div><div className="filter-pills">{filters.map((item) => <button key={item} className={filter === item ? 'filter-pill active' : 'filter-pill'} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      {visiblePosts.map((post) => <article className="social-post panel" key={post.id}><div className="post-header"><div className={`avatar avatar-${post.tone === 'post-gold' ? 'gold' : post.tone === 'post-umber' ? 'brown' : 'coral'}`}>{post.initials}</div><div className="post-author"><strong>{post.author}</strong><span>{post.time} · {post.place}</span></div><button className="more-button" aria-label={`Mais opções da publicação de ${post.author}`} onClick={() => onAction('Mais opções da publicação')}><MoreHorizontal size={19} /></button></div><div className={`post-photo ${post.tone}`}><div className="photo-overlay"><Flame size={22} /><span>{post.kind.toUpperCase()}</span></div><div className="photo-copy">{post.kind === 'Treino' ? 'corpo que lembra' : post.kind === 'Turma' ? 'juntos no movimento' : 'raízes que conectam'}</div></div><p className="post-caption">{post.caption}</p><div className="post-actions"><button className={liked.includes(post.id) ? 'liked' : ''} onClick={() => setLiked(liked.includes(post.id) ? liked.filter((id) => id !== post.id) : [...liked, post.id])}><Heart size={18} fill={liked.includes(post.id) ? 'currentColor' : 'none'} /> {post.likes + (liked.includes(post.id) ? 1 : 0)}</button><button onClick={() => onAction('Campo de comentários aberto')}><MessageCircle size={18} /> {post.comments}</button><button className="save-post" onClick={() => onAction('Publicação salva')}><Bookmark size={18} /></button></div></article>)}
    </div><aside className="community-sidebar"><section className="panel community-card"><p className="eyebrow">NOSSA RODA</p><h2>Uma comunidade em movimento</h2><p>Compartilhe sua evolução, encontre sua turma e reconheça quem caminha com você.</p><div className="member-stack"><div className="avatar avatar-coral">AS</div><div className="avatar avatar-gold">JL</div><div className="avatar avatar-green">LO</div><span>+ 245 alunos ativos</span></div><button className="outline-button" onClick={() => onAction('Lista de alunos aberta')}><Users size={16} /> Ver comunidade</button></section><section className="panel next-training"><p className="eyebrow">PRÓXIMO TREINO</p><div className="training-date"><strong>29</strong><span>AGO<br />SÁB</span></div><h3>Roda de Saberes</h3><p>16h · Acafro — Matriz</p><button className="text-button" onClick={() => onAction('Você confirmou presença no treino')}>Confirmar presença <ArrowUpRight size={15} /></button></section></aside></div>
  </>
}

function Overview({ onNavigate, onAction }: { onNavigate: (section: Section) => void; onAction: (message: string) => void }) {
  return <>
    <div className="welcome-row"><div><p className="eyebrow">SEXTA-FEIRA, 21 DE AGOSTO DE 2026</p><h1>Bom dia, Juliano<span className="period">.</span></h1><p className="intro">Aqui está o pulso da Acafro hoje. Cuidar da gestão é fortalecer nossas raízes.</p></div><button className="primary-button" onClick={() => onAction('Novo registro iniciado')}><Plus size={17} /> Novo registro</button></div>
    <div className="signal-strip"><div className="signal-icon"><ShieldCheck size={20} /></div><div><strong>Presença em movimento</strong><span>As aulas desta semana estão com 91% de presença registrada.</span></div><button onClick={() => onNavigate('frequência')}>Ver frequência <ArrowUpRight size={16} /></button></div>
    <section className="culture-gallery" aria-label="Memória visual da Acafro"><div className="culture-gallery-intro"><p className="eyebrow">MEMÓRIA VISUAL</p><h2>Raízes que ganham forma</h2><p>Instrumentos, corpos e grafismos que atravessam o cotidiano da nossa comunidade.</p></div><div className="culture-gallery-images"><figure className="culture-image culture-image-tall"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acafrowallpaper4-9Lz6UoXGLSNGvimS8lhxDK8pRTLS1r.jpg" alt="Mãos tocando instrumento de cordas afro-brasileiro" /><figcaption>Musicalidade e memória</figcaption></figure><figure className="culture-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaperacafro1-RClwXjKaelLKaOh0o2AUm59yJLmn5L.jpg" alt="Ilustração de capoeira em tecido colorido" /><figcaption>Corpo em movimento</figcaption></figure><figure className="culture-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/acafrowallpaper3-MVrtUCvf1FkWlkZUrBCZou9gfYQTrX.jpg" alt="Mural afro-brasileiro com padrões geométricos e folhagens" /><figcaption>Território e criação</figcaption></figure></div></section>
    <section className="next-event-hero"><div className={`next-event-banner ${nextEvent.banner}`}><span>PRÓXIMO ENCONTRO</span><strong>raízes em roda</strong></div><div className="next-event-content"><div className="next-event-heading"><div><p className="eyebrow">AGENDA EM DESTAQUE</p><h2>{nextEvent.title}</h2></div><span className="event-tag">{nextEvent.date}</span></div><p className="next-event-description">{nextEvent.description}</p><div className="event-detail-grid"><div><span>Parcerias</span><strong>{nextEvent.partners.join(' · ')}</strong></div><div><span>Professores</span><strong>{nextEvent.teachers.join(' · ')}</strong></div><div><span>Onde e quando</span><strong>{nextEvent.meta}</strong></div></div><button className="outline-button" onClick={() => onNavigate('eventos')}>Ver detalhes do evento <ArrowUpRight size={15} /></button></div></section>
    <section className="section-block"><div className="section-heading"><div><p className="eyebrow">A ORGANIZAÇÃO EM NÚMEROS</p><h2>O que está acontecendo</h2></div><button className="text-button" onClick={() => onAction('Relatório exportado')}>Exportar relatório <ArrowUpRight size={15} /></button></div>
      <div className="stats-grid"><Stat icon={Users} label="Alunos ativos" value="248" delta="+12 este mês" tone="coral" /><Stat icon={MapPin} label="Localidades" value="06" delta="02 novas turmas" tone="green" /><Stat icon={CalendarDays} label="Aulas nesta semana" value="32" delta="Seg a sáb" tone="gold" /><Stat icon={WalletCards} label="Mensalidades" value="R$ 8.420" delta="84% em dia" tone="brown" /></div>
    </section>
    <div className="dashboard-grid"><section className="panel attendance-panel"><div className="panel-heading"><div><p className="eyebrow">ACOMPANHAMENTO</p><h2>Frequência semanal</h2></div><button className="more-button" onClick={() => onNavigate('frequência')}>Ver tudo <ArrowUpRight size={15} /></button></div><div className="attendance-chart"><div className="chart-y"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div><div className="chart-area"><div className="chart-lines"><i /><i /><i /><i /><i /></div><div className="bars">{['seg','ter','qua','qui','sex','sáb'].map((day, index) => <div className="bar-group" key={day}><div className="bar-track"><div className="bar-value" style={{ height: `${[74, 87, 65, 92, 81, 58][index]}%` }} /></div><span>{day}</span></div>)}</div></div></div><div className="chart-legend"><span><i className="legend-dot coral-dot" />Presença registrada</span><span><i className="legend-dot sand-dot" />Meta semanal</span></div></section>
      <section className="panel events-panel"><div className="panel-heading"><div><p className="eyebrow">PRÓXIMOS PASSOS</p><h2>Agenda da Acafro</h2></div><button className="more-button" onClick={() => onNavigate('eventos')}>Agenda completa <ArrowUpRight size={15} /></button></div><div className="event-list">{events.slice(0, 3).map((event) => <EventRow key={event.title} event={event} />)}</div></section></div>
  </>
}

function Stat({ icon: Icon, label, value, delta, tone }: { icon: typeof Users; label: string; value: string; delta: string; tone: string }) { return <div className="stat-card"><div className={`stat-icon ${tone}`}><Icon size={18} /></div><span className="stat-label">{label}</span><strong className="stat-value">{value}</strong><span className="stat-delta">{delta}</span></div> }
function EventRow({ event }: { event: typeof events[number] }) { return <div className="event-row"><div className="date-tile"><span>{event.month}</span><strong>{event.day}</strong></div><div className="event-info"><strong>{event.title}</strong><span>{event.meta}</span></div><span className="event-tag">{event.tag}</span></div> }

function Students({ query, setQuery, students: filtered, onAction }: { query: string; setQuery: (value: string) => void; students: typeof students; onAction: (message: string) => void }) { return <><div className="welcome-row"><div><p className="eyebrow">CADASTRO E CUIDADO</p><h1>Alunos<span className="period">.</span></h1><p className="intro">Conheça quem dá vida às nossas rodas, aulas e encontros.</p></div><button className="primary-button" onClick={() => onAction('Formulário de novo aluno aberto')}><Plus size={17} /> Adicionar aluno</button></div><section className="panel full-panel"><div className="list-toolbar"><div><p className="eyebrow">248 ALUNOS ATIVOS</p><h2>Todos os alunos</h2></div><label className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por nome" aria-label="Buscar aluno" /></label></div><div className="student-list">{filtered.map((student) => <div className="student-row" key={student.name}><div className={`avatar avatar-${student.color}`}>{student.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</div><div className="student-name"><strong>{student.name}</strong><span>{student.level}</span></div><div className="student-place"><MapPin size={14} />{student.locality}</div><div className="presence"><span>Presença</span><strong>{student.presence}</strong></div><button className="row-action" onClick={() => onAction(`Perfil de ${student.name} aberto`)} aria-label={`Abrir perfil de ${student.name}`}><ArrowUpRight size={17} /></button></div>)}{filtered.length === 0 && <p className="empty-state">Nenhuma raiz encontrada para essa busca.</p>}</div></section></> }
function Teachers({ query, setQuery, onAction }: { query: string; setQuery: (value: string) => void; onAction: (message: string) => void }) {
  const filtered = teachers.filter((teacher) => `${teacher.name} ${teacher.specialty} ${teacher.locality}`.toLowerCase().includes(query.toLowerCase()))
  return <><div className="welcome-row"><div><p className="eyebrow">QUEM CONDUZ O MOVIMENTO</p><h1>Professores<span className="period">.</span></h1><p className="intro">Acompanhe quem compartilha saberes, orienta os treinos e fortalece cada território.</p></div><button className="primary-button" onClick={() => onAction('Formulário de novo professor aberto')}><Plus size={17} /> Adicionar professor</button></div><section className="panel full-panel"><div className="list-toolbar"><div><p className="eyebrow">04 PROFESSORES CADASTRADOS</p><h2>Equipe de educadores</h2></div><label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar professor" aria-label="Buscar professor" /></label></div><div className="teacher-grid">{filtered.map((teacher) => <article className="teacher-card" key={teacher.name}><div className={`avatar avatar-${teacher.color}`}>{teacher.name.split(' ').map((name) => name[0]).slice(0, 2).join('')}</div><div className="teacher-card-main"><div className="teacher-card-title"><div><h3>{teacher.name}</h3><p>{teacher.specialty}</p></div><span className={teacher.status === 'Ativo' ? 'status active' : 'status'}>{teacher.status}</span></div><div className="teacher-meta"><span><MapPin size={14} />{teacher.locality}</span><span><GraduationCap size={14} />{teacher.classes}</span></div><button className="outline-button" onClick={() => onAction(`Perfil de ${teacher.name} aberto`)}>Abrir perfil <ArrowUpRight size={15} /></button></div></article>)}</div>{filtered.length === 0 && <p className="empty-state">Nenhum professor encontrado.</p>}</section></>
}

function Attendance({ onAction }: { onAction: (message: string) => void }) { return <><div className="welcome-row"><div><p className="eyebrow">PRESENÇA E TERRITÓRIO</p><h1>Frequência<span className="period">.</span></h1><p className="intro">Registre a presença das aulas e fortaleça a memória do nosso trabalho.</p></div><button className="primary-button" onClick={() => onAction('Registro digital iniciado')}><ClipboardCheck size={17} /> Registrar aula</button></div><div className="locality-grid"><div className="panel attendance-focus"><p className="eyebrow">REGISTRO DE HOJE</p><h2>Escolha uma localidade</h2><p>O registro digital permite anexar evidências e validar o território da aula.</p>{['Acafro — Matriz','1º de Maio','Jardim União'].map((place, i) => <button className="locality-row" key={place} onClick={() => onAction(`Localidade ${place} selecionada`)}><div className="place-icon"><MapPin size={17} /></div><div><strong>{place}</strong><span>{i === 0 ? '3 turmas • 18 alunos hoje' : i === 1 ? '2 turmas • 14 alunos hoje' : '1 turma • 9 alunos hoje'}</span></div><ChevronRight size={16} /></button>)}</div><div className="panel evidence-card"><div className="evidence-symbol"><Compass size={25} /></div><p className="eyebrow">MEMÓRIA DO PROJETO</p><h2>Presença que conta histórias</h2><p>Fotos e vídeos ajudam a mostrar a continuidade das aulas para parceiros e financiadores.</p><button className="outline-button" onClick={() => onAction('Lista manual aberta')}>Usar lista manual <FileText size={16} /></button></div></div></> }
function Events({ onAction }: { onAction: (message: string) => void }) { return <><div className="welcome-row"><div><p className="eyebrow">ENCONTROS E CULTURA</p><h1>Eventos<span className="period">.</span></h1><p className="intro">Tudo o que compartilhamos ganha força quando encontra a comunidade.</p></div><button className="primary-button" onClick={() => onAction('Formulário de evento aberto')}><Plus size={17} /> Criar evento</button></div><section className="panel full-panel"><div className="list-toolbar"><div><p className="eyebrow">CALENDÁRIO INSTITUCIONAL</p><h2>Próximos encontros</h2></div><button className="text-button" onClick={() => onAction('Modo calendário ativado')}>Ver calendário <CalendarDays size={15} /></button></div><div className="event-list event-list-large">{events.map((event) => <article className="event-detail-card" key={event.title}><div className={`event-detail-banner ${event.banner}`}><span>{event.tag}</span><strong>{event.title}</strong></div><div className="event-detail-body"><div className="event-detail-top"><div><p className="eyebrow">{event.date}</p><h3>{event.meta}</h3></div><button className="row-action" onClick={() => onAction(`Detalhes de ${event.title} abertos`)} aria-label={`Abrir ${event.title}`}><ArrowUpRight size={17} /></button></div><p>{event.description}</p><div className="event-detail-grid"><div><span>Parcerias</span><strong>{event.partners.join(' · ')}</strong></div><div><span>Professores</span><strong>{event.teachers.join(' · ')}</strong></div></div></div></article>)}</div></section></> }
function Inventory({ onAction }: { onAction: (message: string) => void }) { const items = [['Berimbaus', 'Equipamentos de luta', '18 unidades', 'Em dia'], ['Tecido para figurinos', 'Materiais de dança', '42 metros', 'Em dia'], ['Colchonetes', 'Materiais diversos', '06 unidades', 'Repor']]; return <><div className="welcome-row"><div><p className="eyebrow">CUIDADO COM OS MATERIAIS</p><h1>Estoque<span className="period">.</span></h1><p className="intro">Cada ferramenta guarda um pouco do nosso fazer.</p></div><button className="primary-button" onClick={() => onAction('Novo item iniciado')}><Plus size={17} /> Adicionar item</button></div><section className="panel full-panel"><div className="list-toolbar"><div><p className="eyebrow">66 ITENS CATALOGADOS</p><h2>Materiais e equipamentos</h2></div><button className="text-button" onClick={() => onAction('Relatório de estoque exportado')}>Exportar <ArrowUpRight size={15} /></button></div><div className="inventory-list">{items.map(([name, category, quantity, status]) => <div className="inventory-row" key={name}><div className="inventory-icon"><Package size={18} /></div><div className="student-name"><strong>{name}</strong><span>{category}</span></div><strong>{quantity}</strong><span className={status === 'Repor' ? 'status warn' : 'status'}>{status}</span><button className="row-action" onClick={() => onAction(`${name} selecionado`)}><ArrowUpRight size={17} /></button></div>)}</div></section></> }

