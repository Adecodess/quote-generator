import React from "react";
import Button from "./Button";
import Loading from "./Loading";

const Quote = ({ quotes, fetchQuotes, loading }) => {
  return (
    <main>
      <div className="quote-block">
        {loading ? (
          <Loading />
        ) : (
          <div className="my-quote">
            <div>
              <h1 className="quote-text">{quotes.text}</h1>
              <h3 className="quote-author">- {quotes.author}</h3>
            </div>
            <Button fetchQuotes={fetchQuotes} quotes={quotes} />
          </div>
        )}
      </div>
      );
    </main>
  );
};

export default Quote;
