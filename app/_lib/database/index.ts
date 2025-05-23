import fs from "fs/promises";
import path from "path";
import { CollectionsTitleMap, IDatabase } from "./database.interface";

const filePath = path.resolve(process.cwd(), "app/_lib/database/db.json");

async function readDatabase(): Promise<IDatabase> {
  try {
    const dbFile = await fs.readFile(filePath, "utf-8");
    const db: IDatabase = JSON.parse(dbFile);

    return db;
  } catch (error) {
    console.error("[readDatabase] Erro ao ler o Banco de Dados:", error);
    throw new Error(
      "Falha ao acessar os dados do(a) Banco de Dados. Por favor, tente novamente mais tarde."
    );
  }
}

async function getCollectionRecords<C extends CollectionsTitleMap>(
  collection: C
): Promise<IDatabase[C]> {
  try {
    const db = await readDatabase();

    const records = db[collection];

    if (!records) {
      throw new Error(
        `Collection "${collection}" inexistente no Banco de Dados.`
      );
    }

    return records;
  } catch (error) {
    console.error(
      `[getCollectionRecords] Erro ao buscar a Collection "${collection}":`,
      error
    );
    throw new Error(
      "Falha ao acessar os dados do(a) Collection. Por favor, tente novamente mais tarde."
    );
  }
}

async function addToDatabase<C extends CollectionsTitleMap>(
  collection: C,
  newRecord: Omit<IDatabase[C][number], "id">
) {
  try {
    const db = await readDatabase();

    if (!db[collection])
      throw new Error(
        `Collection "${collection}" inexistente no Banco de Dados.`
      );

    const newRecordWithID = {
      id: Date.now().toString(),
      ...newRecord,
    };

    db[collection].push(newRecordWithID);

    await fs.writeFile(filePath, JSON.stringify(db, null, 2));

    console.log(
      `Novo registro adicionado à coleção "${collection}" com sucesso!`
    );
  } catch (error) {
    console.error(
      `[addToDatabase] Erro ao adicionar na collection "${collection}":`,
      error
    );

    throw new Error(
      "Falha ao adicionar os dados no(a) Collection. Por favor, tente novamente mais tarde."
    );
  }
}

const database = {
  read: readDatabase,
  add: addToDatabase,
  getCollectionRecords,
};

export default database;
