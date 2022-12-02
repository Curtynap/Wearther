/*
 * All the code for the wardrobe, and the upload page 
 * including adding clothing to the user's profile, lives here
*/

"use strict";

///// DOM modification for the upload page. This will be a lot. /////

//This will register the handler and set up the function to chage the DOM
function registerTypeListener() {
    let dropDown = document.querySelector("#SelectGeneralType");
    dropDown.addEventListener("input", function (event) {
        let moreInputs = document.querySelector("#MoreInputs"); //set up the div to change
        moreInputs.innerHTML = ''; //clear it out first
        let newInputs = ''; //create a string to build off of

        //if it's a hat
        if (input === "hat") {
            newInputs += '<div id="SpecificType"> What type of hat is it? \n'; //bucket tags
            newInputs += '<select id="SelectSpecificType"> \n'; //new selector
            //The list of options:
            newInputs += '<option value="baseball">Baseball Cap</option>\n';
            newInputs += '<option value="beanie">Beanie</option>\n';
            newInputs += '<option value="cowboy">Cowboy Hat</option>\n';
            newInputs += '<option value="sun">Sun hat</option>\n';

            //close up the buckets
            newInputs += "</select>\n";
            newInputs += "</div>\n";
        }

        //if it's a shirt
        if (input === "shirt") {
            newInputs += '<div id="SpecificType"> What type of shirt is it? \n'; //bucket tags
            newInputs += '<select id="SelectSpecificType"> \n'; //new selector
            //The list of options:
            newInputs += '<option value="tee">T-shirt</option>\n';
            newInputs += '<option value="long">Long sleeved</option>\n';
            newInputs += '<option value="tank">Tank top</option>\n';
            newInputs += '<option value="crop">Crop top</option>\n';

            //close up the buckets
            newInputs += "</select>\n";
            newInputs += "</div>\n";
        }

        //if it's some type of legwear
        if (input === "legwear") {
            newInputs += '<div id="SpecificType"> What type of legwear is it? \n'; //bucket tags
            newInputs += '<select id="SelectSpecificType"> \n'; //new selector
            //The list of options:
            newInputs += '<option value="shorts">Shorts</option>\n';
            newInputs += '<option value="long">Long pants</option>\n';
            newInputs += '<option value="jeans">Jeans</option>\n';
            newInputs += '<option value="sweats">Sweats</option>\n';
            newInputs += '<option value="skirt">Skirt</option>\n';

            //close up the buckets
            newInputs += "</select>\n";
            newInputs += "</div>\n";
        }

        //if it's a pair of shoes
        if (input === "shoes") {
            newInputs += '<div id="SpecificType"> What type of shoe is it? \n'; //bucket tags
            newInputs += '<select id="SelectSpecificType"> \n'; //new selector
            //The list of options:
            newInputs += '<option value="sneakers">Sneakers</option>\n';
            newInputs += '<option value="heels">Heels</option>\n';
            newInputs += '<option value="sandals">Sandals</option>\n';
            newInputs += '<option value="flats">Flats</option>\n';
            newInputs += '<option value="boots">Boots</option>\n';

            //close up the buckets
            newInputs += "</select>\n";
            newInputs += "</div>\n";
        }

        //if it's a jacket
        if (input === "jacket") {
            newInputs += '<div id="SpecificType"> What type of jacket is it? \n'; //bucket tags
            newInputs += '<select id="SelectSpecificType"> \n'; //new selector
            //The list of options:
            newInputs += '<option value="sweater">Sweater</option>\n';
            newInputs += '<option value="rain">Rain coat</option>\n';
            newInputs += '<option value="windbreaker">Windbreaker</option>\n';
            newInputs += '<option value="hoodie">Hoodie</option>\n';

            //close up the buckets
            newInputs += "</select>\n";
            newInputs += "</div>\n";
        }


        //after the specific options have been added, now let's add the general questions

        //Waterproof?
        newInputs += '<div id="waterproofDiv">Is it waterproof?'
        newInputs += '<input type="checkbox" id="waterproof" name="waterproof"> \n';
        newInputs += "</div>\n"

        //Quantity
        newInputs += '<div id="quantityDiv">How many do you have?'
        newInputs += '<input type="number" min="1" id="quantity" name="quantity"> \n';
        newInputs += "</div>\n"

        //Description
        newInputs += '<div id="descriptionDiv">Description: \n'
        newInputs += '<textarea rows="4" cols="50" id="description" name="description"></textarea> \n';
        newInputs += "</div>\n"

        //Is there a picture?
        newInputs += '<div id="pictureDiv">Are you uploading a picture of it?'
        newInputs += '<input type="radio" name="PictureExists" value="Yes" id="yes">\n';
        newInputs += '<label for="yes">Yes</label>\n';
        newInputs += '<input type="radio" name="PictureExists" value="No" id="no">\n';
        newInputs += '<label for="no">No</label>\n';
        newInputs += "</div>\n"

        //Now that everything is set up, change the innerHTML to newInputs
        moreInputs.innerHTML = newInputs;
        registerPictureListener();
    })

}



function registerPictureListener() {
    let dropDown = document.querySelector("#PictureExists");
    dropDown.addEventListener("input", function (event) {
        let moreInputs = document.querySelector("#MoreInputs");
        //if "Yes", add a picture input field
        if (input === "yes") {
            //TODO add a picture input
        }

        //if "No", add a color picker field
        else {
            let colorDiv = document.createElement('div id="color"');
            let colorText = document.createTextNode("What color is it?");
            let colorPicker = document.createElement('input type="color"');
            colorDiv.appendChild(colorText);
            colorDiv.appendChild(colorPicker);
            moreInputs.appendChild(colorDiv);
        }
    })
}

