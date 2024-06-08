"use client";

import axios from "axios";
import { FormEvent } from "react";

export default function MegaSummarizer() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = event.currentTarget.querySelector("textarea")?.value;
    const result = document.getElementById("result");

    try {
      const response = await axios.post("/api/summarize", { text });
      const summary = response.data.summary.replace(/[",.'!:?]/g, "");

      result!.textContent = summary;
    } catch (error) {
      console.error("Failed to summarize text", error);
    }
  };

  return (
    <main className="section">
      <div className="content">
        <h1>Mega Summarizer</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            className="textarea mb-4"
            placeholder="Boring text goes here..."
            aria-label="Boring text goes here"
          ></textarea>
          <button className="button is-primary" type="submit">
            Summarize
          </button>
        </form>
        <div className="is-flex is-align-items-center">
          <h2 className="mr-3 mb-0">Result:</h2>
          <p id="result" className="tag is-primary is-light is-large"></p>
        </div>
      </div>
    </main>
  );
}
