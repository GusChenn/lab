import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const params = {
  number: 5,
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(
      "https://random-word-api.herokuapp.com/word",
      { params },
    );
    console.log(response);
    res.status(200).json({ words: response.data });
  } catch (error: any) {
    console.error("Failed to fetch random words: ", error.message);
    res.status(500).json({ error: "Failed to fetch random words" });
  }
}
