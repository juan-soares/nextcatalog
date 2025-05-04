import fs from "fs";

const filePath = "./app/_lib/db/db.json";

export default async function connectToDatabase() {
  try {
    const db = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (!db) throw new Error("Banco de dados indisponível.");

    return db;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function updateDatabase(newRecord: any, collection: string) {
  try {
    const db = await connectToDatabase();
    if (!db) throw new Error("Conexao falhou");

    const newRecordWithId = {
      id: Date.now().toString(),
      ...newRecord,
    };

    db[collection].push(newRecordWithId);

    fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
    console.log("Novo registro salvo com sucesso!");
  } catch (error) {
    console.log(error);
  }
}
