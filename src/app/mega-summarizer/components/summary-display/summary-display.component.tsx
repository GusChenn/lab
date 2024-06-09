import { useSummaryContext } from "../../hooks/use-summary-context";

export default function SummaryDisplay() {
  const { summary } = useSummaryContext();

  return (
    <div className="is-flex is-align-items-center">
      <h2 className="mr-3 mb-0">Result:</h2>
      <p className="tag is-primary is-light is-large">{summary}</p>
    </div>
  );
}
