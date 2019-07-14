import React from "react";

const ColorSelect = ({ handleChange }) => {
  return (
    <ul id="color-select">
      <li>
        <button
          className="btn"
          name="color"
          value="yellow"
          style={{ backgroundColor: "yellow" }}
          onClick={handleChange}
        />
      </li>

      <li>
        <button
          className="btn"
          name="color"
          value="red"
          style={{ backgroundColor: "red" }}
          onClick={handleChange}
        />
      </li>
      <li>
        <button
          className="btn"
          name="color"
          value="lightgreen"
          style={{ backgroundColor: "lightgreen" }}
          onClick={handleChange}
        />
      </li>
      <li>
        <button
          className="btn"
          name="color"
          value="lightblue"
          style={{ backgroundColor: "lightblue" }}
          onClick={handleChange}
        />
      </li>
      <li>
        <button
          className="btn"
          name="color"
          value="orange"
          style={{ backgroundColor: "orange" }}
          onClick={handleChange}
        />
      </li>
    </ul>
  );
};

export default ColorSelect;
