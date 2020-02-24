<%@page import="referance.*"%>
<%@page import="database.*"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="db" class="database.Account" scope="request"></jsp:useBean> 
<%
    ArrayList<UserReference> all = new ArrayList<UserReference>(db.getAllClient());
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
                <th class="alltd">Username</th>
                <th class="alltd">Password</th>
                <th class="alltd">Date Create</th>
                <th class="alltd">Type</th>
                <th class="alltd">First Name</th>
                <th class="alltd">Last Name</th>
                <th class="alltd">Gender</th>
                <th class="alltd">Age</th>
                <th class="alltd">Telephone</th>
                <th class="alltd">Email</th>
                <th class="alltd">Address</th>
                <th class="alltd">Status</th>
                <th class="alltd">License Validity</th>
                <th class="alltd">Discount Point</th>
                <th class="alltd">Total Bills</th>
                <th class="alltd">Section</th>
                <th class="alltd">Rank</th>
            </tr>
            <% for (UserReference object : all) { %>
            <tr class="alltr">
                <td class="alltd"><%= object.getUsername() %></td>
                <td class="alltd"><%= object.getPassword() %></td>
                <td class="alltd"><%= object.getDateCreate() %></td>
                <td class="alltd"><%= object.getType() %></td>
                <td class="alltd"><%= object.getFirstName() %></td>
                <td class="alltd"><%= object.getLastName() %></td>
                <td class="alltd"><%= object.getGender() %></td>
                <td class="alltd"><%= object.getAge() %></td>
                <td class="alltd"><%= object.getTelephone() %></td>
                <td class="alltd"><%= object.getEmail() %></td>
                <td class="alltd"><%= object.getAddress() %></td>
                <td class="alltd"><%= object.getStatus() %></td>
                <td class="alltd"><%= object.getLicenseValidity() %></td>
                <td class="alltd"><%= object.getDiscountPoint() %></td>
                <td class="alltd"><%= object.getTotalBills() %></td>
                <td class="alltd"><%= object.getSection() %></td>
                <td class="alltd"><%= object.getRank() %></td>
            </tr>
            <% } %>
        </table>
    </body>
</html>
