'use client';
import { useState } from "react";

export default function BurguerMenu() {
  const [isAnimationMenu, setIsAnimationMenu] = useState<boolean>(false);

  return (
    <div
      className="cursor-pointer flex flex-col gap-2 justify-center items-center"
      onMouseEnter={() => setIsAnimationMenu(true)}
      onMouseLeave={() => setIsAnimationMenu(false)}
    >
      <div className={`${isAnimationMenu ? 'w-10' : 'w-7'} transition-all h-1 bg-slate-200 rounded-md`} />
      <div className="w-10 h-1 bg-slate-200 rounded-md" />
      <div className={`${isAnimationMenu ? 'w-10' : 'w-7'} transition-all h-1 bg-slate-200 rounded-md`} />
    </div>
  );
};