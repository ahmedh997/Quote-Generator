
var quoteNo1 = `  <div class="quotes mt-5 text-focus-in">
                    <h5>“Be yourself; everyone else is already taken.”</h5>
                    <p>― Oscar Wilde ―</p>
                </div>`;
var quoteNo2 = `  <div class="quotes mt-5 text-focus-in">
                    <h5>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”</h5>
                    <p>― Marilyn Monroe ―</p>
                </div>`;
var quoteNo3 = `  <div class="quotes mt-5 text-focus-in">
                    <h5>“Don't just teach your children how to be successful, teach them how to respond when they are not successful, teach them how to handle failures and learn from their mistakes.”</h5>
                    <p>― Prof. Richard Feynman ―</p>
                </div>`;
var quoteNo4 = `  <div class="quotes mt-5 text-focus-in">
                    <h5>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
</h5>
                    <p>― Albert Einstein ―</p>
                </div>`;
var quoteNo5 = `  <div class="quotes mt-5 text-focus-in">
                    <h5>“A room without books is like a body without a soul.”</h5>
                    <p>― Marcus Tullius Cicero ―</p>
                </div>`;
var quoteNo6 = `  <div class="quotes mt-5 text-focus-in">
                    <h5>“You only live once, but if you do it right, once is enough.”</h5>
                    <p>― Mae West ―</p>
                </div>`;

var arrQuotes = [quoteNo1, quoteNo2, quoteNo3, quoteNo4, quoteNo5, quoteNo6];

var addQuotes = document.getElementById('quoteDiv');
var addQuotesBtn = document.getElementById('addQuoteBtn');
var prevQuote = -1;

function displayQuote() {
    var randomQuote;
    do { randomQuote = Math.floor(Math.random() * arrQuotes.length); }  // I used 'do..while' not 'for' loop bc I want the code to run but just check the case once before displaying or needing to create new function to display and make 'return' of this one//
    while (randomQuote === prevQuote);
    addQuotes.innerHTML = arrQuotes[randomQuote];
    prevQuote = randomQuote;
}


addQuotesBtn.addEventListener('click', displayQuote);