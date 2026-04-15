import "./computerThrow.css";

function ComputerThrow({ computerChoice }) {
  return (
    <section id="computer-section">
      <h2>Computer Throw</h2>

      <figure>
        <img
          className="computer-image"
          src={
            computerChoice
              ? `/images/${computerChoice}.PNG`
              : "/images/question-mark.PNG"
          }
          alt="Computer Choice"
        />
        <figcaption>{computerChoice || "?"}</figcaption>
      </figure>
    </section>
  );
}

export default ComputerThrow;