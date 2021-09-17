import React, { useState, useEffect } from "react";

const SingleColor = ({ type, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const copyHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hexColor}`);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAlert(false);
    }, 800);
    return () => clearTimeout(timeoutId);
  }, [alert]);
  return (
    <article
      onClick={copyHandler}
      className={`${alert && "active"} ${
        type === "shade" && "color-light"
      } color `}
      style={{ backgroundColor: `#${hexColor}` }}
    >
      <p className="color-value">
        {alert ? "Into clipboard !! :)" : `#${hexColor}`}
      </p>
      <p className="percent-value">{weight}%</p>
      {/* <div className="alert">{alert && "hex copied to clipboard"}</div> */}
    </article>
  );
};

export default SingleColor;
