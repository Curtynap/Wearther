
let JSONresponse
let APIkey = "09b5e81e048c36a6df4cad6cdbbef7ed"
let URL = "https://api.openweathermap.org/data/2.5/weather?lat="
let inputURL = "http://api.openweathermap.org/geo/1.0/zip?zip="
let US = 840
let lat
let long

//These will be saved after getForecast is called, then they can be utilized elsewhere
let temperature
let city



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

async function getForecast(lat, long){

    //Using lat and long build a string to make an API call
    
    lat = lat + "&lon="
    long = long + "&appid="
    //fetch from URL to get weather data
    let response = await fetch(URL + lat + long + APIkey)
    JSONresponse = await response.json()
    city = JSONresponse.name
    //convert Kelvin to farenheit
    temperature = (JSONresponse.main.temp - 273.15) * 9/5 + 32 
    console.log("the temperature in " + city + " is " + temperature + " degrees")

}











