import "./playerThrow.css";

function PlayerThrow({ choices, playerChoice, handleChoice }) {
  return (
    <section id="player-section">
      <h2>Your Throw</h2>

      <div className="choices">
        {choices.map((choice) => (
          <figure
            key={choice}
            className={
              playerChoice === choice
                ? "choice-card selected"
                : "choice-card"
            }
            onClick={() => handleChoice(choice)}
          >
            <img src={`/images/${choice}.PNG`} alt={choice} />
            <figcaption>{choice}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default PlayerThrow;