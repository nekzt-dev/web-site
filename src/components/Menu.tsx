'use client';
import Image from "next/image";
import Logo from '../assets/logo.png';
import { useState } from "react";

export default function Menu () {
  const [isAnimationMenu, setIsAnimationMenu] = useState<boolean>(false);
  const [isAnimationButton, setIsAnimationButton] = useState<boolean>(false);

  return (
    <div className="flex justify-around items-center h-full">

      <div 
        className="px-4 py-1 text-3xl relative cursor-pointer rounded-sm overflow-hidden"
        onMouseEnter={() => setIsAnimationButton(true)}  
        onMouseLeave={() => setIsAnimationButton(false)}  
      >
        <div className={`${isAnimationButton ? 'w-full' : 'w-1'} transition-all z-0 h-full bg-zinc-200 absolute top-0 left-0`} />
        <p className={`${isAnimationButton ? 'text-slate-900' : 'text-zinc-200'} transition-all z-10 relative`}>contato</p>
      </div> 

      <div className="h-10 relative cursor-pointer">
        <Image src={Logo} className="h-full w-auto" alt="Logo da Nekzt" />
      </div>

      <div 
        className="cursor-pointer flex flex-col gap-2 justify-center items-center"
        onMouseEnter={() => setIsAnimationMenu(true)}
        onMouseLeave={() => setIsAnimationMenu(false)}
      >
        <div className={`${isAnimationMenu ? 'w-10' : 'w-7'} transition-all h-1 bg-slate-200 rounded-md`} />
        <div className="w-10 h-1 bg-slate-200 rounded-md" />
        <div className={`${isAnimationMenu ? 'w-10' : 'w-7'} transition-all h-1 bg-slate-200 rounded-md`} />
      </div>
    </div>
  );
};