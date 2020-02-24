<%@page import="connection.SBE"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
     HttpSession myUrl = request.getSession();
    String url = (String) myUrl.getAttribute("url");

    String operation = request.getParameter("operation");
    if (operation.equals("EditUrl")) {
        String newUrl = request.getParameter("url");
        SBE.setDbUrl(newUrl);
    }
    if (operation.equals("editPassword")) {
        String newPassword = request.getParameter("password");
        SBE.setDbPassword(newPassword);
    }
    if (operation.equals("editUsername")) {
        String newUsername = request.getParameter("username");
        SBE.setDbUser(newUsername);
    }
    String url1 = SBE.getDbUrl();
    String username = SBE.getDbUser();
    String password = SBE.getDbPassword();
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Database</title>
        <style>
            @import url("root-css.css");
            @import url(../registration/registration_css.css);
        </style>
    </head>
    <body id="bodyRoot">
        <div class="form">
            <br>
            <p class="labelEdit">
                URL:
            </p>
            <%= url1 %>
            <br>
            <p class="labelEdit">
                Username:
            </p>
            <%= username%>
            <br>
            <p class="labelEdit">
                Password:
            </p>
            <%= password%>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <a href="<%= url%>"><button value="Home" class="back">Home</button></a>
        </div>
    </body>    
</html>
