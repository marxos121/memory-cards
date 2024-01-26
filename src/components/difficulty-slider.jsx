import { useState } from "react";
import { PropTypes } from "prop-types";

export default function DifficultySlider({ onConfirm, initialValue = 6 }) {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="slider-wrapper">
      <div className="difficulty-setup">
        <label htmlFor="difficulty-slider">Cards per round: </label>
        <span className="slider-value">
          <h4>{value} / 52</h4>
          <input
            id="difficulty-slider"
            type="range"
            min="3"
            max="52"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </span>
        <button onClick={() => onConfirm(value)}>Confirm</button>
      </div>
    </div>
  );
}

DifficultySlider.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  initialValue: PropTypes.number,
};
