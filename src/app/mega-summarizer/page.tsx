import InputTextForm from "./components/input-text-form/input-text-form.component";
import { SummaryProvider } from "./contexts/summary-context-provider";
import { useSummaryContext } from "./hooks/use-summary-context";

export default function MegaSummarizer() {
  const { summary } = useSummaryContext();

  return (
    <SummaryProvider>
      <main className="section">
        <div className="content">
          <h1>Mega Summarizer</h1>
          <InputTextForm />
          <div className="is-flex is-align-items-center">
            <h2 className="mr-3 mb-0">Result:</h2>
            <p className="tag is-primary is-light is-large">{summary}</p>
          </div>
        </div>
      </main>
    </SummaryProvider>
  );
}
