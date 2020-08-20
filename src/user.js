class User {

    static all = []
    constructor({username, email, authentication_token, id}){
        this.username = username
        this.email = email
        this.token = authentication_token
        this.id = id

        User.all.push(this)
    }

    static renderSignUpForm(){
        mainDiv.innerHTML = (
            `  <h2 class="text-center">Create User</h2>
               <form class='text-center' id='createUser'>
                   <label for='username'>Username</label><br>
                   <input type='textfield' id='username' placeholder='Username'><br>

                   <label for='email'>Email</label><br>
                   <input type='email' id='email' placeholder='Email'><br>

                   <label for='password'>Password</label><br>
                   <input type='password' id='password' placeholder='Password'><br>

                   <label for="passwordConfirmation">Password Confirmation</label><br>
                   <input type='password' id='passwordConfirmation' placeholder='Password Confirmation'><br>

                   <button id='submitUser' class='w-75 mt-2 rounded'>Submit</button>
               </form>`
           )
           const createUser = document.getElementById('submitUser')
           createUser.addEventListener('click', (e)=>{
               e.preventDefault()
               userAdapter.sendNewUserRequest()
           })
    }

    get renderLoginFormForUser(){
        Session.renderLoginForm()
        const email = document.getElementById('email-login')
        email.value = this.email
    }
}
