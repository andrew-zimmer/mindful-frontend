const userAdapter = new UserAdapter()
const sessionAdapter = new SessionAdapter()
const moodAdapter = new MoodsAdapter()
const mainDiv = document.getElementById('main')
let mood = ''
const emotions = {
    calm: '<i class="far fa-smile"></i>',
    happy: '<i class="far fa-smile-beam"></i>',
    silly: '<i class="far fa-grin-tongue-wink"></i>',
    relaxed: '<i class="far fa-grin"></i>',
    nervous: '<i class="far fa-grin-beam-sweat"></i>',
    annoyed: '<i class="far fa-meh-rolling-eyes"></i>',
    sad: '<i class="far fa-sad-tear"></i>',
    shy: '<i class="far fa-meh-blank"></i>',
    surprised: '<i class="far fa-surprise"></i>',
    hungry: '<i class="far fa-grimace"></i>',
    angry: '<i class="far fa-angry"></i>',
    confused: '<i class="far fa-flushed"></i>',
    sleepy: '<i class="far fa-tired"></i>',
    sick: '<i class="far fa-frown-open"></i>',
    hurt: '<i class="far fa-dizzy"></i>',
    hot: '<i class="far fa-grin-tears"></i>'
}


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
