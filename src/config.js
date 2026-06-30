import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { loadConfig } from "./storage.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔥 FORCE LOAD .env FROM CLI PACKAGE ROOT
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

export function getConfig() {
  const savedConfig = loadConfig() || {};
  return {
    apiKey: savedConfig.apiKey || process.env.GEMINI_API_KEY,
    model: savedConfig.model || "gemini-2.5-flash",
  };
}