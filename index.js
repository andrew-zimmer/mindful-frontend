const userAdapter = new UserAdapter()
const createUser = document.getElementById('createUser')


function createNewUser(e){
    e.preventDefault()
    console.log(e.target)
    userAdapter.sendNewUserRequest()
}

document.addEventListener('DOMContentLoaded', () => {
    createUser.addEventListener('click', createNewUser)

})
