/*
 * All of the database interface code lives here
*/

"use strict";

//require the package
const sqlite = require('sqlite3');

//setup the database variable
const path = require('path');
const dbPath = path.resolve(__dirname, './sql/wearther_database.db')
const db = new sqlite.Database(dbPath);


function add(a, b) {
    return a + b;
}

//get a set of clothes from the database
function getClothes(username, garmentType) {
    let query;
    let toReturn = [];
    if (username === null) {
        query = `SELECT * FROM ReferenceTable WHERE garmentType = ${garmentType}`;
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row)  => {
                let result = {
                    garmentType: r.garmentType,
                    specificType: r.specificType,
                    color: null,
                    description: null,
                    quantity: null,
                    waterproof: null,
                    clipArt: null,
                    picture: null
                }; //make an object with the required fields
                toReturn.push(result); //put it on the return list
            });
        });
        console.log(toReturn);
        return toReturn;
    }


    else {
        query = `WITH tempTable AS (SELECT * FROM Clothes WHERE username = ${username}) SELECT * FROM tempTable NATURAL JOIN ReferenceTable WHERE garmentType = ${garmentType}`;
        db.all(query, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                let result = {
                    garmentType: r.garmentType,
                    specificType: r.specificType,
                    color: null,
                    description: null,
                    quantity: null,
                    waterproof: null,
                    clipArt: null,
                    picture: null
                }; //make an object with the required fields
                toReturn.push(result); //put it on the return list
            });
        });
        console.log(toReturn);
        return toReturn;
    }
}


//add clothing type to the reference table
function addReference(garmentType, specificType, temperature, clipArt) {
    let query = `INSERT INTO "ReferenceTable" VALUES(${garmentType}, ${specificType}, ${temperature}, ${clipArt});`;
    db.run(query);
}


//THIS NEEDS TO BE EXPERIMENTED WITH
//I need to find the best way to get a single piece of clothing without using the ID# because we don't have clear access to that
//But right now it's just kinda gross unfortunately
function addClothing(username, garmentType, specificType, color, description, quantity, waterproof) {
    //dumb ideas for improving the function go here:
    //add another table with keywords instead of a description field. This may just kick the can down the road though

    let query = `INSERT INTO "Clothes" VALUES(${username}, ${garmentType}, ${specificType}, ${color}, ${description}, ${quantity}, ${waterproof});`;
    db.run(query);
}


////////// LOGIN DATABASE STUFF //////////

//add a user to the database
//this will not work if the user already exists
function addUser(username, hashedPassword) {
    if (!userExists(username)) {
        let query = `INSERT INTO "Users" VALUES(${username}, ${hashedPassword})`;
        db.run(query);
        return true;
    }
    else {
        return false;
    }
}


//get a user's password from the database
function checkUserPassword(username, hashedPassword) {
    let query = `SELECT password FROM Users WHERE Username = ${username}`;
    let r = db.get(query);
    if (!userExists) {
        return false;
    }

    //return true or false
    if (hashedPassword === r.password) {
        return true;
    }
    else {
        return false;
    }
}

function userExists(username) {
    let query = `SELECT * FROM Users WHERE Username = ${username}`;
    let r = db.get(query);
    if (r === null) {
        return false;
    } 
    else {
        return true;
    }
}

function changePassword(username) {
    //
}



///////// CODE USED FOR EXPORTING /////////
//module.exports.sqlite = sqlite;
module.exports.db = db;
module.exports.getClothes = getClothes;
module.exports.addReference = addReference;
module.exports.addUser = addUser;
module.exports.checkUserPassword = checkUserPassword;
module.exports.changePassword = changePassword;
module.exports.addClothing = addClothing;


module.exports.add = add;