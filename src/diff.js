import { execSync } from "child_process";

export function getStagedDiff() {
  try {
    const diff = execSync("git diff --cached", {
      encoding: "utf8",
      maxBuffer: 10 * 1024 * 1024,
    });

    return diff.trim();
  } catch {
    return "";
  }
}
