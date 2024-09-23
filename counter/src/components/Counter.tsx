import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setCount((count) => count + 1);
  };

  const handleMinusClick = () => {
    setCount((count) => count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <button
        style={{ marginRight: "1em" }}
        className="Plus"
        onClick={handlePlusClick}
      >
        {" "}
        +{" "}
      </button>
      {count}
      <button
        style={{ marginLeft: "1em" }}
        className="Minus"
        onClick={handleMinusClick}
      >
        {" "}
        -{" "}
      </button>
      <br />
      <button
        style={{ marginTop: "1em" }}
        className="Reset"
        onClick={handleReset}
      >
        {" "}
        Reset{" "}
      </button>
    </div>
  );
}

export default Counter;
