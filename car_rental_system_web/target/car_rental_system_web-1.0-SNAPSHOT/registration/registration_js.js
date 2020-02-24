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

function validateForm() {
    var x = document.forms["signInform"]["username"].value;
    var y = document.forms["signInform"]["password"].value;
    if ((x == "") || (y == "")) {
	alert("All field must be filled out");
	return false;
    }
} 

function validateForm1(){
    var usr = document.forms["signUpForm"]["username"].value;
    var pass = document.forms["signUpForm"]["password"].value;
    var fname = document.forms["signUpForm"]["firstName"].value;
    var lname = document.forms["signUpForm"]["lastName"].value;
    var gender = document.forms["signUpForm"]["gender"].value;
    var year = document.forms["signUpForm"]["year"].value;
    var month = document.forms["signUpForm"]["month"].value;
    var day = document.forms["signUpForm"]["day"].value;
    var telephone = document.forms["signUpForm"]["telephone"].value;
    var email = document.forms["signUpForm"]["email"].value;
    var address = document.forms["signUpForm"]["address"].value;
    
    if ((usr == "") || (pass == "") || (lname == "") || (fname == "") || (gender == "") || (year == "") ||(month == "") || (day == "") || (email == "") || (telephone == "") || (address == "")) {
	alert("All field must be filled out");
	return false;
    }
    var telNum = parseFloat(telephone);
    if (isNaN(telNum)) {
	alert("telephone number must be integer");
	return false;
    }
    if (/\s/.test(usr) || /\s/.test(pass)) {
	alert("username and password must not contian whitespace");
	return false;
    }
    if (usr.length<4) {
	alert("username must be at least 4 character");
	return false;
    }
    if (pass.length<8) {
	alert("password must be at least 8 character");
	return false;
    }
    if (/[^0-9]/.test(telNum)) {
	alert("telephone number must be integer number");
	return false;
    }
}