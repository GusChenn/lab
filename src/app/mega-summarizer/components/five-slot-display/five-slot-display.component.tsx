import { FiveStringArray } from "../../types/global-types";

interface FiveSlotDisplayProps {
  words: FiveStringArray;
  customClasses?: FiveStringArray;
}

export default function FiveSlotDisplay({
  words,
  customClasses,
}: FiveSlotDisplayProps) {
  return (
    <div className="container grid">
      {words.map((word, index) => (
        <div className="cell is-flex" key={`${word}-${index}`}>
          <div className={customClasses?.[index]}>{word}</div>
        </div>
      ))}
    </div>
  );
}
