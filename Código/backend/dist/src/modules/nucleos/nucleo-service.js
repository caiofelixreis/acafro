import { AppError } from '../../shared/errors/app-error.js';
import { NucleoRepository } from './nucleo-repository.js';
export class NucleoService {
    repository;
    constructor(repository = new NucleoRepository()) {
        this.repository = repository;
    }
    list() { return this.repository.list(); }
    async get(id) { const nucleo = await this.repository.findById(id); if (!nucleo)
        throw new AppError(404, 'Nucleo nao encontrado.'); return nucleo; }
    create(data) { if (!data.nome?.trim())
        throw new AppError(400, 'Nome do nucleo e obrigatorio.'); return this.repository.create({ ...data, nome: data.nome.trim() }); }
    async update(id, data) { await this.get(id); return this.repository.update(id, data); }
    async delete(id) { await this.get(id); return this.repository.delete(id); }
}
