"use client";
import { useEffect, useState } from "react";

interface IPropsWriting {
  texts: string[];
};

export default function Writing({ texts }: IPropsWriting) {
  const caracterWriting = '_';
  const [actualWord, setActualWord] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [method, setMethod] = useState<'writingTextFlow' | 'clearTextFlow'>('writingTextFlow');

  function changeCurrentIndex() {
    if (currentIndex >= texts.length - 1) return setCurrentIndex(0);
    return setCurrentIndex(prev => prev + 1);
  };

  const optionsText = {
    changeText({ option }: { option: 'write' | 'clear' }) {
      setActualWord(prev => prev.replaceAll(caracterWriting, ''));

      if (option === 'write') {
        setActualWord(prev => prev.concat(`${texts[currentIndex][count]}${caracterWriting}`));
        setCount(prev => prev + 1);
        return;
      };

      setActualWord(prev => prev.replace(/.$/, caracterWriting));
      setCount(prev => prev - 1);
      return;
    },

    writingTextFlow() {
      if (count >= texts[currentIndex].length) {
        setTimeout(() => setMethod('clearTextFlow'), 500);
        return;
      };

      this.changeText({ option: 'write' });
    },

    clearTextFlow() {
      if (count === 0) {
        setCount(0);
        setTimeout(() => setMethod('writingTextFlow'), 300);
        changeCurrentIndex();
        return;
      };

      this.changeText({ option: 'clear' });
    },
  };

  useEffect(() => {
    const setTimer = method === 'writingTextFlow' ? 100 : 30;
    const timeout = setTimeout(() => optionsText[method](), setTimer);
    return () => clearTimeout(timeout);
  }, [count, method]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="text-6xl font-extralight leading-tight">

        <p>Transforme suas ideias &nbsp; &nbsp; &nbsp; &nbsp;</p>

        <div className="flex relative">
          <span>em&nbsp;</span>
          <p className="font-light">
            {actualWord}
          </p>
        </div>

      </div>
    </div>
  );
};
