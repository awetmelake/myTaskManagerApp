import React from "react";
import { COLORS } from "../colors.js";

const ColorSelect = ({ handleChange }) => {
  let colors = [];
  for (let color in COLORS) {
    console.log()
    colors.push(
      <li key={COLORS[color]}>
        <button
          className={`btn-small ${COLORS[color]}`}
          name="color"
          value={COLORS[color]}
          onClick={handleChange}
        />
      </li>
    );
  }

  return (
    <ul className="color-select">
        {colors.map(c => c)}
    </ul>
  );
};

export default ColorSelect;
