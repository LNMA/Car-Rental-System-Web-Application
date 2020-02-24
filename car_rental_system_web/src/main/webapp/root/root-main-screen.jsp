<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    HttpSession usernaSession = request.getSession();
    String username = (String) usernaSession.getAttribute("username");
    HttpSession url = request.getSession();
    url.setAttribute("url",request.getRequestURI());
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Main Screen</title>
        <style>
            @import url("root-css.css");
        </style>
        <script src="root-js.js"></script>
    </head>
    <body id="bodyRoot">
        <header id="headerRoot" >
            <h4 id="welcome">Welcome  <%= username%></h4>
            <div class="dropdown" >
                <button class="profile"></button>
                <div class="dropdown-content">
                    <form action="../LogOut" method="get">
                        <input type="submit" value="Log Out"/>
                    </form>    
                </div>
            </div> 
        </header>
        <br>
        <nav id="navRoot">
            <table id="tableNav">
                <tr>
                    <td>
                        <button value="car" class="option" onclick="carList()" id="carBtn" >Car</button>
                    </td>
                    <td>
                        <button value="account" class="option" onclick="accountList()">Account</button>
                    </td>
                    <td>
                        <button value="order" class="option" onclick="orderList()">Order</button>
                    </td>
                    <td>
                        <button value="db" class="option" onclick="BDList()">DB</button>
                    </td>
                </tr>
                </tr>
            </table>
        </nav>
        <div  id="rootAside"></div>
        <div id="section"></div>
    </body>
</html>
