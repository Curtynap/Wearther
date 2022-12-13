window.addEventListener('DOMContentLoaded', clothingSelector);


function clothingSelector(){
    let total = document.getElementById("side-bar").querySelectorAll(".tabcontent");
    total[0].addEventListener('click', dayZero);
    total[1].addEventListener('click', dayOne);
    total[2].addEventListener('click', dayTwo);
    total[3].addEventListener('click', dayThree);
    total[4].addEventListener('click', dayFour);
    total[5].addEventListener('click', dayFive);
    total[6].addEventListener('click', daySix);
}
//Functions in order to retrieve data from tabs on click
function dayZero(){
    closeTabs();

    let tab = document.getElementById("tabZero");
    let desc = document.getElementById("description0");
    tab.style.width = "100%";
    let data0 = document.querySelector("#zeroData").textContent;
    let day = document.getElementById("tabHead0").textContent;
    let alertHold = document.getElementById("alertsAPI");
    var listElem = document.createElement("li");
    var noAlert = document.createElement("li");
    noAlert.innerHTML = "No Weather Alerts For This Day";
    listElem.innerHTML = JSONresponse.alerts;
    desc.innerHTML = weekdays.get(day).weather[0].description;
    if(listElem.innerHTML == "undefined"){
        alertHold.appendChild(noAlert);
    }else{
        listElem.innerHTML = JSONresponse.alerts[0].event;
        alertHold.appendChild(listElem);
    }
    var maxT = weekdays.get(day).temp.max;
    var minT = weekdays.get(day).temp.min;
    var minMaxValue = document.getElementById("minMaxDay0");
    var data = " " + minT + " / " + maxT;
    minMaxValue.innerHTML = data;
    clothingSelect(data0, desc.textContent);

};

function dayOne(){
    closeTabs();
    
    let tab = document.getElementById("tabOne");
    let desc = document.getElementById("description1");
    tab.style.width = "100%";
    let alertHold = document.getElementById("alertsAPI");
    alertHold.innerHTML = " ";
    let data1 = document.querySelector("#oneData").textContent;
    let day = document.getElementById("tabHead1").textContent;
    var listElem = document.createElement("li");
    var noAlert = document.createElement("li");
    noAlert.innerHTML = "No Weather Alerts For This Day";
    listElem.innerHTML = JSONresponse.alerts;
    desc.innerHTML = weekdays.get(day).weather[0].description;
    if(listElem.innerHTML == "undefined"){
        alertHold.appendChild(noAlert);
    }else{
        listElem.innerHTML = JSONresponse.alerts[0].event;
        alertHold.appendChild(listElem);
    }
    var maxT = weekdays.get(day).temp.max;
    var minT = weekdays.get(day).temp.min;
    var minMaxValue = document.getElementById("minMaxDay1");
    var data = " " + minT + " / " + maxT;
    minMaxValue.innerHTML = data;
    clothingSelect(data1, desc.textContent);
};

function dayTwo(){
    closeTabs();

    let tab = document.getElementById("tabTwo");
    let desc = document.getElementById("description2");
    tab.style.width = "100%";
    let alertHold = document.getElementById("alertsAPI");
    alertHold.innerHTML = " ";
    let data2 = document.querySelector("#twoData").textContent;
    let day = document.getElementById("tabHead1").textContent;
    var listElem = document.createElement("li");
    var noAlert = document.createElement("li");
    noAlert.innerHTML = "No Weather Alerts For This Day";
    listElem.innerHTML = JSONresponse.alerts;
    desc.innerHTML = weekdays.get(day).weather[0].description;
    if(listElem.innerHTML == "undefined"){
        alertHold.appendChild(noAlert);
    }else{
        listElem.innerHTML = JSONresponse.alerts[0].event;
        alertHold.appendChild(listElem);
    }
    var maxT = weekdays.get(day).temp.max;
    var minT = weekdays.get(day).temp.min;
    var minMaxValue = document.getElementById("minMaxDay2");
    var data = " " + minT + " / " + maxT;
    minMaxValue.innerHTML = data;
    clothingSelect(data2, desc.textContent);
};

function dayThree(){
    closeTabs();

    let tab = document.getElementById("tabThree");
    let desc = document.getElementById("description3");
    tab.style.width = "100%";
    let alertHold = document.getElementById("alertsAPI");
    alertHold.innerHTML = " ";
    let data3 = document.querySelector("#threeData").textContent;
    let day = document.getElementById("tabHead3").textContent;
    var listElem = document.createElement("li");
    var noAlert = document.createElement("li");
    noAlert.innerHTML = "No Weather Alerts For This Day";
    listElem.innerHTML = JSONresponse.alerts;
    desc.innerHTML = weekdays.get(day).weather[0].description;
    if(listElem.innerHTML == "undefined"){
        alertHold.appendChild(noAlert);
    }else{
        listElem.innerHTML = JSONresponse.alerts[0].event;
        alertHold.appendChild(listElem);
    }
    var maxT = weekdays.get(day).temp.max;
    var minT = weekdays.get(day).temp.min;
    var minMaxValue = document.getElementById("minMaxDay3");
    var data = " " + minT + " / " + maxT;
    minMaxValue.innerHTML = data;
    clothingSelect(data3, desc.textContent);
};

function dayFour(){
    closeTabs();

    let tab = document.getElementById("tabFour");
    let desc = document.getElementById("description4");
    tab.style.width = "100%";
    let alertHold = document.getElementById("alertsAPI");
    alertHold.innerHTML = " ";
    let data4 = document.querySelector("#fourData").textContent;
    let day = document.getElementById("tabHead4").textContent;
    var listElem = document.createElement("li");
    var noAlert = document.createElement("li");
    noAlert.innerHTML = "No Weather Alerts For This Day";
    listElem.innerHTML = JSONresponse.alerts;
    desc.innerHTML = weekdays.get(day).weather[0].description;
    if(listElem.innerHTML == "undefined"){
        alertHold.appendChild(noAlert);
    }else{
        listElem.innerHTML = JSONresponse.alerts[0].event;
        alertHold.appendChild(listElem);
    }
    var maxT = weekdays.get(day).temp.max;
    var minT = weekdays.get(day).temp.min;
    var minMaxValue = document.getElementById("minMaxDay4");
    var data = " " + minT + " / " + maxT;
    minMaxValue.innerHTML = data;
    clothingSelect(data4, desc.textContent);
};

function dayFive(){
    closeTabs();

    let tab = document.getElementById("tabFive");
    let desc = document.getElementById("description5");
    tab.style.width = "100%";
    let alertHold = document.getElementById("alertsAPI");
    alertHold.innerHTML = " ";
    let data5 = document.querySelector("#fiveData").textContent;
    let day = document.getElementById("tabHead5").textContent;
    var listElem = document.createElement("li");
    var noAlert = document.createElement("li");
    noAlert.innerHTML = "No Weather Alerts For This Day";
    listElem.innerHTML = JSONresponse.alerts;
    desc.innerHTML = weekdays.get(day).weather[0].description;
    if(listElem.innerHTML == "undefined"){
        alertHold.appendChild(noAlert);
    }else{
        listElem.innerHTML = JSONresponse.alerts[0].event;
        alertHold.appendChild(listElem);
    }
    var maxT = weekdays.get(day).temp.max;
    var minT = weekdays.get(day).temp.min;
    var minMaxValue = document.getElementById("minMaxDay5");
    var data = " " + minT + " / " + maxT;
    minMaxValue.innerHTML = data;
    clothingSelect(data5, desc.textContent);
};

function daySix(){
    closeTabs();

    let tab = document.getElementById("tabSix");
    let desc = document.getElementById("description6");
    tab.style.width = "100%";
    let alertHold = document.getElementById("alertsAPI");
    alertHold.innerHTML = " ";
    let data6 = document.querySelector("#sixData").textContent;
    let day = document.getElementById("tabHead6").textContent;
    var listElem = document.createElement("li");
    var noAlert = document.createElement("li");
    noAlert.innerHTML = "No Weather Alerts For This Day";
    listElem.innerHTML = JSONresponse.alerts;
    desc.innerHTML = weekdays.get(day).weather[0].description;
    if(listElem.innerHTML == "undefined"){
        alertHold.appendChild(noAlert);
    }else{
        listElem.innerHTML = JSONresponse.alerts[0].event;
        alertHold.appendChild(listElem);
    }
    var maxT = weekdays.get(day).temp.max;
    var minT = weekdays.get(day).temp.min;
    var minMaxValue = document.getElementById("minMaxDay6");
    var data = " " + minT + " / " + maxT;
    minMaxValue.innerHTML = data;
    clothingSelect(data6, desc.textContent);
};


function closeTabs(){
    let tab0 = document.getElementById("tabZero");
    let tab1 = document.getElementById("tabOne");
    let tab2 = document.getElementById("tabTwo");
    let tab3 = document.getElementById("tabThree");
    let tab4 = document.getElementById("tabFour");
    let tab5 = document.getElementById("tabFive");
    let tab6 = document.getElementById("tabSix");

    let minMax0 = document.getElementById("minMaxDay0");
    let minMax1 = document.getElementById("minMaxDay1");
    let minMax2 = document.getElementById("minMaxDay2");
    let minMax3 = document.getElementById("minMaxDay3");
    let minMax4 = document.getElementById("minMaxDay4");
    let minMax5 = document.getElementById("minMaxDay5");
    let minMax6 = document.getElementById("minMaxDay6");

    let desc0 = document.getElementById("description0");
    let desc1 = document.getElementById("description1");
    let desc2 = document.getElementById("description2");
    let desc3 = document.getElementById("description3");
    let desc4 = document.getElementById("description4");
    let desc5 = document.getElementById("description5");
    let desc6 = document.getElementById("description6");


    let alertHold = document.getElementById("alertsAPI");
    alertHold.innerHTML = " ";

    desc0.innerHTML = " ";
    desc1.innerHTML = " ";
    desc2.innerHTML = " ";
    desc3.innerHTML = " ";
    desc4.innerHTML = " ";
    desc5.innerHTML = " ";
    desc6.innerHTML = " ";

    tab0.style.width = "60%";
    tab1.style.width = "60%";
    tab2.style.width = "60%";
    tab3.style.width = "60%";
    tab4.style.width = "60%";
    tab5.style.width = "60%";
    tab6.style.width = "60%";

    minMax0.innerHTML = " ";
    minMax1.innerHTML = " ";
    minMax2.innerHTML = " ";
    minMax3.innerHTML = " ";
    minMax4.innerHTML = " ";
    minMax5.innerHTML = " ";
    minMax6.innerHTML = " ";
}

function clothingSelect(day, description){
    if (parseInt(day) >= 80 ){
        descrToClothes(description);

    }else if(parseInt(day) <= 80 && parseInt(day) >= 60){
        descrToClothes(description);

    }else if(parseInt(day) <= 60 && parseInt(day) >= 40){
        descrToClothes(description);

    }else if(parseInt(day) <= 40 && parseInt(day)  >= 20 ){
        descrToClothes(description);

    }else if(parseInt(day)  >= 20 && parseInt(day) <= 0){
        descrToClothes(description);

    }else if(parseInt(day) <= 0){
        descrToClothes(description);
    }

}

function descrToClothes(description){
    if(description.includes("rain")){
        alert("where rainy clothes");
    }else if(description.includes("snow")){
        alert("where snow clothes");
    }else if(description.includes("clouds")){
        alert("where cloud clothes");
    }else if(description.includes("sun")){
        alert("where clothes to keep you cool");
    }else if(description.includes("clear")){
        alert("Clear skies where what you like");

    }
}