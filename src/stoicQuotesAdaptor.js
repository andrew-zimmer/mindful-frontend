class StoicQuotes {
    constructor(){
        this.baseURL = 'https://randomstoicquotesapi.herokuapp.com/api/v1/quotes'
    }

    fetchRandomQuote(){

        fetch(this.baseURL)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            let quote = document.getElementById('randomQuote')

            quote.innerText = json.data[Math.floor(Math.random() * json.data.length-1)].attributes.text
            //print one random quote
        })
        .catch(error => console.log(error))
    }
}
