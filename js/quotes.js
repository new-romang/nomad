const quotes = [
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "Be the In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
    },
    {
        quote: "Simple is the best.",
        author: "언제나처럼,알지?",
    },
    {
        quote: "Done is better than perfect.",
        author: "게으른 완벽주의자가 되지 말자.",
    },
    {
        quote: "Practice makes perfect.",
        author: "항상 Done, 자주 Practices, 가끔 perfect",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        author: "African Proverb",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama",
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;

// Math.random() returns a number between 0 and 1.
// Math.random() * 10우리가 원하는 값은 0부터 9까지의 인덱스 숫자여서 10을 곱해준다.
// 소숫점을 가진 float. 이 문제는 방법이 3가지가 있다.
// round반올림 Ceil천장 floor(바닥)