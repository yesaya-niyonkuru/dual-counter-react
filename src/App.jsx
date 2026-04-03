import { useState } from "react";

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div>
      <p>Count A: {countA}</p>
      <p>Count b: {countB}</p>

      <button
        onClick={() => {
          console.log("clicked A");
          setCountA((prev) => prev + 1);
        }}
      >
        {" "}
        +1 A
      </button>
      <button
        onClick={() => {
          setCountB((prev) => prev + 1);
          console.log("clicked B");
        }}
      >
        +1 B
      </button>
    </div>
  );
}

export default App;
