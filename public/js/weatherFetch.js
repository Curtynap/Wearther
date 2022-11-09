const weekdays = new Map()
let JSONresponse
let APIkey = "234008c0466552aacf5fe3b8a24b6c15"
//let URL = "https://api.openweathermap.org/data/2.5/forecast?lat="
let URL = "https://api.openweathermap.org/data/3.0/onecall?lat="
let inputURL = "http://api.openweathermap.org/geo/1.0/zip?zip="
let US = 840
let lat
let long

//Prompts the users location using their location services built in to the computer
function getLocation(){

    //Using the window property navigator, get usres location
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
    });

}
//allows user to input a zipCode and it will return longitude and latitude of that city, these will be sored in lat and long, allowing getForcast(lat,long) to be called and work

async function inputLocation(zipCode){
    let response = await fetch(inputURL + zipCode + "&appid=" + APIkey)
    JSONresponse = await response.json()
    lat = JSONresponse.lat
    long = JSONresponse.lon
}
async function getForecast(){
    //Using lat and long build a string to make an API call
    lat = lat + "&lon="
    //fetch from URL to get weather data
    console.log(URL + lat + long + "&units=imperial" +  "&appid=" + APIkey)
    let response = await fetch(URL + lat + long + "&units=imperial" +  "&appid=" + APIkey)
    JSONresponse = await response.json()
    console.log(JSONresponse)
    DateMap()
}

function DateMap(){

    var dt = new Date(JSONresponse.daily[0].dt);
    console.log("getDay() : " + dt.getDay());
    currDay = dt.getDay()

    if(currDay = 1){
        weekdays.set("Monday", JSONresponse.daily[0])
        weekdays.set("Tuesday", JSONresponse.daily[1])
        weekdays.set("Wednesday", JSONresponse.daily[2])
        weekdays.set("Thursday", JSONresponse.daily[3])
        weekdays.set("Friday", JSONresponse.daily[4])
        weekdays.set("Saturday", JSONresponse.daily[5])
        weekdays.set("Sunday", JSONresponse.daily[6])
    }

    if(currDay = 2){

        weekdays.set("Tuesday", JSONresponse.daily[0])
        weekdays.set("Wednesday", JSONresponse.daily[1])
        weekdays.set("Thursday", JSONresponse.daily[2])
        weekdays.set("Friday", JSONresponse.daily[3])
        weekdays.set("Saturday", JSONresponse.daily[4])
        weekdays.set("Sunday", JSONresponse.daily[5])
        weekdays.set("Monday", JSONresponse.daily[6])
    }

    if(currDay = 3){

        weekdays.set("Wednesday", JSONresponse.daily[0])
        weekdays.set("Thursday", JSONresponse.daily[1])
        weekdays.set("Friday", JSONresponse.daily[2])
        weekdays.set("Saturday", JSONresponse.daily[3])
        weekdays.set("Sunday", JSONresponse.daily[4])
        weekdays.set("Monday", JSONresponse.daily[5])
        weekdays.set("Tuesday", JSONresponse.daily[6])
    }
    if(currDay = 4){

        weekdays.set("Thursday", JSONresponse.daily[0])
        weekdays.set("Friday", JSONresponse.daily[1])
        weekdays.set("Saturday", JSONresponse.daily[2])
        weekdays.set("Sunday", JSONresponse.daily[3])
        weekdays.set("Monday", JSONresponse.daily[4])
        weekdays.set("Tuesday", JSONresponse.daily[5])
        weekdays.set("Wednesday", JSONresponse.daily[6])
    }
    if(currDay = 4){

        weekdays.set("Friday", JSONresponse.daily[0])
        weekdays.set("Saturday", JSONresponse.daily[1])
        weekdays.set("Sunday", JSONresponse.daily[2])
        weekdays.set("Monday", JSONresponse.daily[3])
        weekdays.set("Tuesday", JSONresponse.daily[4])
        weekdays.set("Wednesday", JSONresponse.daily[5])
        weekdays.set("Thursday", JSONresponse.daily[6])
    }
    if(currDay = 6){

        weekdays.set("Saturday", JSONresponse.daily[0])
        weekdays.set("Sunday", JSONresponse.daily[1])
        weekdays.set("Monday", JSONresponse.daily[2])
        weekdays.set("Tuesday", JSONresponse.daily[3])
        weekdays.set("Wednesday", JSONresponse.daily[4])
        weekdays.set("Thursday", JSONresponse.daily[5])
        weekdays.set("Friday", JSONresponse.daily[6])
    }


    function setTheme(){
        // temp placeholders
        // if weather is sunny
    }

    function snowTheme(){
        // rgb(203, 156, 242)
        // rgb(158, 123, 155)
        // rgb(97, 98, 131)
        // rgb(143, 149, 211)

    }

    function clearTheme(){
        // rgb(25, 56, 31)
        // rgb(145, 203, 62)
        // rgb(83, 165, 72)
        // rgb(76, 147, 76)

    }

    function cloudyTheme(){
        // rgb(204, 218, 209)
        // rgb(156, 174, 169)
        // rgb(120, 133, 133)
        // rgb(111, 104, 102)
    }

    function rainyTheme(){
        // rgb(0, 169, 165)
        // rgb(11, 83, 81)
        // rgb(9, 35, 39)
        // rgb(78, 128, 152)

    }

    function windyTheme(){
        // rgb(214, 204, 194)
        // rgb(245, 235, 224)
        // rgb(227, 213, 202)
        // rgb(213, 189, 175)

    }

    function hotTheme(){
        // rgb(114, 0, 38)
        // rgb(206, 66, 87)
        // rgb(255, 127, 81)
        // rgb(255, 155, 84)

    }

    function hailTheme(){
        // rgb(255, 73, 158)
        // rgb(210, 100, 182)
        // rgb(164, 128, 207)
        // rgb(119, 155, 231)

    }


}