function showInformation(){
    document.getElementById("infoSection").removeAttribute("hidden");
}

function infoHide(){
    document.getElementById("infoSection").setAttribute("hidden","");
}

function dayInsert() {
    var year = parseInt(document.getElementById("selyear").value);
    var month = parseInt(document.getElementById("selmonth").value);
    var d = new Date(year, month, 0);
    var dayOption;
    for (var i = 1; i <= d.getDate(); i++) {
	dayOption += "<option value=\"" + i + "\">" + i + "</option>";
    }
    document.getElementById("selday").innerHTML = dayOption;
}

function validateEditForm(){
    var fName = document.forms["editInfoForm"]["firstName"].value;
    var lName = document.forms["editInfoForm"]["lastName"].value;
    var gender = document.forms["editInfoForm"]["gender"].value;
    var email = document.forms["editInfoForm"]["email"].value;
    var telephone = document.forms["editInfoForm"]["telephone"].value;
    var address = document.forms["editInfoForm"]["address"].value;
    var year = document.forms["editInfoForm"]["year"].value;
    var month = document.forms["editInfoForm"]["month"].value;
    var day = document.forms["editInfoForm"]["day"].value;

    
    if ((fName == "") || (lName == "") || (gender == "") || (email == "") ||(telephone == "") || (address == "") || (year == "") || (month == "") || (day == "")) {
	alert("All field must be filled out");
	return false;
    }
    var telephoneNum = parseFloat(telephone);
    if (isNaN(telephoneNum)) {
	alert("telephone number must be integer number");
	return false;
    }
    if (!/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
	alert("email wrong");
	return false;
    }
    if (fName.length<3 || lName.length<3) {
	alert("first name and last name must be at least 4 character");
	return false;
    }
    if (/[^0-9]/.test(telephone)) {
	alert("telephone number must be integer number");
	return false;
    }
}

function showEditInformation(){
    document.getElementById("editInfoSection").removeAttribute("hidden");
}

function editInfoHide(){
    document.getElementById("editInfoSection").setAttribute("hidden","");
}