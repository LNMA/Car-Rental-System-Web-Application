function insertPoint() {
    document.getElementById("labelpoint").removeAttribute("hidden");
    document.getElementById("selpoint").removeAttribute("hidden");
}

function hidePoint() {
    document.getElementById("labelpoint").setAttribute("hidden", "");
    document.getElementById("selpoint").setAttribute("hidden", "");
}

function validateFormOrder() {
    var carId = document.forms["addOrderForm"]["carId"].value;
    var day = document.forms["addOrderForm"]["day"].value;
    var tripDistance = document.forms["addOrderForm"]["tripDistance"].value;
    var paymentMethod = document.forms["addOrderForm"]["paymentMethod"].value;
    var selectPoint = document.forms["addOrderForm"]["pointChoice"].value;


    if ((carId == "") || (day == "") || (tripDistance == "") || (paymentMethod == "")) {
	alert("All field must be filled out");
	return false;
    }

    var dayNum = parseFloat(day);
    var tripDistanceNum = parseFloat(tripDistance);

    if (isNaN(dayNum) || isNaN(tripDistanceNum)) {
	alert("day and trip distance fields must be number");
	return false;
    }
     if (/^\d*(\.\d+)?$/.test(tripDistance)) {

    } else {
	alert("trip distance field wrong");
	return false;
    }
    if (/[^0-9]/.test(day)) {
	alert("day field wrong");
	return false;
    }
    if (selectPoint == "yes") {
	var point = document.forms["addOrderForm"]["discountPoint"].value;
	if ((point == "")) {
	alert("All field must be filled out");
	return false;
    }
    }
}