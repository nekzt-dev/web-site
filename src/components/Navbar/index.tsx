import BurguerMenu from "./BurguerIcon";
import Button from "./Button";
import Logo from "./Logo";

export default function Navbar () {

  return (
    <nav className="flex justify-around items-center h-full">
      <Button text="contato" />
      <Logo />
      <BurguerMenu />
    </nav>
  );
};