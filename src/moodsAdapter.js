class MoodsAdapter {
    constructor(){
        this.baseURL = 'http://localhost:3000/v1/moods'
    }

    sendNewMoodFetch(){
        const mood = document.getElementById('mood')
        const comment = document.getElementById('mood-comment')
        const id = User.all.first.id
        const token = Session.all.first.token
        const email = Session.all.first.email

        let sessionObj = {
            user_token: token,
            user_email: email,
            user: {
                mood,
                comment,
                user_id: id
            }
        }
    }
}
