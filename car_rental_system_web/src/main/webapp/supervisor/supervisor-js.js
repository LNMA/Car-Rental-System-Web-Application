function showEditInformation(){
    document.getElementById("editInfoSection").removeAttribute("hidden");
}

function editInfoHide(){
    document.getElementById("editInfoSection").setAttribute("hidden","");
}

function asideHide() {
    document.getElementById("rootAside").innerHTML = "";
}

function sectionHide() {
    document.getElementById("section").innerHTML = "";
}

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


function orderList() {
    var list = "<aside class=\"asideRoot\">\n" +
	    "       <button value=\"addOrder\" class=\"ulCar\" onclick=\"addOrder()\">Add Order</button>\n" +
	    "	    <button value=\"removeOrder\" class=\"ulCar\" onclick=\"removeOrder()\">Remove Order</button>\n" +
	    "	    <button value=\"editOrderDay\" class=\"ulCar\" onclick=\"editOrderDay()\">Edit Order Day</button>\n" +
	    "	    <button value=\"editPaymentMethod\" class=\"ulCar\" onclick=\"editPaymentMethod()\">Edit Payment Methods</button>\n" +
	    "	    <button value=\"editBill\" class=\"ulCar\" onclick=\"editBill()\">Edit Bill</button>\n" +
	    "	    <button value=\"editLastMeterReading\" class=\"ulCar\" onclick=\"editLastMeterReading()\">Edit Last Meter Reading</button>\n" +
	    "	    <form action=\"ShowOrder.jsp\" method=\"post\">\n" +
	    "       <input type=\"text\" name=\"operation\" value=\"all\" readonly hidden />\n" +
	    "       <input type=\"submit\" class=\"ulCar\" value=\"Show Me All Order\" />\n" +
	    "	    </form>\n" +
	    "	    <button value=\"showOrderByUsername\" class=\"ulCar\" onclick=\"showOrderByUsername()\">Show Me Oder By Username</button>\n" +
	    "	    <button value=\"showOrderByCarId\" class=\"ulCar\" onclick=\"showOrderByCarId()\">Show Me Oder By Car ID</button>\n" +
	    "<button class=\"minimize\" onclick=\"asideHide()\">^<br>Hide</button>" +
	    "       </aside>";
    document.getElementById("rootAside").innerHTML = list;
}

function showOrderByCarId() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"ShowOrder.jsp\" method=\"post\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"showByCarId\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car ID:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"carId\" class=\"txtEdit\" placeholder=\"Type car id\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Show\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function showOrderByUsername() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"ShowOrder.jsp\" method=\"post\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"showByUsername\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Show\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editLastMeterReading() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"EditOrder.jsp\" method=\"post\" name=\"EditOrderForm\" onsubmit=\"return validateFormOrderEdit()\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editLastMeterReading\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Order ID:\n" +
	    "                </p>\n" +
	    "                <input type=\"number\" name=\"orderId\" class=\"txtEdit\" placeholder=\"Type order id\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Trip Distance:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"number\" class=\"txtEdit\" placeholder=\"Type trip distance in km\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editBill() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"EditOrder.jsp\" method=\"post\" name=\"EditOrderForm\" onsubmit=\"return validateFormOrderEdit()\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editBill\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Order ID:\n" +
	    "                </p>\n" +
	    "                <input type=\"number\" name=\"orderId\" class=\"txtEdit\" placeholder=\"Type order id\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Bill:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"number\" class=\"txtEdit\" placeholder=\"Type bill\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function validateFormOrderEdit() {
    var id = document.forms["EditOrderForm"]["orderId"].value;
    var number = document.forms["EditOrderForm"]["number"].value;


    if ((id == "") || (number == "")) {
	alert("All field must be filled out");
	return false;
    }
    var numberNum = parseFloat(number);

    if (isNaN(numberNum)) {
	alert("number field must be number");
	return false;
    }
    if (/\s/.test(id)) {
	alert("car id must not contian whitespace");
	return false;
    }
    if (/^\d*(\.\d+)?$/.test(number)) {

    } else {
	alert("Number field wrong");
	return false;
    }
}


function editPaymentMethod() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"EditOrder.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editPaymentMethod\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Order ID:\n" +
	    "                </p>\n" +
	    "                <input type=\"number\" name=\"orderId\" class=\"txtEdit\" placeholder=\"Type order id\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Day:\n" +
	    "                </p>\n" +
	    "<select name=\"paymentMethod\" class=\"txtEdit\">\n" +
	    "                                <option value=\"Check\">Check</option>\n" +
	    "                                <option value=\"Credit Card\">Credit Card</option>\n" +
	    "                                <option value=\"Bank Transfer\">Bank Transfer</option>\n" +
	    "                                <option value=\"Cash\">Cash</option>\n" +
	    "                            </select>" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editOrderDay() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"EditOrder.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editOrderId\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Order ID:\n" +
	    "                </p>\n" +
	    "                <input type=\"number\" name=\"orderId\" class=\"txtEdit\" placeholder=\"Type order id\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Day:\n" +
	    "                </p>\n" +
	    "                <input type=\"number\" name=\"day\" class=\"txtEdit\" placeholder=\"Type day\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function removeOrder() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"EditOrder.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"removeOrder\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Order ID:\n" +
	    "                </p>\n" +
	    "                <input type=\"number\" name=\"orderId\" class=\"txtEdit\" placeholder=\"Type order id\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Remove\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function addOrder() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"../order/AddOrder.jsp\" method=\"post\">\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Booking\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function accountList() {
    var list = "<aside class=\"asideRoot\">\n" +
	    "       <button value=\"addAccount\" class=\"ulCar\" onclick=\"selectAccountType()\">Add Account</button>\n" +
	    "	    <button value=\"editUsername\" class=\"ulCar\" onclick=\"editAccountUsername()\">Edit Username</button>\n" +
	    "	    <button value=\"editPassword\" class=\"ulCar\" onclick=\"editAccountPassword()\">Edit Password</button>\n" +
	    "	    <button value=\"editFirstName\" class=\"ulCar\" onclick=\"editAccountFirstName()\">Edit First Name</button>\n" +
	    "	    <button value=\"editLastName\" class=\"ulCar\" onclick=\"editAccountLastName()\">Edit Last Name</button>\n" +
	    "	    <button value=\"editGender\" class=\"ulCar\" onclick=\"editAccountGender()\">Edit Gender</button>\n" +
	    "	    <button value=\"editAge\" class=\"ulCar\" onclick=\"editAccountAge()\">Edit Age</button>\n" +
	    "	    <button value=\"editTelephone\" class=\"ulCar\" onclick=\"editAccountTelephone()\">Edit Telephone</button>\n" +
	    "	    <button value=\"editEmail\" class=\"ulCar\" onclick=\"editAccountEmail()\">Edit Email</button>\n" +
	    "	    <button value=\"editAddress\" class=\"ulCar\" onclick=\"editAccountAddress()\">Edit Address</button>\n" +
	    "	    <button value=\"editAccountStatus\" class=\"ulCar\" onclick=\"editAccountStatus()\">Edit Account Status</button>\n" +
	    "	    <button value=\"editLicenseValidity\" class=\"ulCar\" onclick=\"editAccountLicenseValidity()\" >Edit License Validity</button>\n" +
	    "	    <button value=\"editDiscountPoint\" class=\"ulCar\" onclick=\"editAccountDiscountPoint()\">Edit Discount Point</button>\n" +
	    "       <button value=\"editTotalBills\" class=\"ulCar\" onclick=\"editAccountTotalBills()\">Edit Total Bills</button>\n" +
	    "	    <form action=\"showAllAccount.jsp\" method=\"post\">\n" +
	    "       <input type=\"submit\" class=\"ulCar\" value=\"Show Me All Account\" />\n" +
	    "	    </form>\n" +
	    "<button class=\"minimize\" onclick=\"asideHide()\">^<br>Hide</button>" +
	    "       </aside>";
    document.getElementById("rootAside").innerHTML = list;
}
function editAccountTotalBills() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\" name=\"EditAccountForm\" onsubmit=\"return validateFormAccountEdit()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editTotalBills\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Total Bills:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"number\" class=\"txtEdit\" placeholder=\"Type total bills \" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function validateFormAccountEdit() {
    var username = document.forms["EditAccountForm"]["username"].value;
    var number = document.forms["EditAccountForm"]["number"].value;


    if ((username == "") || (number == "")) {
	alert("All field must be filled out");
	return false;
    }
    var numberNum = parseFloat(number);

    if (isNaN(numberNum)) {
	alert("number field must be number");
	return false;
    }
    if (/\s/.test(username)) {
	alert("car id must not contian whitespace");
	return false;
    }
    if (/^\d*(\.\d+)?$/.test(number)) {

    } else {
	alert("Number field wrong");
	return false;
    }
}

function editAccountTelephone() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\" name=\"EditAccountForm\" onsubmit=\"return validateFormAccountEditTelephone()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editTelephone\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Telephone:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"number\" class=\"txtEdit\" placeholder=\"Type telephone number\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountDiscountPoint() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\" name=\"EditAccountForm\" onsubmit=\"return validateFormAccountEditTelephone()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editDiscountPoint\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Discount Point:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"number\" class=\"txtEdit\" placeholder=\"Type discount point\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function validateFormAccountEditTelephone() {
    var username = document.forms["EditAccountForm"]["username"].value;
    var number = document.forms["EditAccountForm"]["number"].value;


    if ((username == "") || (number == "")) {
	alert("All field must be filled out");
	return false;
    }
    var numberNum = parseFloat(number);

    if (isNaN(numberNum)) {
	alert("number field must be number");
	return false;
    }
    if (/\s/.test(username)) {
	alert("car id must not contian whitespace");
	return false;
    }
    if (/[^0-9]/.test(number)) {
	alert("number field wrong");
	return false;
    }
}

function editAccountAge() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editAge\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Age:\n" +
	    "                </p>\n" +
	    "		    <table class=\"tableAge\">\n" +
	    "                    <tr>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"year\" class=\"txt\" id=\"selyear\" required>\n";
    for (var i = 1950; i < 2021; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }
    list += "                            </select>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"month\" class=\"txt\" id=\"selmonth\" required>\n";
    for (var i = 1; i < 13; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }
    list += "                            </select>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"day\"  class=\"txt\" id=\"selday\" onclick=\"dayInsert()\" required>\n" +
	    "                                \n" +
	    "                            </select>\n" +
	    "                        </td>\n" +
	    "                    </tr>\n" +
	    "                </table>" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountLicenseValidity() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editLicenseValidity\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    License Validity:\n" +
	    "                </p>\n" +
	    "                <select class=\"txtEdit\" name=\"licenseValidity\" required>\n" +
	    "                    <option value=\"Invalid\">Invalid</option>\n" +
	    "                    <option value=\"Valid\">Valid</option>\n" +
	    "                </select>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountStatus() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editStatus\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Status:\n" +
	    "                </p>\n" +
	    "                <select class=\"txtEdit\" name=\"status\" required>\n" +
	    "                    <option value=\"Online\">Online</option>\n" +
	    "                    <option value=\"Offline\">Offline</option>\n" +
	    "                </select>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountAddress() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editAddress\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Address:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"address\" class=\"txtEdit\" placeholder=\"Type address\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountEmail() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editEmail\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Email:\n" +
	    "                </p>\n" +
	    "                <input type=\"email\" name=\"email\" class=\"txtEdit\" placeholder=\"Type email \" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountLastName() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editLastName\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Last Name:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"lastName\" class=\"txtEdit\" placeholder=\"Type last name\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountFirstName() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editFirstName\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    First Name:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"firstName\" class=\"txtEdit\" placeholder=\"Type first name\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountGender() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editGender\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Gender:\n" +
	    "                </p>\n" +
	    "                <select class=\"txtEdit\" name=\"gender\" required>\n" +
	    "                    <option value=\"Female\">Female</option>\n" +
	    "                    <option value=\"Male\">Male</option>\n" +
	    "                </select>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function  editAccountPassword() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editPassword\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"username\" class=\"txtEdit\" placeholder=\"Type username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Password:\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"password\" class=\"txtEdit\" placeholder=\"Type password\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editAccountUsername() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editAccountResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editUsername\" readonly hidden />\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username (Old):\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"oldUsername\" class=\"txtEdit\" placeholder=\"Type old username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Username (New):\n" +
	    "                </p>\n" +
	    "                <input type=\"text\" name=\"newUsername\" class=\"txtEdit\" placeholder=\"Type new username\" required/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function selectAccountType() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <br>\n" +
	    "            <br>\n" +
	    "            <p class=\"labelEdit\">\n" +
	    "                Please select account type:\n" +
	    "            </p>\n" +
	    "            <br>\n" +
	    "            <br>\n" +
	    "            <br>\n" +
	    "            <br>\n" +
	    "            <table id=\"tableSelectType\">\n" +
	    "                <tr>\n" +
	    "                    <td>\n" +
	    "                        <button value=\"client\" class=\"option\" onclick=\"addAccountClient()\">Client</button>\n" +
	    "                    </td>\n" +
	    "                </tr>\n" +
	    "            </table>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function addAccountClient() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"addAccountResult.jsp\" method=\"post\" name=\"addAccountForm\" onsubmit=\"return validateFormAddClient()\">\n" +
	    "                <table>\n" +
	    "                    <tr>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Username:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"username\" maxlength=\"30\" placeholder=\"Type username\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Password:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"password\" maxlength=\"30\" placeholder=\"Type password\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                TYPE:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"type\" class=\"txt\" required contenteditable=\"true\">" +
	    "                                <option value=\"root\">Root</option>\n" +
	    "                                <option value=\"supervisor\" >Supervisor</option>\n" +
	    "                                <option value=\"client\" selected=\"true\">Client</option>\n" +
	    "                            </select>\n" +
	    "                        </td>\n" +
	    "                    </tr>\n" +
	    "                    <tr>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                First Name:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"firstName\" maxlength=\"50\" placeholder=\"Type first name\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Last Name:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"lastName\" maxlength=\"50\" placeholder=\"Type last name\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Gender:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"gender\" class=\"txt\" required>\n" +
	    "                                <option value=\"Male\">Male</option>\n" +
	    "                                <option value=\"Female\">Female</option>\n" +
	    "                            </select>\n" +
	    "                        </td>\n" +
	    "                    </tr>\n" +
	    "                    <tr>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Age:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"year\" class=\"txt\" id=\"selyear\" required>\n";
    for (var i = 1950; i < 2021; i++) {
	list += "<option value=\"" + i + "\" >" + i + "</option>";
    }
    list += "</select>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"month\" class=\"txt\" id=\"selmonth\"  required>\n";
    for (var i = 1; i < 13; i++) {
	list += "<option value=\"" + i + "\" >" + i + "</option>";
    }
    list += " </select>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"day\" class=\"txt\" id=\"selday\" onclick=\"dayInsert()\" required>\n" +
	    "                            </select>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Telephone Number:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"telephone\" maxlength=\"15\" placeholder=\"Type phone nmber\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                    </tr>\n" +
	    "                    <tr>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Email:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"email\" name=\"email\" maxlength=\"62\" placeholder=\"Type email\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Address:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"address\" maxlength=\"120\" placeholder=\"Type address\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Status:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"status\" class=\"txt\" required>\n" +
	    "                                <option value=\"Offline\">Offline</option>\n" +
	    "                                <option value=\"Online\">Online</option>\n" +
	    "                            </select>\n" +
	    "                        </td>\n" +
	    "                    </tr>\n" +
	    "<tr>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                License Validity:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <select name=\"licenseValidity\" class=\"txt\" required>\n" +
	    "                                <option value=\"Valid\">Valid</option>\n" +
	    "                                <option value=\"Invalid\">Invalid</option>\n" +
	    "                            </select>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Discount Point:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"discountPoint\" maxlength=\"11\" placeholder=\"Type discount Point\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <p class=\"label\">\n" +
	    "                                Total Bills:\n" +
	    "                            </p>\n" +
	    "                        </td>\n" +
	    "                        <td>\n" +
	    "                            <input type=\"text\" name=\"totalBills\" maxlength=\"30\" placeholder=\"Type total bills\" class=\"txt\" required/>\n" +
	    "                        </td>\n" +
	    "                    </tr>" +
	    "                </table>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <input type=\"submit\" class=\"sub\" value=\"ADD\"/>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function validateFormAddClient() {
    var username = document.forms["addAccountForm"]["username"].value;
    var password = document.forms["addAccountForm"]["password"].value;
    var type = document.forms["addAccountForm"]["type"].value;
    var firstName = document.forms["addAccountForm"]["firstName"].value;
    var lastName = document.forms["addAccountForm"]["lastName"].value;
    var gender = document.forms["addAccountForm"]["gender"].value;
    var year = document.forms["addAccountForm"]["year"].value;
    var month = document.forms["addAccountForm"]["month"].value;
    var day = document.forms["addAccountForm"]["day"].value;
    var telephone = document.forms["addAccountForm"]["telephone"].value;
    var email = document.forms["addAccountForm"]["email"].value;
    var status = document.forms["addAccountForm"]["status"].value;
    var licenseValidity = document.forms["addAccountForm"]["licenseValidity"].value;
    var discountPoint = document.forms["addAccountForm"]["discountPoint"].value;
    var totalBills = document.forms["addAccountForm"]["totalBills"].value;


    if ((username == "") || (password == "") || (type == "") || (firstName == "") || (lastName == "") || (year == "") || (month == "") || (day == "") || (telephone == "") || (email == "") || (status == "") || (licenseValidity == "") || (discountPoint == "") || (totalBills == "")) {
	alert("All field must be filled out");
	return false;
    }

    var telephoneNum = parseFloat(telephone);
    var discountPointNum = parseFloat(discountPoint);
    var totalBillsNum = parseFloat(totalBills);
    if (isNaN(telephoneNum) || isNaN(discountPointNum) || isNaN(totalBillsNum)) {
	alert("telephone, discount point, total bills must be number");
	return false;
    }
    if (/\s/.test(username) || /\s/.test(password)) {
	alert("username and password must not contian whitespace");
	return false;
    }
    if (/[^0-9]/.test(telephone)) {
	alert("telephone field wrong");
	return false;
    }
    if (/^\d*(\.\d+)?$/.test(discountPoint) || /^\d*(\.\d+)?$/.test(totalBills)) {

    } else {
	alert("total Bills or discount point wrong");
	return false;
    }
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


function carList() {
    var btn = document.getElementsByClassName("carBtn").value;
    var list = "<aside class=\"asideRoot\">" +
	    "<button value=\"addCar\" class=\"ulCar\" onclick=\"showCarType()\">Add Car</button>" +
	    "<button value=\"removeCar\" class=\"ulCar\" onclick=\"removeCar()\">Remove Car</button>" +
	    "<button value=\"editCarId\" class=\"ulCar\" onclick=\"editCarId()\">Edit Car ID</button>" +
	    "<button value=\"editCarType\" class=\"ulCar\" onclick=\"editCarType()\">Edit Car Type</button>\n" +
	    "<button value=\"editCarMaker\" class=\"ulCar\" onclick=\"editCarMaker()\">Edit Car Maker</button>\n" +
	    "<button value=\"editCarModelName\" class=\"ulCar\" onclick=\"editCarModel()\">Edit Car Model Name</button>" +
	    "<button value=\"editCarModelYear\" class=\"ulCar\" onclick=\"editCarModelYear()\">Edit Car Model Year</button>" +
	    "<button value=\"editCarNumOfSeats\" class=\"ulCar\" onclick=\"editCarNumberOfSeats()\">Edit Car Number Of Seats</button>" +
	    "<button value=\"editCarRegistrationNumber\" class=\"ulCar\" onclick=\"editCarRegistrationNumber()\">Edit Car Registration Number</button>" +
	    "<button value=\"editCarIdentificationNumber\" class=\"ulCar\" onclick=\"editCarIdentificationNumber()\">Edit Car Identification Number</button>" +
	    "<button value=\"editCarLastMeterReading\" class=\"ulCar\" onclick=\"editCarLastMeterReading()\">Edit Car Last Meter Reading</button>" +
	    "<button value=\"editCarCostPerDay\" class=\"ulCar\" onclick=\"editCarCostPerDay()\">Edit Car Cost Per Day</button>" +
	    "<button value=\"editCarStatus\" class=\"ulCar\" onclick=\"editStatus()\">Edit Car Status</button>" +
	    "<button value=\"editCarCostPerKm\" class=\"ulCar\" onclick=\"editCarCostPerKm()\" >Edit Car Cost Per Km</button>" +
	    "<button value=\"editCarInsurancePerDay\" class=\"ulCar\" onclick=\"editCarInsurancePerDay()\">Edit Car Insurance Per Day</button>" +
	    "<form action=\"showAllCar.jsp\" method=\"post\">" +
	    "<input type=\"submit\" class=\"ulCar\" value=\"Show Me All Car\" />" +
	    "</form>" +
	    "<button class=\"minimize\" onclick=\"asideHide()\">^<br>Hide</button>" +
	    "</aside>";
    document.getElementById("rootAside").innerHTML = list;
}

function editStatus() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\" name=\"EditForm\" onsubmit=\"return validateFormEdit()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editStatus\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Status:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <select name =\"status\" class=\"txtEdit   \">\n" +
	    "                        <option value=\"Available\" >Available</option>\n" +
	    "                        <option value=\"Unavailable\" >Unavailable</option>\n" +
	    "                    </select>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function  editCarCostPerKm() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\" name=\"EditForm\" onsubmit=\"return validateFormEdit()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editCostPerKm\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Cost Per Km:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"number\" placeholder=\"Type Car Cost Per Km\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}



function  editCarInsurancePerDay() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\" name=\"EditForm\" onsubmit=\"return validateFormEdit()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editInsurance\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Insurance Per Day:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"number\" placeholder=\"Type Car Insurance Per Day\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}


function  editCarCostPerDay() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\" name=\"EditForm\" onsubmit=\"return validateFormEdit()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editCostPerDay\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Cost Per Day:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"number\" placeholder=\"Type Car Cost Per Day\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function  editCarLastMeterReading() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\" name=\"EditForm\" onsubmit=\"return validateFormEdit()\" >\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editLastMeterReading\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Last Meter Reading:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"number\" placeholder=\"Type car Last Meter Reading\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editCarIdentificationNumber() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editIdentification\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Identification Number:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"rdentification\" maxlength=\"25\" placeholder=\"Type car Identification Number\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editCarRegistrationNumber() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editRegistration\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Registration Number:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"registration\" maxlength=\"15\" placeholder=\"Type car Registration Number\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editCarNumberOfSeats() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editSeats\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Number Of Seats:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <select name=\"numberOfSeats\" required class=\"txtEdit\">\n";
    for (var i = 1, max = 26; i < max; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>\n";
    }


    list += "                    </select>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;

}

function editCarModelYear() {
    var list = " <section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editModelyear\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Model Year:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <select name=\"modelYear\" required class=\"txtEdit\">\n";
    for (var i = 1950; i < 2021; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>\n";
    }
    list += "</select>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;

}

function editCarModel() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editModelName\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Model Name:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"model\" maxlength=\"40\" placeholder=\"Type car model\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editCarMaker() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editMaker\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Maker:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"maker\" maxlength=\"25\" placeholder=\"Type car maker\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function editCarType() {
    var list = " <section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"editType\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Type:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <select name=\"type\" class=\"txtEdit\">\n" +
	    "                        <option value=\"Sedan\">Sedan</option>\n" +
	    "                        <option value=\"Van\">Van</option>\n" +
	    "                        <option value=\"Compact\">Compact</option>\n" +
	    "                    </select>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function removeCar() {
    var list = "<section class=\"sectionRoot\">\n" +
	    "            <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"removeCar\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id:\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"carId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Remove\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function  editCarId() {
    var list = "<section class=\"sectionRoot\">" +
	    " <form action=\"editCarResult.jsp\" method=\"post\">\n" +
	    "                <input type=\"text\" name=\"operation\" value=\"changeCarId\" readonly hidden/>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id (old):\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"oldCarId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <p class=\"labelEdit\">\n" +
	    "                    Car Id (new):\n" +
	    "                </p>\n" +
	    "                <p>\n" +
	    "                    <input type=\"text\" name=\"newCarId\" maxlength=\"30\" placeholder=\"Type car id\" class=\"txtEdit\" required/>\n" +
	    "                </p>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <br>\n" +
	    "                <p>\n" +
	    "                    <input type=\"submit\" class=\"sub\" value=\"Edit\"/>\n" +
	    "                </p>\n" +
	    "            </form>\n" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function showCarType() {
    var list = "        <section class=\"sectionRoot\">" +
	    "            <h4 dir=\"ltr\">Please select car type:</h4>" +
	    "            <table id=\"tableNav2\">" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <button value=\"compact\" class=\"option\" onclick=\"addCompactCar()\" id=\"carBtn\">Compact</button>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <button value=\"sedan\" class=\"option\" onclick=\"addSedanCar()\">Sedan</button>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <button value=\"van\" class=\"option\" onclick=\"addVanCar()\">Van</button>" +
	    "                    </td>" +
	    "                </tr>" +
	    "            </table>" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function addVanCar() {
    var list = "<section class=\"sectionRoot\">" +
	    "<form method=\"post\" action=\"addCarResult.jsp\" name=\"addCarForm\" onsubmit=\"return validateFormAddVan()\" >" +
	    "<table>" +
	    "<tr>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car ID:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"carId\" placeholder=\"Type Car ID\" maxlength=\"30\" class=\"txt\" required/> " +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car Type:" +
	    "</p>\n" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"type\" contenteditable=\"true\" class=\"txt\" required/>" +
	    "<option value=\"Compact\">Compact</option>" +
	    "<option value=\"Sedan\">Sedan</option>" +
	    "<option value=\"Van\" selected>Van</option>" +
	    "</select>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car Maker:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"maker\" placeholder=\"Type Car Maker\" maxlength=\"25\" class=\"txt\" required/>" +
	    "</td>" +
	    "</tr>" +
	    "<tr>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Model Name:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"modelName\" placeholder=\"Type Car Model\" maxlength=\"40\" class=\"txt\" required/>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Model Year:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"modelYear\" class=\"txt\" required>";
    for (var i = 1950; i < 2021; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }

    list += "</select>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Seats:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"seats\" class=\"txt\" required>";
    for (var i = 1; i < 26; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }

    list += " </select>" +
	    "                    </td>" +
	    "                </tr>" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Registration Number:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"registration\" placeholder=\"Type Registration Number\" maxlength=\"15\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Identification Number:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"identification\" placeholder=\"Type Identification Number\" maxlength=\"25\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Last Meter Reading:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"lastMeterReading\" placeholder=\"Type Last Meter Reading\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                </tr>" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Cost Per Day:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"costPerDay\" placeholder=\"Type Cost Per Day\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Cost Per Km:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"costPerKm\" placeholder=\"Type Cost Per Km\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Insurance Per Day:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"insurancePerDay\" placeholder=\"Type Insurance Per Day\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                </tr>" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Car Status:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <select name=\"status\" class=\"txt\" required/>" +
	    "                            <option value=\"Available\">Available</option>" +
	    "                            <option value=\"Unavailable\">Unavailable</option>" +
	    "                        </select>" +
	    "                    </td>" +
	    "                </tr>" +
	    "            </table>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "            <input type=\"submit\" value=\"ADD\" class=\"sub\"/>" +
	    "                </form>" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function addSedanCar() {
    var list = "<section class=\"sectionRoot\">" +
	    "<form method=\"post\" action=\"addCarResult.jsp\" name=\"addCarForm\" onsubmit=\"return validateFormAddSedan()\" >" +
	    "<table>" +
	    "<tr>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car ID:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"carId\" placeholder=\"Type Car ID\" maxlength=\"30\" class=\"txt\" required/> " +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car Type:" +
	    "</p>\n" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"type\" contenteditable=\"true\" class=\"txt\" required/>" +
	    "<option value=\"Compact\">Compact</option>" +
	    "<option value=\"Sedan\">Sedan</option>" +
	    "<option value=\"Van\" selected>Van</option>" +
	    "</select>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car Maker:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"maker\" placeholder=\"Type Car Maker\" maxlength=\"25\" class=\"txt\" required/>" +
	    "</td>" +
	    "</tr>" +
	    "<tr>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Model Name:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"modelName\" placeholder=\"Type Car Model\" maxlength=\"40\" class=\"txt\" required/>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Model Year:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"modelYear\" class=\"txt\" required>";
    for (var i = 1950; i < 2021; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }

    list += "</select>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Seats:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"seats\" class=\"txt\" required>";
    for (var i = 1; i < 26; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }

    list += " </select>" +
	    "                    </td>" +
	    "                </tr>" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Registration Number:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"registration\" placeholder=\"Type Registration Number\" maxlength=\"15\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Identification Number:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"identification\" placeholder=\"Type Identification Number\" maxlength=\"25\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Last Meter Reading:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"lastMeterReading\" placeholder=\"Type Last Meter Reading\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                </tr>" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Cost Per Day:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"costPerDay\" placeholder=\"Type Cost Per Day\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Cost Per Km:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"costPerKm\" placeholder=\"Type Cost Per Km\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Car Status:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <select name=\"status\" class=\"txt\" required/>" +
	    "                            <option value=\"Available\">Available</option>" +
	    "                            <option value=\"Unavailable\">Unavailable</option>" +
	    "                        </select>" +
	    "                    </td>" +
	    "                </tr>" +
	    "            </table>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "            <input type=\"submit\" value=\"ADD\" class=\"sub\"/>" +
	    "                </form>" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function addCompactCar() {
    var list = "<section class=\"sectionRoot\">" +
	    "<form method=\"post\" action=\"addCarResult.jsp\" name=\"addCarForm\" onsubmit=\"return validateFormAddCompact()\" >" +
	    "<table>" +
	    "<tr>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car ID:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"carId\" placeholder=\"Type Car ID\" maxlength=\"30\" class=\"txt\" required/> " +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car Type:" +
	    "</p>\n" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"type\" contenteditable=\"true\" class=\"txt\" required/>" +
	    "<option value=\"Compact\" selected>Compact</option>" +
	    "<option value=\"Sedan\" >Sedan</option>" +
	    "<option value=\"Van\">Van</option>" +
	    "</select>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Car Maker:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"maker\" placeholder=\"Type Car Maker\" maxlength=\"25\" class=\"txt\" required/>" +
	    "</td>" +
	    "</tr>" +
	    "<tr>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Model Name:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<input type=\"text\" name=\"modelName\" placeholder=\"Type Car Model\" maxlength=\"40\" class=\"txt\" required/>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Model Year:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"modelYear\" class=\"txt\" required >";
    for (var i = 1950; i < 2021; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }

    list += "</select>" +
	    "</td>" +
	    "<td>" +
	    "<p class=\"label\">" +
	    "Seats:" +
	    "</p>" +
	    "</td>" +
	    "<td>" +
	    "<select name=\"seats\" class=\"txt\" required>";
    for (var i = 1; i < 26; i++) {
	list += "<option value=\"" + i + "\">" + i + "</option>";
    }

    list += " </select>" +
	    "                    </td>" +
	    "                </tr>" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Registration Number:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"registration\" placeholder=\"Type Registration Number\" maxlength=\"15\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Identification Number:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"identification\" placeholder=\"Type Identification Number\" maxlength=\"25\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Last Meter Reading:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"lastMeterReading\" placeholder=\"Type Last Meter Reading\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                </tr>" +
	    "                <tr>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Cost Per Day:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <input type=\"text\" name=\"costPerDay\" placeholder=\"Type Cost Per Day\" class=\"txt\" required/>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <p class=\"label\">" +
	    "                            Car Status:" +
	    "                        </p>" +
	    "                    </td>" +
	    "                    <td>" +
	    "                        <select name=\"status\" class=\"txt\" required/>" +
	    "                            <option value=\"Available\">Available</option>" +
	    "                            <option value=\"Unavailable\">Unavailable</option>" +
	    "                        </select>" +
	    "                    </td>" +
	    "                </tr>" +
	    "            </table>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "             <br>" +
	    "            <input type=\"submit\" value=\"ADD\" class=\"sub\"/>" +
	    "                </form>" +
	    "<button class=\"minimize1\" onclick=\"sectionHide()\">^<br>Hide</button>" +
	    "        </section>";
    document.getElementById("section").innerHTML = list;
}

function validateFormAddCompact() {
    var id = document.forms["addCarForm"]["carId"].value;
    var type = document.forms["addCarForm"]["type"].value;
    var maker = document.forms["addCarForm"]["maker"].value;
    var model = document.forms["addCarForm"]["modelName"].value;
    var modelYear = document.forms["addCarForm"]["modelYear"].value;
    var seats = document.forms["addCarForm"]["seats"].value;
    var reg = document.forms["addCarForm"]["registration"].value;
    var ident = document.forms["addCarForm"]["identification"].value;
    var lastMeter = document.forms["addCarForm"]["lastMeterReading"].value;
    var costDay = document.forms["addCarForm"]["costPerDay"].value;
    var status = document.forms["addCarForm"]["status"].value;

    if ((id == "") || (type == "") || (maker == "") || (model == "") || (modelYear == "") || (seats == "") || (reg == "") || (ident == "") || (lastMeter == "") || (costDay == "") || (status == "")) {
	alert("All field must be filled out");
	return false;
    }
    var modelYearNum = parseFloat(modelYear);
    var seatsNum = parseFloat(seats);
    var lastMeterNum = parseFloat(lastMeter);
    var costDayNum = parseFloat(costDay);
    if (isNaN(modelYearNum) || isNaN(seatsNum) || isNaN(lastMeterNum) || isNaN(costDayNum)) {
	alert("last meter, cost per day All must be number");
	return false;
    }
    if (/\s/.test(id)) {
	alert("car id must not contian whitespace");
	return false;
    }
    if (/^\d*(\.\d+)?$/.test(lastMeter) || /^\d*(\.\d+)?$/.test(costDay)) {

    } else {
	alert("last meter, cost per day wrong");
	return false;
    }
}

function validateFormAddSedan() {
    var id = document.forms["addCarForm"]["carId"].value;
    var type = document.forms["addCarForm"]["type"].value;
    var maker = document.forms["addCarForm"]["maker"].value;
    var model = document.forms["addCarForm"]["modelName"].value;
    var modelYear = document.forms["addCarForm"]["modelYear"].value;
    var seats = document.forms["addCarForm"]["seats"].value;
    var reg = document.forms["addCarForm"]["registration"].value;
    var ident = document.forms["addCarForm"]["identification"].value;
    var lastMeter = document.forms["addCarForm"]["lastMeterReading"].value;
    var costkm = document.forms["addCarForm"]["costPerKm"].value;
    var costDay = document.forms["addCarForm"]["costPerDay"].value;
    var status = document.forms["addCarForm"]["status"].value;


    if ((id == "") || (type == "") || (maker == "") || (model == "") || (modelYear == "") || (seats == "") || (reg == "") || (ident == "") || (lastMeter == "") || (costkm == "") || (costDay == "") || (status == "")) {
	alert("All field must be filled out");
	return false;
    }
    var modelYearNum = parseFloat(modelYear);
    var seatsNum = parseFloat(seats);
    var lastMeterNum = parseFloat(lastMeter);
    var costDayNum = parseFloat(costDay);
    var costKmNum = parseFloat(costkm);
    if (isNaN(modelYearNum) || isNaN(seatsNum) || isNaN(lastMeterNum) || isNaN(costDayNum) || isNaN(costKmNum)) {
	alert("last meter, cost per day All must be number");
	return false;
    }
    if (/\s/.test(id)) {
	alert("car id must not contian whitespace");
	return false;
    }
    if (/^\d*(\.\d+)?$/.test(lastMeter) || /^\d*(\.\d+)?$/.test(costDay) || /^\d*(\.\d+)?$/.test(costkm)) {

    } else {
	alert("last meter or cost per day or cost per km wrong");
	return false;
    }
}

function validateFormAddVan() {
    var id = document.forms["addCarForm"]["carId"].value;
    var type = document.forms["addCarForm"]["type"].value;
    var maker = document.forms["addCarForm"]["maker"].value;
    var model = document.forms["addCarForm"]["modelName"].value;
    var modelYear = document.forms["addCarForm"]["modelYear"].value;
    var seats = document.forms["addCarForm"]["seats"].value;
    var reg = document.forms["addCarForm"]["registration"].value;
    var ident = document.forms["addCarForm"]["identification"].value;
    var lastMeter = document.forms["addCarForm"]["lastMeterReading"].value;
    var costkm = document.forms["addCarForm"]["costPerKm"].value;
    var insurance = document.forms["addCarForm"]["insurancePerDay"].value;
    var costDay = document.forms["addCarForm"]["costPerDay"].value;
    var status = document.forms["addCarForm"]["status"].value;


    if ((id == "") || (type == "") || (maker == "") || (model == "") || (modelYear == "") || (seats == "") || (reg == "") || (ident == "") || (lastMeter == "") || (insurance == "") || (costkm == "") || (costDay == "") || (status == "")) {
	alert("All field must be filled out");
	return false;
    }
    var modelYearNum = parseFloat(modelYear);
    var seatsNum = parseFloat(seats);
    var lastMeterNum = parseFloat(lastMeter);
    var costDayNum = parseFloat(costDay);
    var costKmNum = parseFloat(costkm);
    var insuranceNum = parseFloat(insurance);
    if (isNaN(modelYearNum) || isNaN(seatsNum) || isNaN(lastMeterNum) || isNaN(costDayNum) || isNaN(costKmNum) || isNaN(insuranceNum)) {
	alert("last meter, cost per day All must be number");
	return false;
    }
    if (/\s/.test(id)) {
	alert("car id must not contian whitespace");
	return false;
    }
    if (/^\d*(\.\d+)?$/.test(lastMeter) || /^\d*(\.\d+)?$/.test(costDay) || /^\d*(\.\d+)?$/.test(costkm) || /^\d*(\.\d+)?$/.test(insurance)) {

    } else {
	alert("last meter or cost per day or cost per km or insurance wrong");
	return false;
    }
}


function validateFormEdit() {
    var id = document.forms["EditForm"]["carId"].value;
    var number = document.forms["EditForm"]["number"].value;


    if ((id == "") || (number == "")) {
	alert("All field must be filled out");
	return false;
    }
    var numberNum = parseFloat(number);

    if (isNaN(numberNum)) {
	alert("number field must be number");
	return false;
    }
    if (/\s/.test(id)) {
	alert("car id must not contian whitespace");
	return false;
    }
    if (/^\d*(\.\d+)?$/.test(number)) {

    } else {
	alert("Number field wrong");
	return false;
    }
}