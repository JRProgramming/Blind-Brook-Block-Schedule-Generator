window.onload = function() {
    document.getElementsByTagName("table")[0].style.visibility = "hidden"
    if(navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("Edge") != -1 || navigator.userAgent.indexOf("Trident") != -1 || (!!document.documentMode == true)) {
        document.body.innerHTML = "<h1>This website does not support this broswer</h1><br><h3>Please use a different web broswer (Safari, Chrome, FireFox, and Opera are preferable)</h3>"
    }
}
var classCount = -1
function implementClass() {
    if(document.getElementById("errorMessage")) {
        document.getElementById("errorMessage").style.display = "none"
    }
    var colors = ["tomato", "dodgerblue", "yellow", "orange", "mediumseagreen", "lightblue", "pink", "#d6ff99", "gainsboro", "#ccccff", "#a89de1", "burlywood"]
    document.getElementById("lunch").innerHTML = "Lunch"
    var textfield = document.getElementById("textfield")
    var classes = textfield.value.split('\n');
    for(i=0; i<classes.length; i++) {
        classes[i] = classes[i].trim()
        for(j=0;j<classes[i].length;j++) {
            classes[i] = classes[i].replace('\t','!@#$')
        }
        classes[i] = classes[i].split('!@#$')
        var unnecessaryIndexInArray = [3, 4, 5]
        for(j=0;j<3;j++) {
            classes[i].splice(unnecessaryIndexInArray[j], 1)
        }
        for(l=0;l<classes[i][0].length;l++) {
            if(classes[i][0][l] != ",") {
                var classData = document.getElementById("p" + classes[i][1] + classes[i][0][l])
                if(classData != undefined) {
                    if(classCount == -1) {
                        classCount = i
                    }
                    classData.innerHTML = classes[i][3] + "<br>" + classes[i][2] + "<br>" + classes[i][4]
                    if(colors[i - classCount]) {
                        classData.style.backgroundColor = colors[i - classCount]
                    } else {
                        for(j=0;j<document.getElementsByTagName("TD").length;j++) {
                            if(document.getElementsByTagName("TD")[j].style.backgroundColor == "" && document.getElementsByTagName("TD")[j].innerHTML != "Lunch") {
                                var color = []
                                for (_= 0;_<3;_++) {
                                    color.push(Math.floor(Math.random() * 255))
                                }
                                document.getElementsByTagName("TD")[j].style.backgroundColor = "rgba(" + color[0] + "," + color[1] + "," + color[2] + ", .5)"
                            }
                        }
                    }
                }
            }
        }
    }
    for(i=0;i<document.getElementsByTagName("TD").length;i++) {
        if(document.getElementsByTagName("TD")[i].innerHTML == "") {
            document.getElementsByTagName("TD")[i].innerHTML = "Free"
            document.getElementsByTagName("TD")[i].style.backgroundColor = "transparent"
        }
    }
    var letterDays = ["Time","A","B","C","D","E","F","G","H"]
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
