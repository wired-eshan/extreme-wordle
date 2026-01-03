import React from "react";
import GameGrid from "./GameGrid";

const Game: React.FC = () => {
  //API call to get answer {word : definition}[], roundTime
  //verifyWord
  //getResult
  const mockApiRes = {
    wordList: [
      {
        word: "abc",
        definition: "acb",
      },
    ],
    roundTime: 10, //number
  };

  return (
    <>
      <div>Game</div>{" "}
    </>
  );
};

export default Game;
