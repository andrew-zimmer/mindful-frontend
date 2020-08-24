class Session {
    static all = []
    constructor({token, id, email}){
        this.token = token
        this.id = id
        this.email = email

        Session.all.push(this)
    }

    static logInForm(){
        return (`<h2 class='text-center'>LogIn</h2>
        <form class='text-center' id='login'>
            <label for='email-login'>Email</label><br>
            <input type='email' id='email-login' placeholder='Email'><br>

            <label for='password-login'>Password</label><br>
            <input type='password' id='password-login' placeholder='Password'><br>

            <button id='submit-login' class='w-75 mt-2 rounded'>Login</button>
        </form>`
    )}

    static renderLoginForm(){
        const mainDiv = document.getElementById('main')

        mainDiv.innerHTML = this.logInForm()

        const loginSubmit = document.getElementById('submit-login')
        loginSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            sessionAdapter.sendLoginRequest()
            const dropDown = document.getElementById('nav-dropDown')
            dropDown.innerHTML = ''

            let logOut = document.createElement('li')
            logOut.classList.add('nav-btn')
            logOut.innerHTML = `<p> Log Out </p>`


            let moodForm = document.createElement('li')
            moodForm.classList.add('nav-btn')
            moodForm.innerHTML = `<p> How Are You Feeling? </p>`
            dropDown.append(moodForm)
            dropDown.append(logOut)

            logOut.addEventListener('click', () => {
                sessionAdapter.sendLogOutRequest()
                location.reload()
            })

            moodForm.addEventListener('click', () => {
                Mood.moodForm()
            })
            //add link to emotion graph
        })
    }
}
