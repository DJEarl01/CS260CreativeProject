let quote = {
    yeQuote: function() {
        fetch("https://api.kanye.rest")
            .then((response) => response.json())
            .then((data) => this.updateQuote(data));
    },
    updateQuote: function(data) {
        document.querySelector(".quotes").innerHTML = "\"" + data.quote + "\"";
    }
}

document.querySelector(".newQ").addEventListener("click", function() {
    quote.yeQuote();
})
