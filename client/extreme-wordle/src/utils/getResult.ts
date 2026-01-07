export type LetterStatus = "gray" | "yellow" | "green";

const getResult = (
  guess: string,
  answer: string
): Record<number, LetterStatus> => {
  const result: Record<number, LetterStatus> = {};

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      result[i] = "green";
    } else if (answer.includes(guess[i])) {
      result[i] = "yellow";
    } else {
      result[i] = "gray";
    }
  }

  return result;
};

export default getResult;
