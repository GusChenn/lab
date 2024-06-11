"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { WordsOfTheDay, useSummaryContext } from "./use-summary-context";

interface Return {
  wordsOfTheDay: WordsOfTheDay;
}

type UseWordsOfTheDay = () => Return;

const useWordsOfTheDay: UseWordsOfTheDay = () => {
  const { wordsOfTheDay: uninitializedWordsOfTheDay } = useSummaryContext();
  const [wordsOfTheDay, setWordsOfTheDay] = useState<WordsOfTheDay>(
    uninitializedWordsOfTheDay,
  );

  useEffect(() => {
    const fetchWordsOfTheDay = async () => {
      try {
        const response = await axios.get("/api/words-of-the-day");

        const wordsOfTheDay = response.data.words;
        setWordsOfTheDay(wordsOfTheDay);
        console.log(wordsOfTheDay);
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
