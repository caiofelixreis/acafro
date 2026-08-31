import type { Prisma } from '@prisma/client';
import { AppError } from '../../shared/errors/app-error.js';
import { NucleoRepository } from './nucleo-repository.js';

export class NucleoService {
  constructor(private readonly repository = new NucleoRepository()) {}
  list() { return this.repository.list(); }
  async get(id: string) { const nucleo = await this.repository.findById(id); if (!nucleo) throw new AppError(404, 'Nucleo nao encontrado.'); return nucleo; }
  create(data: Prisma.NucleoCreateInput) { if (!data.nome?.trim()) throw new AppError(400, 'Nome do nucleo e obrigatorio.'); return this.repository.create({ ...data, nome: data.nome.trim() }); }
  async update(id: string, data: Prisma.NucleoUpdateInput) { await this.get(id); return this.repository.update(id, data); }
  async delete(id: string) { await this.get(id); return this.repository.delete(id); }
}
