'use client';
import { useState } from "react";

interface IPropsButton {
  text: string;
};

export default function Button({ text }: IPropsButton) {
  const [isAnimationButton, setIsAnimationButton] = useState<boolean>(false);

  return (
    <button
      className="px-4 py-1 relative text-3xl gap-2 cursor-pointer rounded-sm overflow-hidden"
      onMouseEnter={() => setIsAnimationButton(true)}
      onMouseLeave={() => setIsAnimationButton(false)}
    >
      <div className={`${isAnimationButton ? 'w-full' : 'w-1'} transition-all z-0 h-full bg-zinc-200 absolute top-0 left-0`} />
      {/* <div className="w-5 h-5 flex relative items-center justify-center">
        <div className="bg-white w-6 h-6 z-10 absolute rounded-full opacity-20"></div>
        <div className="bg-white w-4 h-4 z-20 absolute rounded-full opacity-25"></div>
        <div className="bg-white w-2 h-2 z-30 absolute rounded-full opacity-100"></div>
      </div> */}
      <p
        className={`${isAnimationButton ? 'text-slate-900' : 'text-zinc-200'} transition-all z-10 relative`}
      >
        {text}
      </p>
    </button>
  );
};