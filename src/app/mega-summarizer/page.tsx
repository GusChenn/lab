"use client";

import axios from "axios";
import { FormEvent } from "react";

export default function MegaSummarizer() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = event.currentTarget.querySelector("textarea")?.value;

    try {
      const response = await axios.post("/api/summarize", { text });
      console.log(response);
    } catch (error) {
      console.error("Failed to summarize text", error);
    }
  };

  return (
    <main className="section">
      <div className="content">
        <h1>Mega Summarizer</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="textarea mb-4"
            placeholder="Boring text goes here..."
            aria-label="Boring text goes here"
          ></textarea>
          <button className="button is-primary" type="submit">
            Summarize
          </button>
        </form>
      </div>
    </main>
  );
}
