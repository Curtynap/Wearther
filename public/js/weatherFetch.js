

window.addEventListener('DOMContentLoaded', registerSearchHandler)
window.addEventListener('DOMContentLoaded', geoFindMe)
const weekdays = new Map()
let JSONresponse
let APIkey = "234008c0466552aacf5fe3b8a24b6c15"
//let URL = "https://api.openweathermap.org/data/2.5/forecast?lat="
let URL = "https://api.openweathermap.org/data/3.0/onecall?lat="
let geoURL = "http://api.openweathermap.org/geo/1.0/zip?zip="
let reverseGeoURL = "http://api.openweathermap.org/geo/1.0/reverse?lat="




function registerSearchHandler() {
    let button = document.querySelector("#searchButton");
    button.addEventListener("click", function (event) {
       let div = document.querySelector("#search")
      
      //clear div
       let input = document.querySelector("#searchBar")
       let zip = input.value
       input.value = ""
       inputLocation(zip)
       
    })
}




function geoFindMe() {

    let city = document.querySelector("#city")
    
   async function success(position) {
      const lat  = position.coords.latitude;
      const long = position.coords.longitude;

      let response = await fetch(reverseGeoURL + lat + "&lon=" + long + "&appid=" + APIkey)
      JSONresponse = await response.json()
      city.textContent = JSONresponse[0].name;
      getForecast(lat,long)
    }
  
    function error() {
      city.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      city.textContent = 'Geolocation is not supported by your browser, enter a zip code';
    } else {
      city.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }

  /*
//Prompts the users location using their location services built in to the computer
function getLocation(){
    if ('geolocation' in navigator) {
       
        //Using the window property navigator, get users location
        navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
    });
    
    getForecast(lat,long)

    } 
    


}

*/
//allows user to input a zipCode and it will return longitude and latitude of that city, these will be sored in lat and long, allowing getForcast(lat,long) to be called and work

async function inputLocation(zipCode){
    let city = document.querySelector("#city")
    let response = await fetch(geoURL + zipCode + "&appid=" + APIkey)
    JSONresponse = await response.json()
    let lat = JSONresponse.lat
    let long = JSONresponse.lon
    city.textContent = JSONresponse.name
    getForecast(lat,long)
}


async function getForecast(lat, long){
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
    
    var dt = new Date(JSONresponse.daily[0].dt * 1000);
    currDay = dt.getDay()


    if(currDay === 0){

        weekdays.set("Sunday", JSONresponse.daily[0])
        weekdays.set("Monday", JSONresponse.daily[1])
        weekdays.set("Tuesday", JSONresponse.daily[2])
        weekdays.set("Wednesday", JSONresponse.daily[3])
        weekdays.set("Thursday", JSONresponse.daily[4])
        weekdays.set("Friday", JSONresponse.daily[5])
        weekdays.set("Saturday", JSONresponse.daily[6])
    }

    if(currDay == 1){
        
        weekdays.set("Monday", JSONresponse.daily[0])
        weekdays.set("Tuesday", JSONresponse.daily[1])
        weekdays.set("Wednesday", JSONresponse.daily[2])
        weekdays.set("Thursday", JSONresponse.daily[3])
        weekdays.set("Friday", JSONresponse.daily[4])
        weekdays.set("Saturday", JSONresponse.daily[5])
        weekdays.set("Sunday", JSONresponse.daily[6])
    }

    if(currDay == 2){
        
        weekdays.set("Tuesday", JSONresponse.daily[0])
        weekdays.set("Wednesday", JSONresponse.daily[1])
        weekdays.set("Thursday", JSONresponse.daily[2])
        weekdays.set("Friday", JSONresponse.daily[3])
        weekdays.set("Saturday", JSONresponse.daily[4])
        weekdays.set("Sunday", JSONresponse.daily[5])
        weekdays.set("Monday", JSONresponse.daily[6])
    }

    if(currDay == 3){

        weekdays.set("Wednesday", JSONresponse.daily[0])
        weekdays.set("Thursday", JSONresponse.daily[1])
        weekdays.set("Friday", JSONresponse.daily[2])
        weekdays.set("Saturday", JSONresponse.daily[3])
        weekdays.set("Sunday", JSONresponse.daily[4])
        weekdays.set("Monday", JSONresponse.daily[5])
        weekdays.set("Tuesday", JSONresponse.daily[6])
    }
    if(currDay == 4){

        weekdays.set("Thursday", JSONresponse.daily[0])
        weekdays.set("Friday", JSONresponse.daily[1])
        weekdays.set("Saturday", JSONresponse.daily[2])
        weekdays.set("Sunday", JSONresponse.daily[3])
        weekdays.set("Monday", JSONresponse.daily[4])
        weekdays.set("Tuesday", JSONresponse.daily[5])
        weekdays.set("Wednesday", JSONresponse.daily[6])
    }
    if(currDay == 5){

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

    


    

}