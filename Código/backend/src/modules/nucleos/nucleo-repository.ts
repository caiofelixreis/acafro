import type { Prisma, Nucleo } from '@prisma/client';
import { prisma } from '../../lib/prisma.js';

export class NucleoRepository {
  list(): Promise<Nucleo[]> { return prisma.nucleo.findMany({ orderBy: { nome: 'asc' } }); }
  findById(id: string): Promise<Nucleo | null> { return prisma.nucleo.findUnique({ where: { id } }); }
  create(data: Prisma.NucleoCreateInput): Promise<Nucleo> { return prisma.nucleo.create({ data }); }
  update(id: string, data: Prisma.NucleoUpdateInput): Promise<Nucleo> { return prisma.nucleo.update({ where: { id }, data }); }
  delete(id: string): Promise<Nucleo> { return prisma.nucleo.delete({ where: { id } }); }
}
