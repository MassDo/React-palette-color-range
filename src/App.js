import React, { useState, useEffect } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  // state
  const [color, setColor] = useState("#32a852");
  const [error, setError] = useState(false);
  const [numberOfShade, setNumberOfShade] = useState(10);
  const [colors, setColors] = useState(
    new Values("#32a852").all(numberOfShade)
  );
  // effect
  useEffect(() => {
    let cols = new Values(color).all(parseInt(numberOfShade));
    setColors(cols);
    console.log("useEffect", cols);
  }, [numberOfShade]);
  const submitHandler = (e) => {
    e.preventDefault();
    setError(false);
    try {
      let cols = new Values(color).all(parseInt(numberOfShade));
      setColors(cols);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color app</h3>
        <form onSubmit={submitHandler}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            id="color"
            name="color"
            placeholder="#32a852"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="size"> palette range : </label>
          <input
            className=""
            id="size"
            type="Number"
            min="1"
            max="50"
            placeholder="choose"
            value={numberOfShade}
            onChange={(e) => setNumberOfShade(e.target.value)}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colors.map((color, index) => (
          <SingleColor key={index} {...color} hexColor={color.hex} />
        ))}
      </section>
    </>
  );
}

export default App;
