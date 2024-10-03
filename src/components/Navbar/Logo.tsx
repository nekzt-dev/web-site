import Image from "next/image";
import NekztLogo from '../../assets/logo.png';

export default function Logo() {

  return (
    <div className="h-10 relative cursor-pointer">
      <Image src={NekztLogo} className="h-full w-auto" alt="Logo da Nekzt" />
    </div>
  );
};