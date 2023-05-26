import React, { useState, useEffect } from "react";
import data from "../data/data.json";

// here we are using useState to create a state variable called fact and setFact to update the state variable
// and we are using useEffect to run generateRandomFact when the component mounts
function Fact() {
  const [fact, setFact] = useState("");
  const [source, setSource] = useState("");
  useEffect(() => {
    generateRandomFact();
  }, []);

  const generateRandomFact = () => {
    const randomFact = data[Math.floor(Math.random() * data.length)];
    setFact(randomFact?.fact || "");
    setSource(randomFact?.source || "");
  };

  /* for some reason as i refactored, copilot wanted to create this function, but it's not needed

  const handleNewQuote = () => {
  generateRandomFact();
  };*/


  return (
    <div className="container">
<div className="fact-box">
      <div className="fact">{fact}</div>
      <div className="source">{source}</div>
   <button className="new-quote" onClick={generateRandomFact}>New Quote</button>
    </div>
    </div>
  );
}

export default Fact;