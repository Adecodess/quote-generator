import React from "react";

const Button = ({ quotes, fetchQuotes }) => {
  const { text, author } = quotes;
  return (
    <div>
      <div className="quote-controls">
        <a
          href={`https://twitter.com/intent/tweet?text=${text} - ${author}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="quote-controls-button">tweet it</button>
        </a>
        <button className="quote-controls-button" onClick={fetchQuotes}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Button;
