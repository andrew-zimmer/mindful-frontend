class Session {
    static all = []
    constructor({authentication_token, id, email}){
        this.token = authentication_token
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

            let moodChart = document.createElement('li')
            moodChart.classList.add('nav-btn')
            moodChart.innerHTML = '<p>Mood Chart</p>'


            let moodForm = document.createElement('li')
            moodForm.classList.add('nav-btn')
            moodForm.innerHTML = `<p> How Are You Feeling? </p>`

            dropDown.append(moodForm)
            dropDown.append(moodChart)
            dropDown.append(logOut)

            moodChart.addEventListener('click', () => {
                Mood.renderMyChart()
                dropDown.classList.add('collapsed')
                navBar.classList.remove('show')
            })

            logOut.addEventListener('click', () => {
                sessionAdapter.sendLogOutRequest()
                location.reload()
            })

            moodForm.addEventListener('click', () => {
                Mood.renderMoodForm()
                dropDown.classList.add('collapsed')
                navBar.classList.remove('show')
            })
        })
    }
}
