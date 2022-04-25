const UserService=require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    
    test("1. Create a new user using the UserService", ()=>{
        const user=UserService.create(1,"angelicaroy", "Angelica")
        expect(user.username).toBe(1,"AngelicaRoy","Angelica")
        expect(user.name).toBe("angelicaroy")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})