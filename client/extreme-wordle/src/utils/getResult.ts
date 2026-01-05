export type LetterColor = "gray" | "yellow" | "green";
export type LetterResult = Record<number, LetterColor>;

export function getResult(
  guessWord: string,
  answerWord: string
): LetterResult {
  const result: LetterResult = {};

  const guess = guessWord.toLowerCase();
  const answer = answerWord.toLowerCase();

  const n = guess.length;

  const remaining: Record<string, number> = {};
  
  for (let i = 0; i < n; i++) {
    if (guess[i] !== answer[i]) {
      const ch = answer[i];
      remaining[ch] = (remaining[ch] || 0) + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (guess[i] === answer[i]) {
      result[i] = "green";
    }
  }

  for (let i = 0; i < n; i++) {
    if (result[i]) continue; 

    const ch = guess[i];
    if (remaining[ch] > 0) {
      result[i] = "yellow";
      remaining[ch]--; 
    } else {
      result[i] = "gray";
    }
  }

  return result;
}
