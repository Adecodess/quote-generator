import React, { useState, useEffect } from "react";
import Component from "./Component";
import Quote from "./Quote";

const url = "https://type.fit/api/quotes";
let data;

function App() {
  const [loading, setLoading] = useState(true);
  const [IsLoading, setIsLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      let data = await response.json();
      let randomNo = Math.floor(Math.random() * data.length) + 1;
      let result = data[randomNo];
      setQuotes(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  setTimeout(() => setIsLoading(false), 3000);
  if (IsLoading) {
    return (
      <main>
        <Component />
      </main>
    );
  }

  return (
    <main>
      <header className="title">Quotes</header>
      <Quote quotes={quotes} fetchQuotes={fetchQuotes} loading={loading} />
    </main>
  );
}

export default App;
