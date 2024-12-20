import React, { useState } from 'react';

const api_url = 'https://api.api-ninjas.com/v1/quotes';
const api_key = 'yvHPf+2asOOzuXf1eaY00Q==DV70RhOPExQ613f9'; // Replace with your actual API key

export const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  function getQuote() {
    fetch(`${api_url}?category=happiness`, {
      headers: {
        'X-Api-Key': api_key,
      },
    })
      .then(response => response.json())
      .then(data => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote.quote);
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <p>{quote}</p>
      <button onClick={getQuote}>Click Me to get Quote</button>
     
    </div>
  );
};