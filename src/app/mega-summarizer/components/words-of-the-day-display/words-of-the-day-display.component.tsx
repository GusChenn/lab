import { useSummaryContext } from "../../hooks/use-summary-context";

export default function WordsOfTheDayDisplay() {
  const { wordsOfTheDay } = useSummaryContext();

  return (
    <section className="container is-flex is-flex-direction-column is-align-items-center mb-6 mt-6">
      <h1 className="mb-6">Words of the Day:</h1>
      <div className="container grid">
        {wordsOfTheDay.map((word) => (
          <div className="cell is-flex" key={word}>
            <div className="tag is-large is-light is-danger is-flex-grow-1">
              {word}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
