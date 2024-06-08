"use client";

import axios from "axios";
import { FormEvent } from "react";

export default function InputTextForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = event.currentTarget.querySelector("input")?.value || "";

    const summary = await fetchSummary(text);
    fillResultContent(summary);
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
        />
        <button
          className="button is-primary is-rounded is-flex-grow-1 mr-3"
          type="button"
        >
          <i className="fas fa-microphone"></i>
        </button>
        <button
          className="button is-primary is-rounded is-flex-grow-1"
          type="submit"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
}

const fetchSummary = async (text: string) => {
  try {
    const response = await axios.post("/api/summarize", { text });
    const summary = response.data.summary.replace(/[",.'!:?()]/g, "");

    return summary;
  } catch (error) {
    console.error("Failed to summarize text", error);
  }
};

const fillResultContent = async (summary: string) => {
  const resultElement = document.getElementById("result");

  resultElement!.textContent = summary;
};
