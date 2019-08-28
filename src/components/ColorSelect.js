import React from "react";

const ColorSelect = ({ handleChange }) => {
  return (
    <ul className="color-select">
      <li>
        <button
          className="btn-small yellow"
          name="color"
          value="yellow"
          onClick={handleChange}
        />
      </li>

      <li>
        <button
          className="btn-small red lighten-1"
          name="color"
          value="red lighten-1"
          onClick={handleChange}
        />
      </li>
      <li>
        <button
          className="btn-small light-green"
          name="color"
          value="light-green"
          onClick={handleChange}
        />
      </li>
      <li>
        <button
          className="btn-small light-blue darken-2"
          name="color"
          value="light-blue darken-2"
          onClick={handleChange}
        />
      </li>
      <li>
        <button
          className="btn-small orange darken-2"
          name="color"
          value="orange darken-2"
          onClick={handleChange}
        />
      </li>
    </ul>
  );
};

export default ColorSelect;
