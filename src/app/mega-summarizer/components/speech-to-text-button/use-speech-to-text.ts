import React from "react";

interface Parameters {
  containerStateSetterFunction: React.Dispatch<React.SetStateAction<string>>;
}

interface Return {
  handleSpeechToTextStart: () => void;
  handleSpeechToTextStop: () => void;
  isListening: boolean;
}

type UseSpeechToText = ({ containerStateSetterFunction }: Parameters) => Return;

const useSpeechToText: UseSpeechToText = ({ containerStateSetterFunction }) => {
  const [isListening, setIsListening] = React.useState(false);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = "pt-BR";

  recognition.onstart = function () {
    setIsListening(true);
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    containerStateSetterFunction(transcript);
  };

  recognition.onspeechend = () => {
    recognition.stop();
    setIsListening(false);
  };

  const handleSpeechToTextStart = (): void => {
    recognition.start();
  };

  const handleSpeechToTextStop = (): void => {
    recognition.stop();
  };

  return {
    handleSpeechToTextStart,
    handleSpeechToTextStop,
    isListening,
  };
};

export default useSpeechToText;
