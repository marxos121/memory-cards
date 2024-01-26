import PropTypes from "prop-types";

function Infotab({ hide }) {
  return (
    <div className="screen-cover">
      <div className="infoblock">
        <h2>Rules</h2>
        <p>
          Welcome to a game that will really stretch your memory! <br />
          <br /> The rules are simple:
        </p>
        <ul>
          <li>each round you get a random set of cards</li>
          <li>click on a card you have not clicked on before</li>
          <li>if you click on the same card twice, you lose</li>
        </ul>{" "}
        <p>
          <b>Can you get through an entire deck?</b>
        </p>
        <button onClick={hide}>Got it!</button>
      </div>
    </div>
  );
}

Infotab.propTypes = {
  hide: PropTypes.func.isRequired,
};

export default Infotab;
