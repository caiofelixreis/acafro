import { useNucleos } from './hooks/useNucleos.js';
import './styles.css';

export function App() {
  const { nucleos, loading, error, reload } = useNucleos();
  return <main className="page"><header><span className="mark">AC</span><div><p className="eyebrow">Sistema ACAFRO</p><h1>Nucleos de atendimento</h1></div><button onClick={() => void reload()}>Atualizar</button></header><p className="intro">Base inicial conectada ao backend. Os nucleos organizam oficinas, professores e frequencia.</p>{loading && <p>Carregando...</p>}{error && <p className="error">{error}</p>} {!loading && !error && <section className="grid">{nucleos.map((nucleo) => <article key={nucleo.id}><span className={nucleo.ativo ? 'status active' : 'status'}>{nucleo.ativo ? 'Ativo' : 'Inativo'}</span><h2>{nucleo.nome}</h2><p>{nucleo.endereco ?? 'Endereco a confirmar'}</p></article>)}</section>}</main>;
}
