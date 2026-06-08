import { execSync } from "child_process";

export function applyCommit(message) {
  execSync(`git commit -m "${message}"`, {
    stdio: "inherit",
  });
}
