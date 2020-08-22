class SessionAdapter {
    constructor(){
        this.baseURL = 'http://localhost:3000/v1/sessions'
    }

    sendLoginRequest(){
        const email = document.getElementById('email-login').value
        const password = document.getElementById('password-login').value

        let sessionObj = {
            email,
            password
        }

        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(sessionObj)
        }

        fetch(this.baseURL, configObj)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            new Session(json.data.user)
            Mood.renderMoodForm()
            //add sign out button
            //add username to view
        })
        .catch(error => {
            console.log(error)
            //show error on screen
            //clear password field
        })
    }
}
