<%@page import="database.Account"%>
<%@page import="registration.SignInRef"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="check" class="registration.SignInRef" scope="request"></jsp:useBean>
<jsp:useBean id="db" class="database.Account" scope="request"></jsp:useBean>    
<jsp:setProperty name="check" property="*"></jsp:setProperty>
<% String type = db.getType(check.getUsername(), check.getPassword()); %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Sign In</title>
        <style>
	    @import url(registration_css.css);
	</style>
    </head>
    <body class="bodyReg">
        <div class="form">
            <br>
            <br>
            <br>
        <h4>please wait until verified your information...</h4>
        <%  String process ="";
        if(check.getPassword() != null && check.getUsername()!= null){
            if (check.getUsername().isEmpty() || check.getPassword().isEmpty()) {
                process = "All field must be filled out";
                response.setHeader("Refresh" ,"2; ..\\registration\\registration.html");
            } else {
                if (!type.equals("Account does not exist")) {
                    db.setStatus(check.getUsername(), "Online");
                    process = "welcome..";
                    HttpSession usernameSession = request.getSession();
                     usernameSession.setAttribute("username", check.getUsername());
		    if (type.equals("root")) { 
                    response.sendRedirect("../root/root-main-screen.jsp");
                    }
                    if (type.equals("supervisor")) {
                    response.sendRedirect("../supervisor/supervisor-main-screen.jsp");
                     }
                    if (type.equals("client")) { 
                    response.sendRedirect("../client/ClientMainScreen.jsp");  
                     }
                } else {
                    process = type;
                    response.setHeader("Refresh" ,"3; ..\\registration\\registration.html");
                        }	
                    }
            }%>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
                    <h2><%= process %></h2>  
        </div>
    </body>
</html>
