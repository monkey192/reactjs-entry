import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { BookList } from './BookList';
import { Counter } from './Counter';
import { Book } from './models/book';
import MyComponent from "./MyComponent";


function App() {
  const [count, setCount] = useState(99999);
  const divElement = useRef();

  useEffect(() => {
    setCount(0);
    const element = divElement.current as any;
    if (element) { element.style.backgroundColor = "red";}
  }, []);
  return (
    <div ref={divElement} style={{ backgroundColor: "blue" }}>
      {count}
    </div>
  );
}

export default App;
