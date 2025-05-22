import fs from "fs/promises";
import path from "path";
import { CollectionsTitleMap, IDatabase } from "./database.interface";

const filePath = path.resolve(process.cwd(), "app/_lib/database/db.json");

async function readDatabase(): Promise<IDatabase> {
  try {
    const dbFile = await fs.readFile(filePath, "utf-8");
    const db: IDatabase = JSON.parse(dbFile);

    if (!db) throw new Error("Banco de Dados não disponível.");

    return db;
  } catch (error) {
    console.error("Erro ao ler o Banco de Dados:", error);
    throw new Error("Banco de dados não disponível.");
  }
}

async function getCollectionRecords(
  collection: CollectionsTitleMap
): Promise<IDatabase[CollectionsTitleMap]> {
  try {
    const db = await readDatabase();

    if (!db[collection])
      throw new Error(`Collection "${collection}" não encontrada.`);

    console.log("Banco de Dados lido com sucesso!");
    return db[collection];
  } catch (error) {
    console.error(`Erro ao ler a collection ${collection}:`, error);
    throw new Error("Collection não disponível.");
  }
}

async function addToDatabase<C extends CollectionsTitleMap>(
  collection: C,
  newRecord: Omit<IDatabase[C][number], "id">
) {
  try {
    const db = await readDatabase();

    if (!db[collection])
      throw new Error(`Collection "${collection}" não encontrada.`);

    const newRecordWithID = {
      id: Date.now().toString(),
      ...newRecord,
    };

    if (!db[collection]) db[collection] = [];

    db[collection].push(newRecordWithID);

    await fs.writeFile(filePath, JSON.stringify(db, null, 2));

    console.log(
      `Novo registro adicionado à coleção "${collection}" com sucesso!`
    );
  } catch (error) {
    console.error(`Erro ao adicionar na collection ${collection}:`, error);
    throw new Error("Falha ao criar novo registro.");
  }
}

const database = {
  read: readDatabase,
  add: addToDatabase,
  getCollectionRecords,
};

export default database;
