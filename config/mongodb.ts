import { MongoClient } from 'mongodb';

let uri = process.env.MONGODB_URI || ""; // This is needed so that TS doesn't give us an error
let db_name = process.env.MONGODB_DB;

let cachedClient: any = null;
let cachedDb: any = null;

if (!uri) {
  throw new Error('Please define MONGODB_URI environment variable');
}

if (!db_name) {
  throw new Error('Please define MONGODB_DB (Database name) environment variable');
}

export async function connectToDatabase() {
  if(cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = await client.db(db_name);

  cachedClient = client;
  cachedDb = db;

  return { client, db }
}
