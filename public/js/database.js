/*
 * All of the database interface code lives here
*/

"use strict";

//require the package
const sqlite = require('better-sqlite3');

//setup the database variable
const path = require('path');
const dbPath = path.resolve(__dirname, './sql/wearther_database.db')
const db = new sqlite(dbPath);
db.pragma('journal_mode = WAL');


function add(a, b) {
    return a + b;
}


//get a set of clothes from the database
function getClothes(username, garmentType) {
    let query;
    let toReturn = [];
    if (username === null) {
        query = `SELECT * FROM ReferenceTable WHERE garmentType = ?`;
        let rows = db.prepare(query).all(garmentType);
        for (r in rows) {
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
        }
    }


    else {
        query = `WITH tempTable AS (SELECT * FROM Clothes WHERE username = ?) SELECT * FROM tempTable NATURAL JOIN ReferenceTable WHERE garmentType = ?`;
        let rows = db.prepare(query).all(username, garmentType);
        for (r in rows) {
            let result = {
                garmentType: r.garmentType,
                specificType: r.specificType,
                color: r.color,
                description: r.description,
                quantity: r.quantity,
                waterproof: r.water,
                clipArt: r.clipArt,
                picture: null
            }; //make an object with the required fields
            toReturn.push(result); //put it on the return list
        }
        return toReturn;
    }
}


//add clothing type to the reference table
function addReference(garmentType, specificType, temperature, clipArt) {
    let query = `INSERT INTO "ReferenceTable" VALUES(?, ?, ?, ?)`;
    db.prepare(query).run(garmentType, specificType, temperature, clipArt);
}


//THIS NEEDS TO BE EXPERIMENTED WITH
//I need to find the best way to get a single piece of clothing without using the ID# because we don't have clear access to that
//But right now it's just kinda gross unfortunately
function addClothing(username, garmentType, specificType, color, description, quantity, waterproof) {
    //dumb ideas for improving the function go here:
    //add another table with keywords instead of a description field. This may just kick the can down the road though

    let query = `INSERT INTO "Clothes" VALUES(?, ?, ?, ?, ?, ?, ?)`;
    db.prepare(query).run(username, garmentType, specificType, color, description, quantity, waterproof);
}



////////// LOGIN DATABASE STUFF //////////

//add a user to the database
//this will not work if the user already exists
function addUser(username, hashedPassword) {
    if (!userExists(username)) {
        let query = `INSERT INTO "Users" VALUES(?, ?)`;
        db.prepare(query).run(username, hashedPassword);
        return true;
    }
    else {
        return false;
    }
}


//get a user's password from the database
function checkUserPassword(username, hashedPassword) {
    if (!userExists) {
        return false;
    }

    let query = `SELECT password FROM Users WHERE Username = ?`;
    let r = db.prepare(query).get(username);
    //return true or false
    if (hashedPassword === r.password) {
        return true;
    }
    else {
        return false;
    }
}

function userExists(username) {
    let query = 'SELECT * FROM Users WHERE username = ?';
    let result = db.prepare(query).get(username);
    if (result === undefined) {
        return false;
    }
    else {
        return true;
    }
}

function removeUser(username) {
    if (userExists) {
        let query = `DELETE * FROM Users WHERE Username = ?`;
        db.prepare(query).run(username);
        return true;
    }
    else {
        return false;
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
module.exports.removeUser = removeUser;
module.exports.userExists = userExists;


module.exports.add = add;