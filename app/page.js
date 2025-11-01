'use client';

import Navbar from "@/components/Navbar";
import Rules from "@/components/Rules";
import Image from "next/image";
import Start from "@/components/Start";
import Game from "@/components/Game";
import { useGlobalContext } from "@/context/GlobalContext";
import Result from "@/components/Result";

export default function Home() {
  const { userChoice, computerChoice } = useGlobalContext();
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,hsl(214,47%,23%)_0%,hsl(237,48%,15%)_100%)] p-8 min-h-[100vh]">
      <Navbar/>
      <div className="my-20">
      {userChoice === null ? <Start/> : computerChoice === null ? <Game/> : <Result/>}
      </div>
      <Rules/>
    </div>
  );
}
