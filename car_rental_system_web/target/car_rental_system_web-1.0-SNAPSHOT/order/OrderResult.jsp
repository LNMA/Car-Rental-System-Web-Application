<%@page import="referance.CarReference"%>
<%@page import="java.util.ArrayList"%>
<%@page import="database.Order"%>
<%@page import="database.Car"%>
<%@page import="database.Account"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="account" class="database.Account" scope="application"></jsp:useBean>
<jsp:useBean id="car" class="database.Car" scope="application"></jsp:useBean>
<jsp:useBean id="order" class="database.Order" scope="application"></jsp:useBean>    
<%
    HttpSession myUrl = request.getSession();
    String url = (String) myUrl.getAttribute("url");

    String username = request.getParameter("username");
    String carID = request.getParameter("carId");
    String carStatus = car.getStatus(carID);

    if (carStatus.equals("Available")) {

        String carType = car.getType(carID);
        double lastMeterReding = car.getLastMeterReading(carID);
        String firstName = account.getFirstName(username);
        String lastName = account.getLastName(username);
        String email = account.getEmail(username);
        int telephone = account.getTelephone(username);
        double totalBills = account.getTotalBills(username);
        String dayString = request.getParameter("day");
        int day = Integer.parseInt(dayString);
        String tripDistanceString = request.getParameter("tripDistance");
        double tripDistance = Double.parseDouble(tripDistanceString);
        String paymentMethod = request.getParameter("paymentMethod");
        String pointChoice = request.getParameter("pointChoice");
        int discountPoint = 0;
        if ((pointChoice != null) && (request.getParameter("discountPoint") != null)) {
            if (pointChoice.equals("yes")) {
                String discountPointString = request.getParameter("discountPoint");
                discountPoint = Integer.parseInt(discountPointString);
            }
        }

        double billBeforeDiscount = 0;
        double billAfterDiscount = 0;
        double discount = 0;
        int idOrder = 0;

        if (carType.equals("Compact")) {
            double costPerDay = car.getCostPerDay(carID);
            double bill = costPerDay * day;
            billBeforeDiscount = bill;
            billAfterDiscount = bill;
            if (discountPoint != 0) {
                discount = ((double) discountPoint / 100) * bill;
                billAfterDiscount = bill - discount;
                bill = billAfterDiscount;
                int point = account.getDiscountPoint(username);
                int pointAfterUse = point - discountPoint;
                account.setDiscountPoint(username, pointAfterUse);
            }
            idOrder = order.addOrder(username, carID, day, tripDistance, paymentMethod, bill);
            car.setStatus(carID, "Unavailable");
            double netLastMeterReading = lastMeterReding + tripDistance;
            car.setLastMeterReading(carID, netLastMeterReading);
            totalBills += bill;
            account.setTotalBills(username, totalBills);
        }
        if (carType.equals("Sedan")) {
            double costPerDay = car.getCostPerDay(carID);
            double costPerKmSedan = car.getCostPerKmSedan(carID);
            double bill = (costPerDay * day) + (costPerKmSedan * day);
            billBeforeDiscount = bill;
            billAfterDiscount = bill;
            if (discountPoint != 0) {
                discount = ((double) discountPoint / 100) * bill;
                billAfterDiscount = bill - discount;
                bill = billAfterDiscount;
                int point = account.getDiscountPoint(username);
                int pointAfterUse = point - discountPoint;
                account.setDiscountPoint(username, pointAfterUse);
            }
            idOrder = order.addOrder(username, carID, day, tripDistance, paymentMethod, bill);
            car.setStatus(carID, "Unavailable");
            double netLastMeterReading = lastMeterReding + tripDistance;
            car.setLastMeterReading(carID, netLastMeterReading);
            totalBills += bill;
            account.setTotalBills(username, totalBills);
        }
        if (carType.equals("Van")) {
            double costPerDay = car.getCostPerDay(carID);
            double costPerKmSedan = car.getCostPerKmVan(carID);
            double insurancePerDay = car.getInsurancePerDayVan(carID);
            double bill = (costPerDay * day) + (costPerKmSedan * day) + (insurancePerDay * day);
            billBeforeDiscount = bill;
            billAfterDiscount = bill;
            if (discountPoint != 0) {
                discount = ((double) discountPoint / 100) * bill;
                billAfterDiscount = bill - discount;
                bill = billAfterDiscount;
                int point = account.getDiscountPoint(username);
                int pointAfterUse = point - discountPoint;
                account.setDiscountPoint(username, pointAfterUse);
            }
            idOrder = order.addOrder(username, carID, day, tripDistance, paymentMethod, bill);
            car.setStatus(carID, "Unavailable");
            double netLastMeterReading = lastMeterReding + tripDistance;
            car.setLastMeterReading(carID, netLastMeterReading);
            totalBills += bill;
            account.setTotalBills(username, totalBills);
        }
        
        int point = account.getDiscountPoint(username);
        if (totalBills <= 100) {
            point += 3;
		account.setDiscountPoint(username, point);
	    }
        if (totalBills <= 500 && totalBills > 100) {
            point += 5;
		account.setDiscountPoint(username, point);
	    }
        if (totalBills > 500) {
            point += 7;
		account.setDiscountPoint(username, point);
	    }
       

        String dataCreate = order.getOrderDateCteate(idOrder);
        ArrayList<CarReference> carList = new ArrayList<CarReference>(car.getCarInfo(carID));


%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Order Invoice</title>
        <style>
            @import url("order-css.css");
        </style>
    </head>
    <body class="resultBody">
        <div class="resultSection">
            <p id="headResult">
                INVOICE
            </p>
            <table id="invt1">
                <tr>
                    <td class="tdCar">
                        Username: <%= username%> 
                    </td>
                    <td class="tdCar">
                        Invoice #: <%= idOrder%>
                    </td>
                </tr>
                <tr>
                    <td class="tdCar">
                        Name: <%= firstName + " " + lastName%> 
                    </td>
                    <td class="tdCar">
                        Date Create: <%= dataCreate%>
                    </td>
                </tr>
                <tr>
                    <td class="tdCar"> 
                        Telephone Number: <%= telephone%> 
                    </td>
                    <td class="tdCar">
                        Payment Method: <%= paymentMethod%>
                    </td>
                </tr>
                <tr>
                    <td class="tdCar">
                        Email: <%= email%> 
                    </td>
                    <td class="tdCar">
                        Trip Distance: <%= tripDistanceString%> Km
                    </td>
                </tr>
            </table>
            <br>
            <div id="ruler"></div>
            <br>
            <br>
            <p class="label"></p>
            <table id="cartable">
                <tr>
                    <th colspan="7" class="cartd" style="text-align: center;">
                        Car Detail
                    </th>
                </tr>
                <tr class="alltr">
                    <th class="cartd">Car ID</th>
                    <th class="cartd">Car Type</th>
                    <th class="cartd">Car Maker</th>
                    <th class="cartd">Car Model Name</th>
                    <th class="cartd">Car Model Year</th>
                    <th class="cartd">Car Registration Number</th>
                    <th class="cartd">Car Identification Number</th>
                </tr>
                <tr class="alltr">
                    <td class="cartd"><%= carList.get(0).getIdCar()%></td>
                    <td class="cartd"><%= carList.get(0).getType()%></td>
                    <td class="cartd"><%= carList.get(0).getMaker()%></td>
                    <td class="cartd"><%= carList.get(0).getModel()%></td>
                    <td class="cartd"><%= carList.get(0).getModelYear()%></td>
                    <td class="cartd"><%= carList.get(0).getRegistration()%></td>
                    <td class="cartd"><%= carList.get(0).getIdentification()%></td>
                </tr>
            </table>
            <br>
            <br>
            <br>
            <table class="billTable">
                <tr>
                    <th id="thBill1">
                        Description
                    </th>
                    <th id="thBill2">
                        Amount
                    </th>
                </tr>
                <tr>
                    <td class="tdBill1">
                        Total
                    </td>
                    <td class="tdBill2">
                        <%= billBeforeDiscount%>
                    </td>
                </tr>
                <tr>
                    <td class="tdBill1">
                        Discount
                    </td>
                    <td class="tdBill2">
                        <%= discount%>
                    </td>
                </tr>
                <tr>
                    <td class="tdBill1">
                        Net Total
                    </td>
                    <td class="tdBill2">
                        <%= billAfterDiscount%>
                    </td>
                </tr>
                <tr >
                    <td></td>
                    <td class="tdBill3">
                        Total: <%= billAfterDiscount%>  $
                    </td>
                </tr>
            </table>
            <div id="endResultBody"></div>
        </div>
        <br>
        <br>
        <a href="<%= url%>"><button value="Home" class="back">Home</button></a>
    </body>
</html>

<% } else {


%>


<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Order Invoice</title>
        <style>
            @import url("order-css.css");
        </style>
    </head>
    <body class="resultBody">
        <div class="resultSection">
            <p>
                oops...
                <br>
                Something wrong or your car now invalid please try again.
            </p>
        </div>
    </body>
</html> 


<%	response.setHeader("Refresh", "5; URL=" + url);
    }%>