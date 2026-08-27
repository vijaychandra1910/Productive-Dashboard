const motivationQuote = document.querySelector("#motivation-quote");
const quoteAuthor = document.querySelector("#quote-author");
const newQuoteBtn = document.querySelector("#new-quote-btn");

const apiKey = "af1TEy5AMmGfRoxUCiH10KGt4qib3HMQ0jN0lhQZ";
const url =
  "https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom";

async function getQuote() {
  try {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    let data = await response.json();
    let quote = data[0].quote;
    let author = data[0].author;

    motivationQuote.innerHTML = quote;
    quoteAuthor.innerHTML = author;
  } catch (error) {
    console.error(error);
  }
}
getQuote();

newQuoteBtn.addEventListener("click", () => {
  getQuote();
});
