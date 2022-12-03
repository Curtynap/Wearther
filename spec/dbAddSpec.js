let database = require("../public/js/database.js");
//run these by typing "npm test" from the top level directory


//this is a suite of unit tests
describe("adding things to the database", () => {

    beforeEach(() => {
        //this is run before each unit test
        
        //for the "adding things to database" test, we want our databases to be empty

        //empty the users
        let query = "DELETE FROM Users";
        database.db.prepare(query).run();

    
    });

    //this is a single unit test
    it("adds two numbers", () => {
        expect(database.add(3, 2)).toBe(5);
    });
 
    
    it("adds a user to the database", () => {
        expect(database.addUser('thisIsOneUser', 'hashedPasswordGoesHere')).toBe(true);
        expect(database.userExists('thisIsOneUser')).toBe(true);
    })
    

});
