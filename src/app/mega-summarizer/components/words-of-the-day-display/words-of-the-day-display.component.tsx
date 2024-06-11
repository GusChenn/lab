import useWordsOfTheDay from "./use-words-of-the-day";

export default function WordsOfTheDayDisplay() {
  const { wordsOfTheDay } = useWordsOfTheDay();

  return (
    <section className="section container is-flex is-flex-direction-column is-align-items-center">
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
