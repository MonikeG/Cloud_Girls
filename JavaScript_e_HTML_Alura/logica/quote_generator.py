
# Create a simple web page that displays a random quote every time the user clicks a button. 
# The quotes should be stored in an array in your JavaScript code

from flask import Flask, render_template, request
import random

app = Flask(__name__)

happy_quotes = ["The most important thing is to enjoy your life - to be happy - it's all that matters. - Audrey Hepburn",
    "Happiness is not something ready made. It comes from your own actions.- Dalai Lama",
    "The best way to cheer yourself up is to try to cheer somebody else up. - Mark Twain",
    "Happiness is a warm puppy. - Charles M. Schulz",
    "It's a helluva start, being able to recognize what makes you happy. - Lucille Ball"]

motivate_quotes = ["Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"]

inspire_quotes = ["You miss 100% of the shots you don't take. - Wayne Gretzky",
    "You can't build a reputation on what you are going to do. - Henry Ford",
    "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg"]


mood_quotes = {"happy": happy_quotes,
    "motivated": motivate_quotes,
    "inspired": inspire_quotes}

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/quote', methods=['POST'])
def generate_quote():

    mood = input("Enter your mood: ").strip().lower()

    if mood not in mood_quotes:
        print("Sorry, we don't have quotes for that mood.")
        return
    
    quotes = mood_quotes[mood]
    quote = random.choice(quotes)

    return render_template('quote.html', quote=quote)


if __name__ == '__main__':
    app.run(debug=True)


