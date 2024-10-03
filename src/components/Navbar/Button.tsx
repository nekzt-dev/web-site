'use client';
import { useState } from "react";

interface IPropsButton {
  text: string;
};

export default function Button({ text }: IPropsButton) {
  const [isAnimationButton, setIsAnimationButton] = useState<boolean>(false);

  return (
    <button
      className="px-4 py-1 text-3xl relative cursor-pointer rounded-sm overflow-hidden"
      onMouseEnter={() => setIsAnimationButton(true)}
      onMouseLeave={() => setIsAnimationButton(false)}
    >
      <div className={`${isAnimationButton ? 'w-full' : 'w-1'} transition-all z-0 h-full bg-zinc-200 absolute top-0 left-0`} />
      <p 
        className={`${isAnimationButton ? 'text-slate-900' : 'text-zinc-200'} transition-all z-10 relative`}
      >
          {text}
      </p>
    </button>
  );
};