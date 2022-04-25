const User=require('app/services/UserService')

class UserService{
    static created(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
}

module.exports=UserService