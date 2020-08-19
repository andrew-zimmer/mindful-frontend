class UserAdapter {
    constructor(){
        this.baseURL = "http://localhost:3000/v1/users"
    }



    sendNewUserRequest(){
        const username = document.getElementById('username').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const passwordConfirmation = document.getElementById('passwordConfirmation').value

        let userObj = {
            user: {
                username,
                email,
                password,
                password_confirmation: passwordConfirmation
            }
        }

        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
                'Accepts': 'application/json'
            },
            body: JSON.stringify(userObj)
        }

        fetch(this.baseURL, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            //when logged in create new user instance
            //clear fields
            //display login field
        })
        .catch(error => {
            console.log(error)
            //show error on screen
        })
    }



    //fill out sign up form
    //get data from sign up form and populate configObj()
    //send fetch request to create new user
    //allow user to sign in with new user info
    //loads users home page
}
