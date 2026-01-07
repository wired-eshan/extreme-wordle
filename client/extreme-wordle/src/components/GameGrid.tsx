import React, { useEffect, useRef, useState } from "react";

interface GameGridProps {
  answerWord: string;
  verifyWord: (word: string) => boolean; //check validity of english word AND if answer
  getResult: (guess: string) => Record<number, "gray" | "yellow" | "green">;
}

type Cell = { letter: string, status?: "gray" | "yellow" | "green" };

const MAX_ATTEMPTS = 6;

const GameGrid: React.FC<GameGridProps> = ({ answerWord }) => {
  const rows = MAX_ATTEMPTS;
  const cols = answerWord.length;

  const [grid, setGrid] = useState<Cell[][]>(() =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ letter: "" }))
    )
  );

  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (/^[a-zA-Z]$/.test(e.key) && col < cols) {
      const next = grid.map(r => r.map(c => ({ ...c })));
      next[row][col].letter = e.key.toUpperCase();
      setGrid(next);
      setCol(col + 1);
    }

    if (e.key === "Backspace" && col > 0) {
      const next = grid.map(r => r.map(c => ({ ...c })));
      next[row][col - 1].letter = "";
      setGrid(next);
      setCol(col - 1);
    }
  };

  return (
    <div
      ref={ref}
      tabIndex={0}
      onKeyDown={onKeyDown}
      style={{ marginTop: 20, outline: "none" }}
    >
      {grid.map((r, rIdx) => (
        <div key={rIdx} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          {r.map((cell, cIdx) => (
            <div
              key={cIdx}
              style={{
                width: 56,
                height: 56,
                border: "2px solid #999",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: "bold",
                background: "#fcfcfcff",
                color: "#000",
              }}
            >
              {cell.letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
