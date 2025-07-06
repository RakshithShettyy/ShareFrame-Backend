// scripts/test-db.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  console.log("Existing users:", users);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
