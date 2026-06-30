# `@arshad657/gitcommit-ai` - Installation & Usage Guide

An AI-powered CLI tool designed to automatically generate high-quality, conventional Git commit messages from your staged changes using Google's Gemini models.

---

## 📋 Prerequisites
Before installation, ensure you have the following installed on your system:
* **Node.js**: v18.0.0 or higher.
* **Git**: Installed and configured on your terminal path.
* **Gemini API Key**: A valid API key from [Google AI Studio](https://aistudio.google.com/).

---

## 🚀 Installation

Install the package globally using `npm`:

```bash
npm install -g @arshad657/gitcommit-ai
```

*(Note: Depending on your system permissions, you may need to run `sudo npm install -g @arshad657/gitcommit-ai` on macOS/Linux).*

---

## ⚙️ Configuration & Setup

Once installed, initialize the configuration with your Gemini API key:

```bash
gitcommit init
```

* You will be prompted to enter your **Gemini API Key**.
* The configuration will be saved globally under `~/.gitcommitrc`.
* By default, it is configured to use the `gemini-2.5-flash` model, ensuring fast responses and compatibility with newer key types (e.g. keys starting with `AQ.`).

---

## 💻 Usage

To generate a commit message and commit your changes in one step, follow this workflow:

### 1. Stage your changes
Add files to your Git staging area:
```bash
git add .
# or stage specific files
git add src/config.js
```

### 2. Run the generator
Run `gitcommit` to analyze the diff of your staged changes and create the commit:
```bash
gitcommit
```

### 3. CLI Options
Customize the commit behavior using the following command-line flags:

* **Include Description/Body (`--body`)**:
  Generates a detailed multi-line commit message including a body with list of changes in addition to the short subject line.
  ```bash
  gitcommit --body
  ```

* **Custom Model Override (`--model <model-name>`)**:
  Override the default model (`gemini-2.5-flash`) on the fly.
  ```bash
  gitcommit --model gemini-2.5-pro
  ```

---

## 🛠️ Troubleshooting

### 1. Model Not Found or Not Supported (`404 NOT_FOUND`)
If you receive an error saying the model is not found/supported:
```
❌ Error: models/gemini-1.5-flash-002 is not found for API version v1beta
```
* **Why this happens:** Some newer API keys (prefixed with `AQ.`) or specific billing regions have restrictions on older models.
* **How to fix:** 
  * Re-run `gitcommit init` to automatically update your global configuration to use the latest `gemini-2.5-flash` model.
  * Alternatively, pass a supported model explicitly:
    ```bash
    gitcommit --model gemini-2.5-flash
    ```

### 2. Invalid API Key (`400/401 UNAUTHENTICATED`)
If you see an authentication or credential error:
* **Why this happens:** Your API key has expired, is copied incorrectly, or contains a typo.
* **How to fix:** Run `gitcommit init` to re-enter a valid Gemini API key.
