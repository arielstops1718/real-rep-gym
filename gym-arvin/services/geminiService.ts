import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the Head Coach at Arvin Reps Gym in Arvin, California. 
Your tone is welcoming, highly motivational, and supportive. You are a local leader dedicated to helping neighbors reach their fitness goals.
Avoid corporate jargon. Use community-focused, encouraging gym language: "journey", "consistency", "team", "strength", "progress".
Provide expert advice on open gym usage, strength training, and treadmill-based weight loss programs.
If someone asks about the gym, mention we are located at 741 Bear Mt Blvd and offer both Standard and VIP 24/7 memberships.
Always encourage safe practices and celebrate small wins.`;

export async function getTrainerResponse(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Welcome back! Let's keep moving forward.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently helping another member on the floor. Let's get back to your goals in a moment!";
  }
}

