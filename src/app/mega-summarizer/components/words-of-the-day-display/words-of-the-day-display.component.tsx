import useWordsOfTheDay from "./use-words-of-the-day";

export default function WordsOfTheDayDisplay() {
  const { wordsOfTheDay } = useWordsOfTheDay();

  return (
    <main className="section">
      <div className="content">
        <h1>Words of the Day:</h1>
        <ul>
          {wordsOfTheDay.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
