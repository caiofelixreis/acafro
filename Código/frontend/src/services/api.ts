const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333/api';

export type Nucleo = { id: string; nome: string; endereco: string | null; ativo: boolean; createdAt: string; updatedAt: string };

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, { headers: { 'Content-Type': 'application/json', ...init?.headers }, ...init });
  if (!response.ok) throw new Error((await response.json().catch(() => null))?.error ?? 'Falha na API.');
  return response.json() as Promise<T>;
}

export const nucleosService = {
  list: () => request<Nucleo[]>('/nucleos'),
  get: (id: string) => request<Nucleo>(`/nucleos/${id}`),
  create: (data: { nome: string; endereco?: string }) => request<Nucleo>('/nucleos', { method: 'POST', body: JSON.stringify(data) }),
  remove: (id: string) => request<Nucleo>(`/nucleos/${id}`, { method: 'DELETE' })
};
