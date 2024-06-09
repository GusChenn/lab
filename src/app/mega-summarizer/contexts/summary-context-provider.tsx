"use client";

import { useState } from "react";
import { SummaryContext } from "../hooks/use-summary-context";

export function SummaryProvider({ children }: { children: React.ReactNode }) {
  const [summary, setSummary] = useState("");

  return (
    <SummaryContext.Provider value={{ summary, setSummary }}>
      {children}
    </SummaryContext.Provider>
  );
}
