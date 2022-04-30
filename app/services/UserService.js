const User=require('./../../app/models/user')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    
    static getInfo(user){
        return [user.id, user.username, user.name, user="Sin bio"];
    }

    static updateUserUsername(user, newUser){
        return user.username=newUser;
    }
    
    static getAllUsernames(users){
        const names=[];
        users.forEach(present => names.push(present.getUsername));
        console.log(names);
        return names;
    }
}

module.exports=UserService;