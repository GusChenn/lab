import React from "react";

interface Params {
  containerStateSetterFunction: React.Dispatch<React.SetStateAction<string>>;
}

interface Return {
  handleSpeechToTextStart: () => void;
  handleSpeechToTextStop: () => void;
  isListening: boolean;
}

type UseSpeechToText = ({ containerStateSetterFunction }: Params) => Return;

const useSpeechToText: UseSpeechToText = ({ containerStateSetterFunction }) => {
  const [isListening, setIsListening] = React.useState(false);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = "pt-BR";

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    containerStateSetterFunction(transcript);
  };

  recognition.onspeechend = () => {
    recognition.stop();
    setIsListening(false);
  };

  const handleSpeechToTextStart = (): void => {
    setIsListening(true);
    recognition.start();
  };

  const handleSpeechToTextStop = (): void => {
    setIsListening(false);
    recognition.stop();
  };

  return {
    handleSpeechToTextStart,
    handleSpeechToTextStop,
    isListening,
  };
};

export default useSpeechToText;
