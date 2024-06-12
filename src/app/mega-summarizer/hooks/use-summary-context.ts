"use client";

import { Uninitialized } from "@/types/helper-types";
import { createContext, useContext } from "react";
import { FiveStringArray } from "../types/global-types";

export type Summary = Uninitialized<FiveStringArray>;
export type WordsOfTheDay = FiveStringArray;

interface SummaryContextType {
  summary: Summary;
  setSummary: ((summary: Summary) => void) | undefined;
  wordsOfTheDay: WordsOfTheDay;
}

export const SummaryContext = createContext<SummaryContextType | undefined>({
  summary: [],
  setSummary: undefined,
  wordsOfTheDay: ["", "", "", "", ""],
});

export function useSummaryContext() {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error("useSummaryContext must be used within a SummaryProvider");
  }
  return context;
}
