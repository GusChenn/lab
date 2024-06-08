import { StateObject } from "@/types/helper-types";
import useSpeechToText from "./use-speech-to-text";

interface SpeechToTextButtonProps {
  inputTextState: StateObject<"inputText", string>;
}

export default function SpeechToTextButton({
  inputTextState,
}: SpeechToTextButtonProps) {
  const { handleSpeechToTextStart, handleSpeechToTextStop, isListening } =
    useSpeechToText({
      containerStateSetterFunction: inputTextState.setInputText,
    });

  return (
    <button
      className={`button ${isListening ? "is-danger" : "is-primary"} is-rounded is-flex-grow-1 mr-3`}
      type="button"
      onClick={isListening ? handleSpeechToTextStop : handleSpeechToTextStart}
    >
      <i className="fas fa-microphone"></i>
    </button>
  );
}
