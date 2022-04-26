const User=require('./../models/user')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(){
        return "Hi my username is AAER and my name Angelica "
    }
    
}

module.exports=UserService