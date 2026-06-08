import { GoogleGenAI } from "@google/genai";

export async function generateCommitMessage(config, prompt) {
  const ai = new GoogleGenAI({
    apiKey: config.apiKey,
  });

  const response = await ai.models.generateContent({
    model: config.model,
    contents: prompt,
  });

  return response.text.trim();
}
