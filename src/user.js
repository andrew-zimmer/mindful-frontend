class User {

    static all = []
    constructor({username, email, authentication_token, id}){
        this.username = username
        this.email = email
        this.token = authentication_token
        this.id = id

        User.all.push(this)
    }
}
