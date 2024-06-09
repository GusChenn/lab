import { StateObject } from "@/types/helper-types";
import useSpeechToText from "./use-speech-to-text";
import RoundButton from "../round-button/round-button.component";

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
    <RoundButton
      customClassName={`${isListening ? "is-danger" : "is-primary"} is-flex-grow-1 mr-2`}
      type="button"
      onClick={isListening ? handleSpeechToTextStop : handleSpeechToTextStart}
    >
      <i className="fas fa-microphone"></i>
    </RoundButton>
  );
}
