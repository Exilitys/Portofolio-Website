import { GoogleGenAI } from "@google/genai";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type FetchOptions = {
  signal?: AbortSignal;
  systemPrompt?: string;
};

let cachedClient: GoogleGenAI | null = null;
let cachedApiKey: string | null = null;

const getClient = (apiKey: string) => {
  if (!cachedClient || cachedApiKey !== apiKey) {
    cachedClient = new GoogleGenAI({ apiKey });
    cachedApiKey = apiKey;
  }

  return cachedClient;
};

const conversationToPrompt = (messages: ChatMessage[]) => {
  return messages
    .map((message) => {
      const speaker = message.role === "user" ? "User" : "Assistant";
      return `${speaker}: ${message.content}`;
    })
    .join("\n\n");
};

/**
 * Calls the Gemini API with the provided conversation and returns the model reply.
 */
export const fetchGeminiResponse = async (
  messages: ChatMessage[],
  options: FetchOptions = {}
): Promise<string> => {
  const { signal, systemPrompt } = options;

  signal?.throwIfAborted();

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const model = "gemini-2.5-flash";

  if (!apiKey) {
    throw new Error(
      "Gemini API key is missing. Set VITE_GEMINI_API_KEY in your environment."
    );
  }

  const client = getClient(apiKey);
  const history = conversationToPrompt(messages);

  const segments: string[] = [];

  if (history) {
    segments.push("Conversation so far:", history);
  }

  const finalconv = segments.join("\n\n");

  const finalPrompt = `${systemPrompt}\n\n<UserQuestion>${finalconv}</UserQuestion>`;

  let result: any;
  try {
    result = await client.models.generateContent({
      model,
      contents: finalPrompt,
    });
  } catch (error) {
    if (signal?.aborted) {
      throw new DOMException("The operation was aborted.", "AbortError");
    }

    throw error instanceof Error
      ? error
      : new Error("Gemini request failed unexpectedly.");
  }

  signal?.throwIfAborted();

  const rawText =
    typeof result?.text === "function" ? result.text() : result?.text;

  const text =
    typeof rawText === "string" && rawText.trim().length > 0
      ? rawText.trim()
      : result?.response?.candidates?.[0]?.content?.parts
          ?.map((part: { text?: string }) => part.text ?? "")
          .join("\n")
          .trim();

  if (!text) {
    throw new Error("Gemini response did not include any text content.");
  }

  return text;
};
