window.onload = function() {
    document.getElementsByTagName("table")[0].style.visibility = "hidden"
}
function implementClass() {
    if(document.getElementById("errorMessage")) {
        document.getElementById("errorMessage").style.display = "none"
    }
    var textfield = document.getElementById("textfield")
    var classes = textfield.value.split('\n');
    for(i=0; i<classes.length; i++) {
        classes[i] = classes[i].trim()
        for(_=0;_<6;_++) {
            classes[i] = classes[i].replace(' ', '')
        }
        classes[i] = classes[i].replace(/\s/g,' ').split(' ')
        var unnecessaryIndexInArray = [3, 4, 5]
        for(j=0;j<3;j++) {
            classes[i].splice(unnecessaryIndexInArray[j], 1)
        }
        for(l=0;l<classes[i][0].length;l++) {
            if(classes[i][0][l] != ",") {
                var classData = document.getElementById("p" + classes[i][1] + classes[i][0][l])
                if(classData != undefined) {
                    classData.innerHTML = classes[i][3] + "<br>" + classes[i][2] + "<br>" + classes[i][4]
                }
            }
        }
    }
    for(i=0;i<document.getElementsByTagName("TD").length;i++) {
        if(document.getElementsByTagName("TD")[i].innerHTML == "") {
            document.getElementsByTagName("TD")[i].innerHTML = "Free"
        }
    }
    document.getElementById("lunch").innerHTML = "Lunch"
    var letterDays = ["A","B","C","D","E","F","G","H"]
    for(m=0;m<letterDays.length;m++) {
        document.getElementsByTagName("TH")[m].innerHTML = letterDays[m]
    }
    var header = document.getElementsByClassName("pHeader")
    for(i=0;i<header.length;i++) {
        header[i].style.display = "none"
    }
    var sHeader = document.getElementsByClassName("sHeader")
    for(i=0;i<sHeader.length;i++) {
        sHeader[i].style.display = "block"
    }
    document.getElementsByTagName("table")[0].style.visibility = "visible"
    textfield.value = null
    var errorInSchedule = checkForErrors()
    if(errorInSchedule) {
        document.getElementsByTagName("table")[0].style.visibility = "hidden"
        var header = document.getElementsByClassName("pHeader")
        for(i=0;i<header.length;i++) {
            header[i].style.display = "block"
        }
        var sHeader = document.getElementsByClassName("sHeader")
        for(i=0;i<sHeader.length;i++) {
            sHeader[i].style.display = "none"
        }
        if(document.getElementById("errorMessage")) {
            document.getElementById("errorMessage").style.display = "block"
        } else {
            var errorHeading = document.createElement("h3")
            errorHeading.setAttribute("style", "color:red")
            errorHeading.setAttribute("id", "errorMessage")
            errorHeading.innerHTML = "Your schedule did not generate properly. Please try copying your schedule as instructed"
            document.getElementById("errorPlacement").appendChild(errorHeading)
        }
    }
}
function checkForErrors() {
    var errorInSchedule = true
    for(i=0;i<document.getElementsByTagName("TD").length;i++) {
        if(!document.getElementsByTagName("TD")[i].innerHTML.includes("Free") && document.getElementsByTagName("TD")[i].innerHTML != "Lunch") {
            errorInSchedule = false
        }
    }
    for(i=0;i<document.getElementsByTagName("TD").length;i++) {
        if(document.getElementsByTagName("TD")[i].innerHTML.includes("undefined")) {
            errorInSchedule = true
        }
    }
    return errorInSchedule
}