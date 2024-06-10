"use client";

import InputTextForm from "./components/input-text-form/input-text-form.component";
import SummaryDisplay from "./components/summary-display/summary-display.component";
import WordsOfTheDayDisplay from "./components/words-of-the-day-display/words-of-the-day-display.component";
import { SummaryProvider } from "./contexts/summary-context-provider";

export default function MegaSummarizer() {
  return (
    <SummaryProvider>
      <main className="section">
        <div className="content">
          <h1>Mega Summarizer</h1>
          <WordsOfTheDayDisplay />
          <InputTextForm />
          <SummaryDisplay />
        </div>
      </main>
    </SummaryProvider>
  );
}
