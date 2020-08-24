class Mood {

    static all = []

    constructor({id, mood, comment, created_at}){
        this.id = id
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
        btn.innerText = 'Submit'

        btn.addEventListener('click', () => {
            const moodSelect = document.getElementsByClassName('mood-button-active')
            mood = moodSelect[0].id
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
}
