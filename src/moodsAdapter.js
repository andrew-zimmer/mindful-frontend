class MoodsAdapter {
    constructor(){
        this.baseURL = 'http://localhost:3000/v1/moods'
    }

    sendNewMoodFetch(){

        const comment = document.getElementById('comment').value
        const id = Session.all[0].id
        const token = Session.all[0].token
        const email = Session.all[0].email

        let moodObj = {
            user_token: token,
            user_email: email,
            mood: {
                mood,
                comment,
                user_id: id
            }
        }

        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(moodObj)
        }

        fetch(this.baseURL, configObj)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            new Mood(json.data.mood)
            Mood.renderMyChart()
            //show resources based on mood submitted
        })
    }
}
