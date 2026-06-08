#!/usr/bin/env node

import ora from "ora";
import readline from "readline";
import { execSync } from "child_process";

import { getConfig } from "../src/config.js";
import { saveConfig } from "../src/storage.js";
import { getStagedDiff } from "../src/diff.js";
import { buildPrompt } from "../src/prompt.js";
import { generateCommitMessage } from "../src/gemini.js";

/* ---------------- INIT ---------------- */
function init() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter Gemini API Key: ", (key) => {
    saveConfig({
      apiKey: key,
      model: "gemini-1.5-flash-002",
    });

    console.log("✔ Config saved globally");
    rl.close();
  });
}

/* ---------------- MAIN ---------------- */
async function run() {
  const args = process.argv.slice(2);

  // INIT COMMAND SUPPORT
  if (args.includes("init")) {
    return init();
  }

  const includeBody = args.includes("--body");

  const spinner = ora("Checking staged changes...").start();

  const diff = getStagedDiff();

  if (!diff) {
    spinner.fail("No staged changes found.");
    process.exit(0);
  }

  spinner.succeed("Staged changes detected.");

  const aiSpinner = ora("Generating commit message...").start();

  try {
    const config = getConfig();

    const prompt = buildPrompt(diff, includeBody);

    const message = await generateCommitMessage(config, prompt);

    aiSpinner.succeed("Commit message generated.");

    execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, {
      stdio: "inherit",
    });

    console.log("\n🚀 Committed successfully!\n");
    console.log(message);
  } catch (err) {
    aiSpinner.fail("Failed to generate commit message.");
    console.error(err.message);
    process.exit(1);
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});