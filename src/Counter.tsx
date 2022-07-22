import React, { useEffect, useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      console.log("useEffectが実行されました");

      setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);

    return (
      <div className="App">
        <h2>Count: {count}</h2>
      </div>
    );
}