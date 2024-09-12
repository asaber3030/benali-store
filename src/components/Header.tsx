import Image from "next/image";
import Logo from "./Logo.png";

export default function Header() {
  return (
    <header className="flex items-center max-sm:flex-col justify-center gap-4 py-8 header">
      <Image src={Logo} width={90} height={90} alt="الشعار" />
      <h1>
        متجر <b>بن علي</b>
      </h1>
    </header>
  );
}
