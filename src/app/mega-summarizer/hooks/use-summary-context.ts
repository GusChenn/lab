"use client";

import { createContext, useContext } from "react";

interface SummaryContextType {
  summary: string | undefined;
  setSummary: ((summary: string) => void) | undefined;
}

export const SummaryContext = createContext<SummaryContextType | undefined>({
  summary: undefined,
  setSummary: undefined,
});

export function useSummaryContext() {
  const context = useContext(SummaryContext);
  if (!context) {
    throw new Error("useSummaryContext must be used within a SummaryProvider");
  }
  return context;
}
