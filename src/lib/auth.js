import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// global cache 
let client;
let db;

async function getDatabase() {
  if (db) return db;

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
  }

  client = new MongoClient(process.env.MONGODB_URI);

  await client.connect();
  db = client.db("libriflow-nextjs");

  console.log("✅ MongoDB connected");

  return db;
}

// create auth instance lazily
const dbPromise = getDatabase();

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  database: mongodbAdapter(await dbPromise, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      prompt: "select_account",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});