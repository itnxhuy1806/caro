"use client";

import { FC, useState } from "react";
import { Cell } from "./cell";

type TCellValue = string | null;
type TBoard = TCellValue[];
type THistory = TBoard[];

interface IBoardProps {
  size?: number;
  winCount?: number;
}

const Board: FC<IBoardProps> = ({ size = 3, winCount = 3 }) => {
  const [board, setBoard] = useState<TBoard>(new Array(size * size).fill(null));
  const [history, setHistory] = useState<THistory>([board]);
  const [isX, setIsX] = useState(true);

  const [winner, setWinner] = useState<TCellValue>(null);

  const onClick = (index: number) => {
    const newBoard = [...board];
    const newHistory = [...history];

    if (newBoard[index] !== null) return;

    //lưu value của cell
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);

    //lưu lịch sử
    newHistory.push(newBoard);
    setHistory(newHistory);

    //check win
    checkWin(newBoard);

    setIsX(!isX);
  };

  const onClickHistory = (index: number) => {
    setBoard(history[index]);
  };

  const checkWin = (board: TBoard) => {
    board.forEach((cell, index) => {
      const x = Math.ceil((index + 1) / size);
      const y = (index % size) + 1;
    });
  };

  return (
    <div className="flex gap-10 justify-center items-center h-screen w-screen">
      {winner && <div className="p-10 bg-red-50 ">{winner}</div>}
      <div className="">
        {new Array(size).fill(null).map((_value, row) => {
          return (
            <div className="flex" key={row}>
              {new Array(size).fill(null).map((_value, col) => {
                return <Cell key={col} value={board[row * size + col]} onClick={() => onClick(row * size + col)} />;
              })}
            </div>
          );
        })}
      </div>
      <div className="">
        {history.map((value: TBoard, index: number) => {
          return (
            <div key={index} className="flex gap-4 cursor-pointer" onClick={() => onClickHistory(index)}>
              <div className=""> #{index}</div>
              <div className="">{value.map((e) => e || "null").join("-")}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Board;
