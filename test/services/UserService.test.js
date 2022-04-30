const UserService=require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {

        const user=UserService.create(1,"angelicaroy", "Angelica")
        expect(user.username).toBe("angelicaroy")
        expect(user.name).toBe("Angelica")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    
    test("2. Get all user data in list", () =>{
        const user=UserService.create(1, "angelicaroy", "Angelica")
        const userInfoInList=UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
      
    });  

    test("3. Update username", () => {
        const user=UserService.create(1, "angelicaroy", "Angelica")
        UserService.updateUserUsername(user, "angelog")
        expect(user.username).toBe("angelog")
    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 =UserService.create(1, "angelicaroy1", "Angelica")
        const user2 =UserService.create(1, "angelicaroy2", "Angelica")
        const user3 =UserService.create(1, "angelicaroy3", "Angelica")
        const lista=[user1, user2, user3];

        const usernames=UserService.getAllUsernames(lista)
        expect(usernames).toContain(user1.getUsername)
        expect(usernames).toContain(user2.getUsername)
        expect(usernames).toContain(user3.getUsername)
    });
})    
