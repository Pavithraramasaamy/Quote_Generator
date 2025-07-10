# Quote_Generator
## Date:10-07-2025.
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>InspireMe - Quote Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>InspireMe</h1>
    <div id="quote-box">
      <p id="quote">Click below to get inspired.</p>
      <p id="author">- Unknown</p>
      <button id="new-quote">Get Quote</button>
      <a id="tweet" href="#" target="_blank">Tweet this</a>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>


```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #111;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.container {
  text-align: center;
}
h1 {
  color: #f0c040;
  margin-bottom: 30px;
}
#quote-box {
  background-color: #f0c040;
  color: #000;
  padding: 25px 30px;
  border-radius: 15px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  transition: all 0.3s ease-in-out;
}

#quote {
  font-size: 18px;
  font-style: italic;
  margin-bottom: 10px;
  transition: opacity 0.3s ease;
}

#author {
  font-weight: bold;
  margin-bottom: 20px;
}
button, a#tweet {
  background-color: #111;
  color: #f0c040;
  border: 2px solid #f0c040;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

button:hover, a#tweet:hover {
  background-color: #f0c040;
  color: #111;
}

```

## JS:
```
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
  quoteText.style.opacity = 0;
  authorText.style.opacity = 0;
  
  setTimeout(() => {
    quoteText.innerText = quote.text;
    authorText.innerText = `- ${quote.author}`;
    quoteText.style.opacity = 1;
    authorText.style.opacity = 1;
    tweetBtn.href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quote.text)}" - ${encodeURIComponent(quote.author)}`;
  }, 300);
});


```
## Output:

<img width="1918" height="1012" alt="Screenshot 2025-07-10 182240" src="https://github.com/user-attachments/assets/5abd40b9-66cf-4f7b-b043-ba6bd8b98104" />


<img width="1919" height="998" alt="Screenshot 2025-07-10 182258" src="https://github.com/user-attachments/assets/4168458b-78e2-4efa-bd4c-ca77225a5989" />



## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
