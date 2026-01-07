import React from "react";
import GameGrid from "./GameGrid";
import getResultUtil from "../utils/getResult";

const Game: React.FC = () => {
  //API call to get answer {word : definition}[], roundTime
  //verifyWord
  //getResult
  const answerWord = "WORDLE";

  const getResult = (guess: string) => {
    return getResultUtil(guess, answerWord);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        Wordle
      </h1>

      <GameGrid
        answerWord={answerWord}
        verifyWord={() => true}
        getResult={getResult}   
      />
    </div>
  );
};

export default Game;
