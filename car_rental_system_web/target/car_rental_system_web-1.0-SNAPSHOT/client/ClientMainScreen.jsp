<%@page import="referance.UserReference"%>
<%@page import="java.util.ArrayList"%>
<%@page import="database.Account"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="account" class="database.Account" scope="application"></jsp:useBean>
<%
    HttpSession usernaSession = request.getSession();
    String username = (String) usernaSession.getAttribute("username");
    HttpSession url = request.getSession();
    url.setAttribute("url", request.getRequestURI());

    ArrayList<UserReference> user = new ArrayList<UserReference>(account.getUserInfo(username));
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Main Screen</title>
        <style>
            @import url("client-css.css");
        </style>
        <script src="client-js.js"></script>
    </head>
    <body class="bodyClient">
        <header class="headerClient">
            <h4 id="welcome">Welcome  <%= username%></h4>
            <div class="dropdown" >
                <button class="profile"></button>
                <div class="dropdown-content">
                    <input type="button" value="My Information" onclick="showInformation()"/>  
                    <input type="button" value="Edit My Information" onclick="showEditInformation()" />
                    <form action="../LogOut" method="get">
                        <input type="submit" value="Log Out"/>
                    </form>    
                </div>
            </div> 
        </header>
        <br>
        <nav id="navClient">
            <table id="tableNav">
                <tr>
                    <td>
                        <form action="../order/AddOrder.jsp" method="post">
                            <input type="text" name="username" value="<%= username%>" readonly required hidden/>
                            <input type="submit" value="Make An Order" class="option"/>
                        </form>
                    </td>
                    <td>
                        <div class="dropdownCarShow">
                            <button class="dropdownCarButton" >Show Car</button>
                            <div class="dropdownCarShow-content">
                                <form action="../client/ShowAllCar.jsp" method="get">
                                    <input type="submit" value="Show All Car" class="hidden"/>
                                </form> 
                                <form action="../client/ShowAllAvailableCar.jsp" method="get">
                                    <input type="submit" value="Show Available Car" class="hidden"/>
                                </form> 
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </nav>
        <div class="sectionClient" id="infoSection" hidden>
            <table class="informationTable">
                <tr>
                    <td>
                        <p class="labelBig">
                            Username:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getUsername()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Type:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getType()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Date Create:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getDateCreate()%>" class="txtBig" readonly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="labelBig">
                            First Name:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getFirstName()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Last Name:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getLastName()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Address:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getAddress()%>" class="txtBig" readonly/>
                    </td>
                </tr>
                <tr>
                    </td>
                    <td>
                        <p class="labelBig">
                            Email:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getEmail()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Gender:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getGender()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Age:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getAge()%>" class="txtBig" readonly/>
                </tr>
                <tr>
                    <td>
                        <p class="labelBig">
                            Telephone:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getTelephone()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            License Validity:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getLicenseValidity()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Status:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getStatus()%>" class="txt" readonly/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <p class="labelBig">
                            Discount Point:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getDiscountPoint()%>" class="txt" readonly/>
                    </td>
                    <td>
                        <p class="labelBig">
                            Total Bills:
                        </p>
                    </td>
                    <td>
                        <input type="text" value="<%= user.get(0).getTotalBills()%>" class="txt" readonly/>
                    </td>
                </tr>
            </table>
            <button id="minimize" onclick="infoHide()">^<br>Hide</button>
        </div>
        <div class="sectionClient" id="editInfoSection" hidden >
            <form action="EditAccountResult.jsp" method="post" name="editInfoForm" onsubmit="return validateEditForm()">
                <input type="text" name="username" value="<%= username %>"  required hidden readonly/>
                <table class="infoEditTable">
                    <tr>
                        <td>
                            <p class="labelBig">
                                First Name:
                            </p>
                        </td>
                        <td>
                            <input type="text" name="firstName" maxlength="50" value="<%= user.get(0).getFirstName()%>" class="txtBig" required/>

                        </td>
                        <td>
                            <p class="labelBig">
                                Last Name:
                            </p>
                        </td>
                        <td>
                            <input type="text" name="lastName" maxlength="50" value="<%= user.get(0).getLastName()%>" class="txtBig" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="labelBig">
                                Gender:
                            </p>
                        </td>
                        <td>
                            <select class="txtBig" name="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </td>
                        <td>
                            <p class="labelBig">
                                Telephone:
                            </p>
                        </td>
                        <td>
                            <input type="text" name="telephone" maxlength="15"  value="<%= user.get(0).getTelephone()%>" class="txtBig"  required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="labelBig">
                                Email:
                            </p>
                        </td>
                        <td>
                            <input type="email" name="email" maxlength="62" value="<%= user.get(0).getEmail()%>"  class="txtBig" required/>
                        </td>
                        <td>
                            <p class="labelBig">
                                Address:
                            </p>
                        </td>
                        <td>
                            <input type="text" name="address" maxlength="120" value="<%= user.get(0).getAddress()%>"  class="txtBig" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="labelBig">
                                Birth Date
                            </p>
                        </td>
                        <td>
                            <select class="txtBig" name="year" id="selyear" required>
                                <% for (int i = 1950; i < 2021; i++) {%>
                                <option value="<%= i%>" selected>
                                    <%= i%>
                                </option>
                                <% } %>        
                            </select>
                        </td>
                        <td>
                            <select class="txt" name="month" id="selmonth" required>
                                <% for (int i = 1; i < 13; i++) {%>
                                <option value="<%= i%>" >
                                    <%= i%>
                                </option>
                                <% }%>        
                            </select>
                        </td>
                        <td>
                            <select class="txt" name="day" id="selday" onclick="dayInsert()" required>      
                            </select>
                        </td>
                    </tr>
                </table>
                <br>
                <br>
                <input type="submit" value="Edit" class="sub"/>
            </form>
            <br>
            <br>
            <br>
            <button id="minimize" onclick="editInfoHide()">^<br>Hide</button>
        </div>
    </body>
</html>
