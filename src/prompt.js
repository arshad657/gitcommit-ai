export function buildPrompt(diff, includeBody) {
  return `
You are a senior software engineer.

Generate a Git commit message using Conventional Commits.

Rules:
- Title max 70 characters
- No emojis
- No markdown
- Be concise and meaningful

${
  includeBody
    ? `
Return format:

<type>: <title>

- bullet point explaining WHAT changed
- bullet point explaining WHY it changed
`
    : `
Return ONLY:
<type>: <title>
`
}

Diff:
${diff}
`;
}
