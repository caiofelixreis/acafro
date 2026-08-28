import { useCallback, useEffect, useState } from 'react';
import { nucleosService, type Nucleo } from '../services/api';

export function useNucleos() {
  const [nucleos, setNucleos] = useState<Nucleo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const reload = useCallback(async () => {
    setLoading(true); setError(null);
    try { setNucleos(await nucleosService.list()); } catch (cause) { setError(cause instanceof Error ? cause.message : 'Falha ao carregar nucleos.'); } finally { setLoading(false); }
  }, []);

  useEffect(() => { void reload(); }, [reload]);
  return { nucleos, loading, error, reload };
}
