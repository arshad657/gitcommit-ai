# GitCommit AI

> AI-powered Git commit message generator for developers.

Generate meaningful commit messages directly from your staged Git changes and automatically create commits using your own API key.

![npm](https://img.shields.io/npm/v/@arshad657/gitcommit-ai)
![license](https://img.shields.io/github/license/@arshad657/gitcommit-ai/@arshad657/gitcommit-ai)
![downloads](https://img.shields.io/npm/dm/@arshad657/gitcommit-ai)

---

## Features

- 🤖 AI-generated commit messages
- 📝 Conventional Commit support
- 🚀 Automatic Git commits
- 📄 Optional commit descriptions
- 🔑 Bring Your Own API Key
- ⚡ Fast CLI experience
- 🌍 Cross-platform support
- 🔒 Privacy-focused
- 🛠 Open source

---

## Installation

### Global Installation

```bash
npm install -g @arshad657/gitcommit-ai
```

### Verify Installation

```bash
gitcommit --version
```

---

## Quick Start

### 1. Initialize GitCommit AI

```bash
gitcommit init
```

You will be prompted to enter your API key.

### 2. Stage Your Changes

```bash
git add .
```

### 3. Generate and Commit

```bash
gitcommit
```

Example output:

```text
feat(auth): implement GitHub OAuth login
```

The commit will be created automatically.

---

## Commands

### Generate Commit and Commit Automatically

```bash
gitcommit
```

---

### Generate Commit With Description

```bash
gitcommit --body
```

Example:

```text
feat(auth): implement GitHub OAuth login

- Added GitHub OAuth flow
- Added callback handling
- Added token persistence
```

---

### Preview Commit Message Only

```bash
gitcommit --preview
```

---

### Skip Confirmation Prompt

```bash
gitcommit --yes
```

---

### Reconfigure API Key

```bash
gitcommit init
```

---

## Example Workflow

```bash
git add .

gitcommit --body
```

Output:

```text
feat(user): add profile image upload

- Added image upload endpoint
- Added file validation
- Updated profile settings UI
```

GitCommit AI will automatically execute:

```bash
git commit -m "feat(user): add profile image upload" -m "Added image upload endpoint..."
```

---

## Why GitCommit AI?

Writing commit messages is repetitive.

GitCommit AI analyzes your staged changes and generates concise, meaningful commit messages following modern Git conventions.

Focus on building products instead of thinking about commit wording.

---

## Privacy

GitCommit AI:

- Does not store source code
- Does not collect analytics
- Does not track users
- Uses your own API key
- Processes only the staged Git diff required to generate commit messages

---

## Roadmap

### v1

- CLI commit generation
- Automatic commit creation
- Commit descriptions

### v2

- Documentation website
- Interactive onboarding

### v3

- VS Code Extension

### v4

- Team collaboration features

---

## Contributing

Contributions are welcome.

```bash
git clone https://github.com/@arshad657/gitcommit-ai/@arshad657/gitcommit-ai.git
```

Create a feature branch:

```bash
git checkout -b feature/amazing-feature
```

Commit your changes:

```bash
git commit -m "feat: add amazing feature"
```

Push your branch:

```bash
git push origin feature/amazing-feature
```

Open a Pull Request.

---

## License

MIT License

---

Made for developers who prefer coding over writing commit messages.