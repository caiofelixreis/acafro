import { prisma } from '../../lib/prisma.js';
export class NucleoRepository {
    list() { return prisma.nucleo.findMany({ orderBy: { nome: 'asc' } }); }
    findById(id) { return prisma.nucleo.findUnique({ where: { id } }); }
    create(data) { return prisma.nucleo.create({ data }); }
    update(id, data) { return prisma.nucleo.update({ where: { id }, data }); }
    delete(id) { return prisma.nucleo.delete({ where: { id } }); }
}
