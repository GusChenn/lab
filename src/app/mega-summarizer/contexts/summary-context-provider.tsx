"use client";

import { useState } from "react";
import { SummaryContext } from "../hooks/use-summary-context";
import useWordsOfTheDay from "../hooks/use-words-of-the-day";

export function SummaryProvider({ children }: { children: React.ReactNode }) {
  const [summary, setSummary] = useState("");
  const { wordsOfTheDay } = useWordsOfTheDay();

  return (
    <SummaryContext.Provider value={{ summary, setSummary, wordsOfTheDay }}>
      {children}
    </SummaryContext.Provider>
  );
}
