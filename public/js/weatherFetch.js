
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
}