"use client";

import axios from "axios";
import { FormEvent } from "react";

export default function InputTextForm() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = event.currentTarget.querySelector("textarea")?.value || "";

    const summary = await fetchSummary(text);
    fillResultContent(summary);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="textarea mb-4"
          placeholder="Write your story here..."
          aria-label="Write your story here"
        ></textarea>
        <button className="button is-primary" type="submit">
          Summarize
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
