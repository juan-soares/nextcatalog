import mongoose from "mongoose";

// Pega da env e garante que não é undefined com !
const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  throw new Error(
    "Não foi encontrado MONGODB_URI no .env, por favor, defina-o primeiro.",
  );
}

// Cache global para evitar múltiplas conexões
let cached = (global as any)._mongoCache || { conn: null, promise: null };
(global as any)._mongoCache = cached;

export async function connectMongo(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI)
      .then((mongooseInstance) => {
        console.log("MongoDB conectado ✅");
        return mongooseInstance;
      })
      .catch((err) => {
        cached.promise = null; // reset caso falhe
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
