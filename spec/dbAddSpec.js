let db = require("../public/js/database.js");
//run these by typing "npm test" from the top level directory


//this is a suite of unit tests
describe("adding things to the database", () => {

    beforeEach(() => {
        //this is run before each unit test
        //fake database setup
    });

    //this is a single unit test
    it("adds two numbers", () => {
        expect(db.add(3, 2)).toBe(5);
    });

});
