import Board from "@/components/board";
import Image from "next/image";

export default function Home() {
  return <Board size={5} winCount={5} />;
}
