let database = require("../public/js/database.js");
//run these by typing "npm test" from the top level directory


//this is a suite of unit tests
describe("adding things to the database", () => {

    beforeEach(() => {
        //this is run before each unit test
        
        //for the "adding things to database" test, we want our databases to be empty

        //empty the users
        let query = "DELETE FROM Users WHERE Username = ?";
        database.db.prepare(query).run('thisIsAnotherUser');
        //database.addUser('thisIsOneUser', 'hashedPasswordGoesHere')
    
    });

    //this is a single unit test
    it("1. adds two numbers", () => {
        expect(database.add(3, 2)).toBe(5);
    });
 
    
    it("2. adds a user to the database", () => {
        expect(database.addUser('thisIsAnotherUser', 'hashedPasswordGoesHere')).toBe(true);
        expect(database.userExists('thisIsAnotherUser')).toBe(true);
    })


    it ("3. checks if the password matches the user", () => {
        expect(database.checkUserPassword('thisIsOneUser', 'hashedPasswordGoesHere')).toBe(true);
        expect(database.checkUserPassword('thisIsOneUser', 'thisPasswordIsIncorrect')).toBe(false);
        //expect(database.checkUserPassword('thisUserDoesNotExist', 'password')).toBe(false);
    }) 
    

});
