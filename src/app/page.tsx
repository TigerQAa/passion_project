"use client";
import { Chess } from "chess.js";
import Chessboard from "@/components/chessboard";
import { useState } from "react";
import Link from "next/link";
const chess = new Chess();
export default function Home() {
  const [position, setPosition] = useState(chess.fen());
  const [text, setText] = useState<string | null>(null);
  const [score, setScore] = useState<[number, number]>([0, 0]);
  return (
    <div>
      <div className="text-center mb-2">
        <Link href="https://www.chesskid.com/learn/articles/how-to-play-chess" target="_blank">
          <button className="mt-3 font-bold hover:border-[#646cff] border p-1 px-2 border-transparent text-xl transition rounded-lg">
            How to play?
          </button>
        </Link>
        <Link href="/process">
          <button className="mt-3 font-bold hover:border-[#646cff] border p-1 px-2 border-transparent text-md transition rounded-lg">
            What is the process behind building a chess site?
          </button>
        </Link>
      </div>
      <Chessboard
        onPieceDrop={(sourceSquare, targetSquare, piece) => {
          try {
            chess.move({
              from: sourceSquare,
              to: targetSquare,
              promotion: piece[1].toLowerCase() ?? "q",
            });
            setPosition(chess.fen());
            if (chess.isGameOver()) {
              if (chess.isDraw()) {
                setText("Draw!");
                setScore([score[0] + 0.5, score[1] + 0.5]);
              } else if (chess.turn() === "b") {
                setText("White wins!");
                setScore([score[0] + 1, score[1]]);
              } else if (chess.turn() === "w") {
                setText("Black wins!");
                setScore([score[0], score[1] + 1]);
              }
            }
            return true;
          } catch {
            return false;
          }
        }}
        position={position}
        boardWidth={560}
        arePiecesDraggable={!chess.isGameOver()}
        customBoardStyle={{ margin: "auto" }}
      />
      <p className="text-center text-2xl mt-2">{text}</p>
      <h1 className="text-center text-5xl font-bold mt-5">
        {score[0]} - {score[1]}
      </h1>
      {chess.isGameOver() ? (
        <div
          className="text-center"
          onClick={() => {
            chess.reset();
            setPosition(chess.fen());
            setText(null);
          }}
        >
          <button className="mt-3 font-bold hover:border-[#646cff] border p-1 px-2 border-transparent text-xl transition rounded-lg">
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}
