<%@page import="referance.*"%>
<%@page import="database.Car"%>
<%@page import="java.util.ArrayList"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="car" class="database.Car" scope="request"></jsp:useBean> 
<%
    ArrayList<CarReference> all = new ArrayList<CarReference>(car.getAll());
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Show All</title>
        <style>
            @import url("supervisor-css.css");
        </style>
    </head>
    <body id="showAllCarBody">
        <table id="allCarTable">
            <tr class="alltr">
                <th class="alltd">Car ID</th>
                <th class="alltd">Date Create</th>
                <th class="alltd">Car Type</th>
                <th class="alltd">Maker</th>
                <th class="alltd">Model Name</th>
                <th class="alltd">Model Year</th>
                <th class="alltd">Seats</th>
                <th class="alltd">Registration</th>
                <th class="alltd">Identification</th>
                <th class="alltd">Last Meter Reading</th>
                <th class="alltd">Cost Per Day</th>
                <th class="alltd">Cost Per Km Sedan</th>
                <th class="alltd">Cost Per Km Van</th>
                <th class="alltd">Insurance Per Day</th>
                <th class="alltd">Status</th>
            </tr>
            <% for (CarReference object : all) { %>
            <tr class="alltr">
                <td class="alltd"><%= object.getIdCar()  %></td>
                <td class="alltd"><%= object.getDateCreate() %></td>
                <td class="alltd"><%= object.getType() %></td>
                <td class="alltd"><%= object.getMaker() %></td>
                <td class="alltd"><%= object.getModel() %></td>
                <td class="alltd"><%= object.getModelYear() %></td>
                <td class="alltd"><%= object.getNumberOfSeats() %></td>
                <td class="alltd"><%= object.getRegistration() %></td>
                <td class="alltd"><%= object.getIdentification() %></td>
                <td class="alltd"><%= object.getLastMeter() %></td>
                <td class="alltd"><%= object.getCostPerDay() %></td>
                <td class="alltd"><%= object.getCostPerKmSedan() %></td>
                <td class="alltd"><%= object.getCostPerKmVan() %></td>
                <td class="alltd"><%= object.getInsurance() %></td>
                <td class="alltd"><%= object.getStatus() %></td>
            </tr>
            <% } %>
        </table>
    </body>
</html>
