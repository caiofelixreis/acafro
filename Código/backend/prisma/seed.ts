import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const nucleos = [
    { nome: 'Centro - Matriz', endereco: 'Ouro Branco/MG' },
    { nome: 'Sao Francisco', endereco: 'Ouro Branco/MG' },
    { nome: 'Belvedere', endereco: 'Ouro Branco/MG' },
    { nome: 'Olaria', endereco: 'Ouro Branco/MG' }
  ];

  for (const nucleo of nucleos) {
    const existing = await prisma.nucleo.findFirst({ where: { nome: nucleo.nome } });
    if (existing) {
      await prisma.nucleo.update({ where: { id: existing.id }, data: nucleo });
    } else {
      await prisma.nucleo.create({ data: nucleo });
    }
  }
}

main().finally(() => prisma.$disconnect());
