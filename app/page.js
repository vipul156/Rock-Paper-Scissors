'use client';

import Navbar from "@/components/Navbar";
import Rules from "@/components/Rules";
import Start from "@/components/Start";
import Game from "@/components/Game";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Home() {
  const { userChoice, computerChoice } = useGlobalContext();
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,hsl(214,47%,23%)_0%,hsl(237,48%,15%)_100%)] p-3 md:p-8 min-h-[100vh]">
      <Navbar/>
      <div className="my-20">
      {userChoice === null ? <Start/> : <Game/> }
      </div>
      <Rules/>
    </div>
  );
}
