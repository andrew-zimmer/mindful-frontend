class Mood {

    static all = []

    constructor({user_id, mood, comment, created_at}){
        this.id = user_id
        this.mood = mood
        this.comment = comment
        this.createdAt = created_at

        Mood.all.push(this)
    }

    static renderMoodForm(){
        console.log('click')
        let mainDiv = document.getElementById('main')
        let btn = document.createElement('button')
        mainDiv.innerHTML = `<h2> How are you feeling? </h2>`
        btn.innerText = 'Next'

        btn.addEventListener('click', () => {
            const moodSelect = document.getElementsByClassName('mood-button-active')
            mood = moodSelect[0].id
            Mood.renderCommentField()
        })

        let emoteDiv = document.createElement('div')
        emoteDiv.classList.add('row', 'text-center')
        for (const mood in emotions){

            let divIt = document.createElement('div')
            divIt.classList.add('emote', 'col-3', 'border', 'border-solid', 'mood-button', 'text-center')

            divIt.id = mood

            divIt.innerHTML = emotions[mood] + `<br> ${mood}`
            emoteDiv.append(divIt)

            divIt.addEventListener('click', (e) => {
                let currentAct = document.getElementsByClassName('mood-button-active')
                if (!currentAct[0]){
                    divIt.classList.add('mood-button-active')
                }else {
                    currentAct[0].classList.remove('mood-button-active')
                    divIt.classList.add('mood-button-active')
                }
            })
        }
        mainDiv.append(emoteDiv)
        mainDiv.append(btn)
    }

    static renderCommentField(){
        let mainDiv = document.getElementById('main')
        let form = document.createElement('form')

        form.innerHTML = `<textarea id='comment' class='w-100'>
        Was is it something someone said or did that triggered me?
        Why is this important to me?
        Is there a pattern in how I emotionally react?
        What can I do right now to feel better?
        </textarea>
        <button id='submitComment'> Submit </button>`

        mainDiv.innerHTML = '<h2>Lets ask ourselves a few questions.</h2>'
        mainDiv.append(form)

        let btn = document.getElementById('submitComment')
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('clicky clack mf')
            moodAdapter.sendNewMoodFetch()
            Mood.renderMyChart()
            //submit form to api to create new mood
            // create new mood from mood class in js within the api call after a successful post request

        })
    }

    static renderMyChart(){
        let mainDiv = document.getElementById('main')
        let myChart = document.createElement('canvas')
        myChart.id = 'myChart'
        let moodChart = new Chart(myChart, {
            type: 'bar',
            data: {
                labels: Object.keys(emotions),
                datasets: [{
                    label: 'Mood Count',
                    data: Mood.moodCount()
                }]
            },
            options: {}
        })
        myChart.append(moodChart)
        mainDiv.innerHTML = ''
        mainDiv.append(myChart)
    }

    static moodCount(){
        let array = []
        Object.keys(emotions).forEach(e => {
                array.push(this.all.filter(x => x.mood === e).length)
        })

        return array
    }


}
