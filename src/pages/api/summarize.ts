import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

// const openai = new OpenAI(process.env.OPENAI_API_KEY);
const key = process.env.OPENAI_API_KEY;

console.log("key", key);

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Get the text from the request body
  const { text } = req.body;

  try {
    // Make a request to the OpenAI API
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Summarize the following text in exactly two words: ${text}`,
        },
      ],
      max_tokens: 200,
    });

    // Extract the summary from the response
    const summary = gptResponse.choices[0].message.content?.trim();

    // Send the summary in the response
    res.status(200).json({ summary });
  } catch (error) {
    console.error("Failed to summarize text", error);
    res.status(500).json({ error: "Failed to summarize text" });
  }
}
