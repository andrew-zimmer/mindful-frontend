const userAdapter = new UserAdapter()
const createUser = document.getElementById('submitUser')


function createNewUser(e){
    e.preventDefault()
    console.log(e.target)
    userAdapter.sendNewUserRequest()
}

function clearNewUserForm(){
    const newUserInputs = document.querySelectorAll('#createUser input')
    let array = [...newUserInputs]
    array.map(x => x.value = '')
}

function renderLoginForm(){
    const containers = [...document.getElementsByClassName('container')]
    const loginForm = document.getElementById('loginForm')

    containers.map(x => x.style.display = 'none')
    loginForm.style.display = 'block'
}

document.addEventListener('DOMContentLoaded', () => {
    createUser.addEventListener('click', createNewUser)

})
