import BurguerMenu from "./BurguerIcon";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar () {

  return (
    <nav className="flex justify-around items-center h-full">
      <div className="w-1/4 flex items-center justify-center">
        <Button text="contato" />
      </div>

      <div className=" w-2/4 flex items-center justify-center">
        <Logo />
      </div>

      <div className=" w-1/4 flex items-center justify-center">
        <BurguerMenu />
      </div>
    </nav>
  );
};