import { useSummaryContext } from "../../hooks/use-summary-context";
import { FiveStringArray } from "../../types/global-types";
import FiveSlotDisplay from "../five-slot-display/five-slot-display.component";

export default function WordsOfTheDayDisplay() {
  const { wordsOfTheDay } = useSummaryContext();

  const classesArray = Array(5).fill(
    "tag is-large is-light is-danger is-flex-grow-1",
  ) as FiveStringArray;

  return (
    <section className="container is-flex is-flex-direction-column is-align-items-center mb-6 mt-6">
      <h1 className="mb-6">Words of the Day:</h1>
      <FiveSlotDisplay words={wordsOfTheDay} customClasses={classesArray} />
    </section>
  );
}
