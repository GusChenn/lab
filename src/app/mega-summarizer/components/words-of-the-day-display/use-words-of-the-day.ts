"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface Return {
  wordsOfTheDay: string[];
}

type UseWordsOfTheDay = () => Return;

const useWordsOfTheDay: UseWordsOfTheDay = () => {
  const [wordsOfTheDay, setWordsOfTheDay] = useState<string[]>([]);

  useEffect(() => {
    const fetchWordsOfTheDay = async () => {
      try {
        const response = await axios.get("/api/words-of-the-day");

        const wordsOfTheDay = response.data.words;
        setWordsOfTheDay(wordsOfTheDay);
      } catch (error) {
        console.error("Failed to fetch random words: ", error);
        setWordsOfTheDay(["error", "error", "error", "error", "error"]);
        throw error;
      }
    };

    fetchWordsOfTheDay();
  }, []);

  return { wordsOfTheDay };
};

export default useWordsOfTheDay;
