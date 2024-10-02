/** @format */

import React, { useEffect, useState } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function FetchQuotes() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jasonResponse = await response.json();
      const randomQuote = jasonResponse.quote;
      setQuote(randomQuote);
      setIsLoading(false);
    }
    FetchQuotes();
  }, []);

  return (
    <div>
      <p
        className='Loader'
        style={{ opacity: isLoading ? 0 : 1 }}>
        Loading...
      </p>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}

export default QuoteFetcherLoader;
