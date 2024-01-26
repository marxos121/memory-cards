import PropTypes from "prop-types";
import logo from "../assets/logo.png";
import info from "../assets/info.png";

export default function Header({
  showInfo,
  restart,
  score = null,
  max_score = null,
}) {
  return (
    <header>
      <img src={logo} className="logo" onClick={restart} />
      {(score !== null || max_score !== null) && (
        <h3>
          Score: {score}/{max_score}
        </h3>
      )}
      <img className="info" src={info} onClick={showInfo}></img>
    </header>
  );
}

Header.propTypes = {
  showInfo: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
  score: PropTypes.number,
  max_score: PropTypes.number,
};
