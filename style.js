
function opentab(evt, tabName) {
    "use strict";
    
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i = i + 1) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i = i + 1) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showValue(newValue) {
    "use strict";
	document.getElementById("energy").innerHTML = newValue;
}
function showValue1(newValue1) {
    "use strict";
	document.getElementById("water").innerHTML = newValue1;
}
function showValue2(newValue2) {
    "use strict";
	document.getElementById("waste").innerHTML = newValue2;
}
