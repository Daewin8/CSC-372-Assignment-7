import { useState } from "react";
import "./index.css";
import "./app.css";

import PlayerThrow from "./components/playerThrow";
import ComputerThrow from "./components/computerThrow";
import ResultDisplay from "./components/resultDisplay";

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("Make your move!");
  const [isShuffling, setIsShuffling] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  function determineWinner(player, computer) {
    if (player === computer) return "It's a Tie!";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "You Win!";
    }
    return "Computer Wins!";
  }

  function handleChoice(choice) {
    if (isShuffling) return;

    setPlayerChoice(choice);
    setIsShuffling(true);
    setResult("Computer is thinking...");

    let index = 0;

    const interval = setInterval(() => {
      setComputerChoice(choices[index % 3]);
      index++;
    }, 500);

    setTimeout(() => {
      clearInterval(interval);

      const finalComputer =
        choices[Math.floor(Math.random() * 3)];

      setComputerChoice(finalComputer);

      const outcome = determineWinner(choice, finalComputer);
      setResult(outcome);

      setIsShuffling(false);
    }, 3000);
  }

  return (
    <>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>

      <main>
        <PlayerThrow
          choices={choices}
          playerChoice={playerChoice}
          handleChoice={handleChoice}
        />

        <ComputerThrow computerChoice={computerChoice} />

        <ResultDisplay result={result} />
      </main>
    </>
  );
}

export default App;