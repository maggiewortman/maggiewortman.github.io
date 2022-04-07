// document.querySelector('button');
// document.querySelector('.new-quote button');
// document.querySelector('#js-new-quote');
// const quotebutton document.querySelector('#js-new-quote');

async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const = json = await response.json();
    console.log(json);
    displayQuote(json.fact); //change if API doesn't have fact section, maybe quote?
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text')
  quoteText.textContent = quote;
}

const endpoint = 'https://catfact.ninja/fact'; //change for my own

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('clcik', getQuote);
