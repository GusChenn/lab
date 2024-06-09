"use client";

import { FormEvent, useState } from "react";
import SpeechToTextButton from "../speech-to-text-button/speech-to-text-button.component";
import RoundButton from "../round-button/round-button.component";
import { useSummaryContext } from "../../hooks/use-summary-context";
import useSummaryFetcher from "./use-summary-fetcher";

export default function InputTextForm() {
  const [inputText, setInputText] = useState("");
  const { setSummary } = useSummaryContext();
  const { fetchSummary } = useSummaryFetcher();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const summary = await fetchSummary(inputText);

    setSummary?.(summary);
  };

  return (
    <div className="box box-radius">
      <form
        onSubmit={handleSubmit}
        className="is-flex is-flex-wrap-nowrap is-align-items-center"
      >
        <input
          type="text"
          className="input is-flex-grow-3 mr-3"
          placeholder="Write your story here..."
          aria-label="Write your story here"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <SpeechToTextButton inputTextState={{ inputText, setInputText }} />
        <RoundButton type="submit" customClassName="is-flex-grow-1">
          <i className="fas fa-arrow-right"></i>
        </RoundButton>
      </form>
    </div>
  );
}
