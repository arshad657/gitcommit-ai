import fs from "fs";
import os from "os";

const CONFIG_PATH = `${os.homedir()}/.gitcommitrc`;

export function saveConfig(config) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
}

export function loadConfig() {
  if (!fs.existsSync(CONFIG_PATH)) return null;
  return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf-8"));
}
