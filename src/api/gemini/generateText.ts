import { GoogleGenerativeAI } from "@google/generative-ai";
import { toast } from "sonner";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function generateAIText(prompt: string) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    toast.error(`Error generating AI content: ${error}`);
  }
}
