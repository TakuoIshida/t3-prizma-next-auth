import { PrismaClient } from "@prisma/client";
import { settings } from "settings";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      settings.nodeEnv === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (settings.nodeEnv !== "production") globalForPrisma.prisma = db;
