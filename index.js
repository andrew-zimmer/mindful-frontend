const userAdapter = new UserAdapter()
const sessionAdapter = new SessionAdapter()
const mainDiv = document.getElementById('main')

const signUpBtn = document.getElementById('signUp')
const logInBtn = document.getElementById('login')


signUpBtn.addEventListener('click', () => {
    User.renderSignUpForm()
})

logInBtn.addEventListener('click', () => {
    Session.renderLoginForm()
})

document.addEventListener('DOMContentLoaded', () => {


})
