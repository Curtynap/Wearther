

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


  //found fetch error checking at https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
async function inputLocation(zipCode){
    if(zipCode.length == 5){
    let city = document.querySelector("#city")
    //let response = await fetch(geoURL + zipCode + "&appid=" + APIkey)
    fetch(geoURL + zipCode + "&appid=" + APIkey).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((responseJson) => {
        let lat = responseJson.lat
        let long = responseJson.lon
        city.textContent = responseJson.name
        getForecast(lat,long)
      })
      .catch((error) => {
        console.log(error)
      });
    

    }
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
    populateTabs()
}

function populateTabs(){
    
    const iterator = weekdays.entries();
    
    let day0 = document.querySelector("#tabHead0")
    //gets the day, stored at [0] in weekdays iterator return value
    day0.textContent = iterator.next().value[0]
    let day1 = document.querySelector("#tabHead1")
    day1.textContent = iterator.next().value[0]
    let day2 = document.querySelector("#tabHead2")
    day2.textContent = iterator.next().value[0]
    let day3 = document.querySelector("#tabHead3")
    day3.textContent = iterator.next().value[0]
    let day4 = document.querySelector("#tabHead4")
    day4.textContent = iterator.next().value[0]
    let day5 = document.querySelector("#tabHead5")
    day5.textContent = iterator.next().value[0]
    let day6 = document.querySelector("#tabHead6")
    day6.textContent = iterator.next().value[0]
    
    
    const iterator1 = weekdays.entries();
    let data0 = document.querySelector("#zeroData")
    data0.textContent = iterator1.next().value[1].temp.day
    
    
    let data1 = document.querySelector("#oneData")
    data1.textContent = iterator1.next().value[1].temp.day
    let data2 = document.querySelector("#twoData")
    data2.textContent = iterator1.next().value[1].temp.day

    let data3 = document.querySelector("#threeData")
    data3.textContent = iterator1.next().value[1].temp.day
    let data4 = document.querySelector("#fourData")
    data4.textContent = iterator1.next().value[1].temp.day
    let data5 = document.querySelector("#fiveData")
    data5.textContent = iterator1.next().value[1].temp.day
    let data6 = document.querySelector("#sixData")
    data6.textContent = iterator1.next().value[1].temp.day
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

    setTheme(JSONresponse.daily[0]);
}



    function setTheme(forecastArray){
        let weather = forecastArray.weather[0].main;
        console.log (weather);

        switch(weather){
            case 'Thunderstorm':
                ;
            case 'Drizzle':
                ;
            case 'Rain':
                rainyTheme();
                break;
            case 'Snow':
                snowTheme();
                break;
            case 'Smoke':
                ;
            case 'Haze':
                ;
            case 'Sand':
                ;
            case 'Ash':
                dangerTheme();
                break;
            case 'Mist':
                ;
            case 'Fog':
                fogTheme();
                break;
            case 'Dust':
                ;
            case 'Squall':
                ;
            case 'Tornado':
                windyTheme();
                break;
            case 'Clear':
                clearTheme();
                break;
            case 'Clouds':
                cloudyTheme();
                break;
            default:
                defaultTheme();
        }
    }

    function themeCommands(colorOne, colorTwo, colorThree, colorFour){
        document.documentElement.style.setProperty('--main-color-two', colorOne);
        document.documentElement.style.setProperty('--accent-color-one', colorTwo);
        document.documentElement.style.setProperty('--accent-color-two', colorThree);
        document.documentElement.style.setProperty('--accent-color-three', colorFour);

    }

    function defaultTheme(){
        themeCommands('rgb(0, 180, 216)', 'rgb(202, 240, 248)', 'rgb(144, 224, 239)', 'rgb(0, 119, 182)');
    }

    function snowTheme(){
        themeCommands('rgb(203, 156, 242)', 'rgb(158, 123, 155)', 'rgb(97, 98, 131)', 'rgb(143, 149, 211)');
    }

    function clearTheme(){
        themeCommands('rgb(25, 56, 31)', 'rgb(145, 203, 62)', 'rgb(83, 165, 72)', 'rgb(76, 147, 76)');
    }

    function cloudyTheme(){
        themeCommands('rgb(204, 218, 209)', 'rgb(156, 174, 169)', 'rgb(120, 133, 133)', 'rgb(111, 104, 102)');
    }

    function rainyTheme(){
        themeCommands('rgb(0, 169, 165)', 'rgb(11, 83, 81)', 'rgb(9, 35, 39)', 'rgb(78, 128, 152)');
    }

    function windyTheme(){
        themeCommands('rgb(214, 204, 194)', 'rgb(245, 235, 224)', 'rgb(227, 213, 202)', 'rgb(213, 189, 175)');
    }

    function dangerTheme(){
        themeCommands('rgb(114, 0, 38)', 'rgb(206, 66, 87)', 'rgb(255, 127, 81)', 'rgb(255, 155, 84)');
    }

    function fogTheme(){
        themeCommands('rgb(255, 73, 158)', 'rgb(210, 100, 182)', 'rgb(164, 128, 207)', 'rgb(119, 155, 231)');
    }
