import React from "react";

interface GameGridProps {
  answerWord: string;
  verifyWord: (arg0: string) => boolean; //check validity of english word AND if answer
  getResult: (arg0: string) => JSON;
}

//getResult response json -> {0: "gray/yellow/green"}

const GameGrid: React.FC<GameGridProps> = () => {
  return <div>GameGrid</div>;
};

export default GameGrid;
