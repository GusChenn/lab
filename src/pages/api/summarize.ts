import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import generatePrompt from "./prompt";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { text } = req.body;

  try {
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: generatePrompt(text),
        },
      ],
      max_tokens: 400,
      temperature: 1.0,
    });

    const summary = gptResponse.choices[0].message.content?.trim();

    res.status(200).json({ summary });
  } catch (error) {
    console.error("Failed to summarize text", error);
    res.status(500).json({ error: "Failed to summarize text" });
  }
}
