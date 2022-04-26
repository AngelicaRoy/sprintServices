class User{

    constructor(id, username, name, bio){
        this.id=id
        this.username=username
        this.name=name
        this.bio=bio
        this.dateCreated=new Date();
        this.lastUpdated=new Date();
    }

    

    getInfo(){
        return "Hey! my name is Angelica and my username is AAER"
    }
}
module.exports=User