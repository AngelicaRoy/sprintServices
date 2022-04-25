const UserService=require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {

        const user=UserService.create(1,"angelicaroy", "Angelica")
        expect(user.username).toBe("AngelicaRoy")
        expect(user.name).toBe("angelicaroy")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in list", () =>{
        const user=UserService.create(1, "angelicaroy", "Angelica")
        const userInfoInList=UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("angelicaroy")
        expect(userInfoInList[2]).toBe("Angelica")
        expect(userInfoInList[3]).toBe("Sin bio")
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
        const usernames=UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("angelicaroy1")
        expect(usernames).toContain("angelicaroy2")
        expect(usernames).toContain("angelicaroy3")
    });
})    
