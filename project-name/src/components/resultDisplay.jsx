import "./resultDisplay.css";

function ResultDisplay({ result }) {
  return (
    <section id="outcome-section">
      <h2>Outcome</h2>
      <p className="result-text">{result}</p>
    </section>
  );
}

export default ResultDisplay;