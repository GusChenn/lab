export default function MegaSummarizer() {
  return (
    <main className="section">
      <div className="content">
        <h1>Mega Summarizer</h1>
        <textarea
          className="textarea mb-4"
          placeholder="Boring text goes here..."
          aria-label="Boring text goes here"
        ></textarea>
        <button className="button is-primary" type="submit">
          Summarize
        </button>
      </div>
    </main>
  );
}
