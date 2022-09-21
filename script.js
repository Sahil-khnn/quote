const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

const randomQuote = () => {
  quoteBtn.classList.add("loading");
  quoteBtn.innerHTML = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
      quoteBtn.innerHTML = "New Quote";
      quoteBtn.classList.remove("loading");
    });
};

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerHTML} by ${authorName.innerHTML}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerHTML);
});

quoteBtn.addEventListener("click", randomQuote);
