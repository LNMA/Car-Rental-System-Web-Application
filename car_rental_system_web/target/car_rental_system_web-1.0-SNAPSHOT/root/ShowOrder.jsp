<%@page import="referance.OrderReference"%>
<%@page import="java.util.ArrayList"%>
<%@page import="database.Order"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="order" class="database.Order" scope="application"></jsp:useBean>
<%
    String operation = request.getParameter("operation");
    ArrayList<OrderReference> list = null;
    if (operation.equals("all")) {
        list = new ArrayList<OrderReference>(order.getAll());
    }
    if (operation.equals("showByUsername")) {
        String username = request.getParameter("username");
        list = new ArrayList<OrderReference>(order.getOrderByUsername(username));
    }
    if (operation.equals("showByCarId")) {
        String carId = request.getParameter("carId");
        list = new ArrayList<OrderReference>(order.getOrderByCarID(carId));
    }

%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Show Order</title>
        <style>
            @import url("root-css.css");
        </style>
    </head>
    <body id="showAllCarBody">
        <table id="allCarTable">
            <tr class="alltr">
                <th class="alltd">Username</th>
                <th class="alltd">Car ID</th>
                <th class="alltd">Order ID</th>
                <th class="alltd">Date Create</th>
                <th class="alltd">Day</th>
                <th class="alltd">Trip Distance</th>
                <th class="alltd">Payment Method</th>
                <th class="alltd">Bill</th>
                <th class="alltd">Car Type</th>
                <th class="alltd">Car Maker</th>
                <th class="alltd">Car Model Name</th>
                <th class="alltd">Car Model Year</th>
                <th class="alltd">Number Of Seats</th>
                <th class="alltd">Registration Number</th>
                <th class="alltd">Identification Number</th>
            </tr>
            <% for (OrderReference object : list) {%>
            <tr class="alltr">
                <td class="alltd"><%= object.getUsername()%></td>
                <td class="alltd"><%= object.getCarID()%></td>
                <td class="alltd"><%= object.getOrderID()%></td>
                <td class="alltd"><%= object.getDateCreate()%></td>
                <td class="alltd"><%= object.getDay()%></td>
                <td class="alltd"><%= object.getTripDistance()%></td>
                <td class="alltd"><%= object.getPaymentMethods()%></td>
                <td class="alltd"><%= object.getBill()%></td>
                <td class="alltd"><%= object.getCarType()%></td>
                <td class="alltd"><%= object.getCarMaker()%></td>
                <td class="alltd"><%= object.getCarModel()%></td>
                <td class="alltd"><%= object.getCarModelYear()%></td>
                <td class="alltd"><%= object.getCarNumberOfSeats()%></td>
                <td class="alltd"><%= object.getCarRegistrationNumber()%></td>
                <td class="alltd"><%= object.getCarIdentificationNumber()%></td>
            </tr>
            <% }%>
        </table>
    </body>
</html>
