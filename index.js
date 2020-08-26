const userAdapter = new UserAdapter()
const sessionAdapter = new SessionAdapter()
const moodAdapter = new MoodsAdapter()
const mainDiv = document.getElementById('main')
const dropDown = document.getElementById('navDropDown')
let mood = ''
const emotions = {
    calm: {
        pic: '<i class="far fa-smile"></i>',
        resource: '',
        backgroundColor: '#33A1FF'
},
    happy: {
        pic: '<i class="far fa-smile-beam"></i>',
        resource: '',
        backgroundColor: '#FBFB5A'
    },
    silly: {
        pic: '<i class="far fa-grin-tongue-wink"></i>',
        resource: '',
        backgroundColor: '#F65AFB'
    },
    relaxed: {
        pic: '<i class="far fa-grin"></i>',
        resource: '',
        backgroundColor: '#A45AFB'
    },

    annoyed: {
        pic: '<i class="far fa-meh-rolling-eyes"></i>',
        resource: 'https://www.psychologytoday.com/us/blog/the-squeaky-wheel/201510/7-quick-ways-stop-being-irritable',
        backgroundColor: '#AFF124'
    },
    sad: {
        pic: '<i class="far fa-sad-tear"></i>',
        resource: 'http://www.oprah.com/spirit/why-youre-sad-how-to-stop-being-sad-deepak-chopra',
        backgroundColor: '#2489F1'
    },
    shy: {
        pic: '<i class="far fa-meh-blank"></i>',
        resource: 'https://psychcentral.com/blog/treating-social-anxiety-disorder-with-mindfulness/',
        backgroundColor: '#2450F1'
    },
    surprised: {
        pic: '<i class="far fa-surprise"></i>',
        resource: 'https://www.makemebetter.net/how-to-handle-unexpected-situations-gracefully/',
        backgroundColor: '#24DEF1'
    },
    hungry: {
        pic: '<i class="far fa-grimace"></i>',
        resource: 'https://www.healthline.com/health-news/hangry-not-because-youre-extremely-hungry#1',
        backgroundColor: '#82E6F1'
    },
    angry: {
        pic: '<i class="far fa-angry"></i>',
        resource: 'https://www.mindful.org/mindfulness-of-anger/',
        backgroundColor: '#DE1111'
    },
    confused: {
        pic: '<i class="far fa-flushed"></i>',
        resource: 'https://www.huffpost.com/entry/4-ways-to-find-direction-when-you-are-feeling-confused_b_5798e0dde4b0e339c2400320',
        backgroundColor: '#60E910'
    },
    sleepy: {
        pic: '<i class="far fa-tired"></i>',
        resource: 'https://www.psychologytoday.com/us/blog/sleep-newzzz/201811/4-ways-sleep-deprivation-can-harm-your-emotional-health',
        backgroundColor: '#9C10E9'
    },
    sick: {
        pic: '<i class="far fa-frown-open"></i>',
        resource: 'https://www.psychologytoday.com/us/blog/urban-survival/201502/the-surprising-psychology-the-common-cold',
        backgroundColor: '#8FE910'
    },
    hurt: {
        pic: '<i class="far fa-dizzy"></i>',
        resource: 'https://medlineplus.gov/ency/patientinstructions/000417.htm',
        backgroundColor: '#20AFB6'
    },
    hot: {
        pic: '<i class="far fa-grin-tears"></i>',
        resource: 'https://www.psychologytoday.com/us/blog/headshrinkers-guide-the-galaxy/201212/when-your-feelings-are-too-hot-handle',
        backgroundColor: '#E73E17'
    },
    nervous: {
        pic: '<i class="far fa-grin-beam-sweat"></i>',
        resource: 'https://www.webmd.com/mental-health/features/ways-to-reduce-anxiety',
        backgroundColor: '#B50A0A'
    },
}

const signUpBtn = document.getElementById('signUp')
const logInBtn = document.getElementById('login')
const navBar = document.getElementById('navbarSupportedContent')

signUpBtn.addEventListener('click', () => {
    User.renderSignUpForm()

    dropDown.classList.add('collapsed')
    navBar.classList.remove('show')
})

logInBtn.addEventListener('click', () => {
    Session.renderLoginForm()
    dropDown.classList.add('collapsed')
    navBar.classList.remove('show')
})

document.addEventListener('DOMContentLoaded', () => {


})
