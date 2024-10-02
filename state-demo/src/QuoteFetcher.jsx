/** @format */

import React, { useEffect, useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    FetchQuotes();
  }, []);
  async function FetchQuotes() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jasonResponse = await response.json();
    const randomQuote = jasonResponse.quote;
    setQuote(randomQuote);
  }
  return (
    <div>
      <button onClick={FetchQuotes}>Get Quoes as an handler</button>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}

export default QuoteFetcher;
