function openContent(event,day) {

    var i,tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i= 0; i < tabcontent.length;i++) { 
        tabcontent[i].style.display= "none";
    }
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length;i++) {
        tabs[i].className = tabs[i].className.replace("active", "");
    }
    document.getElementById(day).style.display = "block";
    event.currentTarget.className+= " active";

}