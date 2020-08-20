class Session {
    static all = []
    constructor({token, id, email}){
        this.token = token
        this.id = id
        this.email = email

        Session.all.push(this)
    }

    static renderLoginForm(){
        const mainDiv = document.getElementById('main')

        mainDiv.innerHTML = (
            `<h2 class='text-center'>LogIn</h2>
            <form class='text-center' id='login'>
                <label for='email-login'>Email</label><br>
                <input type='email' id='email-login' placeholder='Email'><br>

                <label for='password-login'>Password</label><br>
                <input type='password' id='password-login' placeholder='Password'><br>

                <button id='submit-login' class='w-75 mt-2 rounded'>Login</button>
            </form>`
        )
        const loginSubmit = document.getElementById('submit-login')
        loginSubmit.addEventListener('click', (e) => {
            e.preventDefault()
            sessionAdapter.sendLoginRequest()
        })
    }
}
