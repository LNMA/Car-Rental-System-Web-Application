<%@page import="referance.CarReference"%>
<%@page import="java.util.ArrayList"%>
<%@page import="database.Account"%>
<%@page import="database.Car"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="car" class="database.Car" scope="application"></jsp:useBean>
<jsp:useBean id="user" class="database.Account" scope="application"></jsp:useBean>
<%
    HttpSession myUrl = request.getSession();
    String url = (String) myUrl.getAttribute("url");
    String username = request.getParameter("username");
    String type = user.getTypeRoot(username);
    String license = user.getLicenseValidity(username);


%>
<%    if (type.equals("client") && license.equals("Valid") ) {
        ArrayList<CarReference> carList = new ArrayList<CarReference>(car.getAllAvailableCar());
        int point = 0;
        point = user.getDiscountPoint(username);

%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Add Order</title>
        <style>
            @import url("order-css.css");
        </style>
        <script src="order-js.js"></script>
    </head>
    <body class="addOrderBody">
        <div  class="addOrdersheet">
            <form name="addOrderForm" onsubmit="return validateFormOrder()" action="OrderResult.jsp" method="post">
                <table id="addOrderTable">
                    <tr>
                        <td>
                            <p class="label">
                                Username:
                            </p>
                        </td>
                        <td>
                            <input type="text" name="username" value="<%= username %>" class="txtBig" readonly/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                Car ID:
                            </p>
                        </td>
                        <td>
                            <select name="carId" class="txtBig" >
                                <% for (CarReference id : carList) {%>
                                <option value="<%= id.getIdCar()%>"><%= id.getIdCar()%></option> 
                                <% }  %>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                Day:
                            </p>
                        </td>
                        <td>
                            <input type="text" placeholder="Type number of day" maxlength="11" name="day" class="txtBig" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                Trip Distance:
                            </p>
                        </td>
                        <td>
                            <input type="text" name="tripDistance" placeholder="Type trip distance in km" class="txtBig" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                Payment Method:
                            </p>
                        </td>
                        <td>
                            <select name="paymentMethod" class="txtBig">
                                <option value="Check">Check</option>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </td>
                    </tr>
                    <% if (point > 0) {%>
                    <tr>
                        <td>
                            <p class="label">
                                You have [ <%= point%> ] Discount point in your account.<br> Would you like to use it?
                            </p>
                        </td>
                        <td>
                            <input type="radio" name="pointChoice" value="yes" onclick="insertPoint()"/>Yes &nbsp;
                            <input type="radio" name="pointChoice" value="no" onclick="hidePoint()" checked="true"/>No
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label"  id="labelpoint" hidden>
                                Select point: 
                            </p>
                        </td>
                        <td>
                            <select class="txtBig" name="discountPoint" hidden id="selpoint">
                                <% for (int i = 1; i <= point; i++) {%>
                                <option value="<%= i%>"><%= i%></option> 
                                <% }  %>
                            </select>
                        </td>
                    </tr>
                    <% } %>
                    <tr>
                        <td>  
                        </td>
                        <td>
                            <br>
                            <input type="submit" class="sub" value="Booking"/>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </body>
</html>


<% } else {%>


<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Add Order</title>
        <style>
            @import url("order-css.css");
        </style>
    </head>
    <body class="addOrderBody">
        <div  class="addOrdersheet">
            <h1>oops...</h1>
            <h4>There something wrong or you are not allow to perform this operation or tour license invalid</h4>
        </div>
    </body>
</html>

<%
        response.setHeader("Refresh", "5; URL=" + url);
    }


%>