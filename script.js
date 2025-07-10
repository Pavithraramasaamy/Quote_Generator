const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  }
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet');

newQuoteBtn.addEventListener('click', () => {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];
  
  // Simple fade-out and in effect
  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;
  
  setTimeout(() => {
    quoteText.innerText = quote.text;
    authorText.innerText = `- ${quote.author}`;
    quoteText.style.opacity = 1;
    authorText.style.opacity = 1;

    // Update tweet link
    tweetBtn.href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`;
  }, 300);
});
