import { useSummaryContext } from "../../hooks/use-summary-context";
import { FiveStringArray } from "../../types/global-types";
import FiveSlotDisplay from "../five-slot-display/five-slot-display.component";

export default function SummaryDisplay() {
  const { summary } = useSummaryContext();

  const classesArray = Array(5).fill(
    "tag is-large is-light is-flex-grow-1",
  ) as FiveStringArray;

  if (summary.length > 0) {
    return (
      <div className="container is-flex is-flex-direction-column is-align-items-center mb-6 mt-6">
        {
          <FiveSlotDisplay
            words={summary as FiveStringArray}
            customClasses={classesArray}
          />
        }
      </div>
    );
  }

  return null;
}
