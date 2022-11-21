"use strict";

const sqlite = require('sqlite3');
const db = new sqlite.Database("/sql/wearther_database.sqlite");


//get a set of clothes from the database
function getClothes(username, garmentType) {
    let query;
    let qResult;
    let toReturn = [];
    if (username === null) {
        query = `SELECT * FROM ReferenceTable WHERE garmentType = ${garmentType}`;
        qResult = db.all(query);
        for (let r of qResult) {
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
        query = `WITH tempTable AS (SELECT * FROM Clothes WHERE username = ${username}) SELECT * FROM tempTable NATURAL JOIN ReferenceTable WHERE garmentType = ${garmentType}`;
        qResult = db.all(query);
        for (let r of qResult) {
            let result = {
                garmentType: r.garmentType,
                specificType: r.specificType,
                color: r.color,
                description: r.color,
                quantity: r.quantity,
                waterproof: r.waterproof,
                clipArt: r.clipArt,
                picture: r.picture
            }; //make an object with the required fields
            toReturn.push(result); //put it on the return list
        }
    }

    //give back the list of possible clothes
    return toReturn;
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
    //TODO: does a username exist?
    let query = `INSERT INTO "Users" VALUES(${username}, ${hashedPassword})`;
    db.run(query);
}


//get a user's password from the database
function checkUserPassword(username, hashedPassword) {
    let query = `SELECT password FROM Users WHERE Username = ${username}`;
    let r = db.get(query);

    //return true or false
    if (hashedPassword === r.password) {
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
modules.export.sql = sql;
modules.export.db = db;
modules.export.getClothes = getClothes();
modules.export.addReference = addReference();
modules.export.addUser = addUser();
modules.export.checkUserPassword = checkUserPassword();