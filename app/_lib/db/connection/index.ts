import fs from "fs";

const filePath = "./app/_lib/db/db.json";

export default async function connectToDatabase() {
  try {
    const db = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (!db) throw new Error("Banco de dados indisponível.");

    return db;
  } catch (error) {
    return null;
  }
}

export async function updateDatabase(newRecord: any, collection: string) {
  const db = await connectToDatabase();
  if (!db) throw new Error("Conexao falhou");

  const updatedCollection = db[collection].push({
    id: db[collection].length++,
    ...newRecord,
  });

  console.log(updatedCollection);

  fs.writeFileSync(
    filePath,
    JSON.stringify(updatedCollection, null, 2), // identação bonita
    "utf8"
  );
}
