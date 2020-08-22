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
        const mainDiv = document.getElementById('main')

        mainDiv.innerHTML = (
            `<h2 class='text-center'> Mood form </h2>
            <form class='text-center' id='mood'>
                <div id='emote'> <i class="far fa-laugh-beam"></i> </div>
                <input type="range" class="form-control-range" id="formControlRange" min='0' max='4' step='1' value='0'>

                <input id='mood-comment' type='textarea' placeholder='Comment'>

                <button id='submit-mood' class='w-75 mt-2 rounded'>Submit</button>
            </form>`
        )
        //add  activites
        const moodSubmit = document.getElementById('submit-mood')
        moodSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            moodsAdapter.sendNewMoodFetch()
        })
        const range = document.getElementById('formControlRange')
        range.onchange = function(e){
            const emoteDiv = document.getElementById('emote')
            console.log('clicky clack')
            if (e.target.value === '0'){
                emoteDiv.innerHTML = `<i class="far fa-laugh-beam"></i>`
            }else if (e.target.value === '1'){
                emoteDiv.innerHTML = `<i class="far fa-smile"></i>`
            }else if (e.target.value === '2'){
                emoteDiv.innerHTML = `<i class="far fa-meh"></i>`
            }else if (e.target.value === '3'){
                emoteDiv.innerHTML = `<i class="far fa-frown"></i>`
            }else if (e.target.value === '4'){
                emoteDiv.innerHTML = `<i class="far fa-sad-tear"></i>`
            }







        }
    }


}
