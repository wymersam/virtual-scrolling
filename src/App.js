import React, { useState } from "react";
import "./index.css";

function App() {
  const numbers = Array.from(Array(9000).keys());
  // const manyNumbers = Array.from(Array(100000).keys());
  const windowHeight = 600;

  const limit = 20; // amount of trs

  const [scrollTop, setScrollTop] = useState(0);

  const rowHeight = 55;
  const scrolledPast = Math.floor(scrollTop / rowHeight); // calculates how many rows we've scrolled past
  const startRowHeight = scrolledPast * rowHeight; // the height of everything you've scrolled past
  const endRowHeight =
    numbers.length * rowHeight - windowHeight - startRowHeight; //

  console.log("scroll top", scrollTop);
  console.log("scrolled past", scrolledPast);
  console.log("start height", startRowHeight);
  console.log("end height", endRowHeight);

  return (
    <div className="App">
      <h1>Virtual Scrolling</h1>
      <h3>
        You've scrolled past {scrollTop}px or {scrolledPast} rows!
      </h3>
      <div
        onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
        style={{ height: windowHeight, overflow: "auto" }}
      >
        <table>
          <tbody>
            <tr style={{ height: startRowHeight }} />
            {numbers
              .slice(scrolledPast, scrolledPast + limit)
              .map((numbers) => (
                <tr key={numbers} style={{ height: rowHeight }}>
                  <td>{numbers}</td>
                </tr>
              ))}
            <tr style={{ height: endRowHeight }} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
