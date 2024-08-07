import Logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo" />
      </header>
    </main>
  );
}
