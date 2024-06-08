import InputTextForm from "./components/input-text-form/input-text-form.component";

export default function MegaSummarizer() {
  return (
    <main className="section">
      <div className="content">
        <h1>Mega Summarizer</h1>
        <InputTextForm />
        <div className="is-flex is-align-items-center">
          <h2 className="mr-3 mb-0">Result:</h2>
          <p id="result" className="tag is-primary is-light is-large"></p>
        </div>
      </div>
    </main>
  );
}
