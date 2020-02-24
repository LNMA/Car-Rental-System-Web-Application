<%@page import="database.Account"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="db" class="database.Account" scope="application"></jsp:useBean>
<%
    HttpSession urlHttpSession = request.getSession();
    String url = (String)urlHttpSession.getAttribute("url");
    
    String username = request.getParameter("username");
    String firstName = request.getParameter("firstName");
    String lastName = request.getParameter("lastName");
    String gender = request.getParameter("gender");
    String telephone = request.getParameter("telephone");
    String email = request.getParameter("email");
    String address = request.getParameter("address");
    String year = request.getParameter("year");
    String month = request.getParameter("month");
    String day = request.getParameter("day");

    String m1 = "";
    String m2 = "";
    String m3 = "";
    String m4 = "";
    String m5 = "";
    String m6 = "";
    String m7 = "";
    String isExistMassage = "";
    boolean isExist = false;

    if (!(username != null && firstName != null && lastName != null && gender != null && telephone != null && email != null && address != null && year != null && month != null && day != null)) {
        int yearNum = Integer.parseInt(year);
        int monthNum = Integer.parseInt(month);
        int dayNum = Integer.parseInt(day);
        int telephoneNum = Integer.parseInt(telephone);

        isExist = db.isAccountExist(username);
        if (isExist) {
            m1 = db.setFirstName(username, firstName);
            m2 = db.setLastName(username, lastName);
            m3 = db.setGender(username, gender);
            m4 = db.setTelephone(username, telephoneNum);
            m5 = db.setEmail(username, email);
            m6 = db.setAddress(username, address);
            m7 = db.setAge(username, yearNum, monthNum, dayNum);

        }
    }


%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Edit Car Verification</title>
        <style>
            @import url(../registration/registration_css.css);
        </style>
    </head>
    <body class="bodyReg">
        <div class="form">
            <br>
            <br>
            <br>
            <%= isExistMassage%>
            <%= m1%>
            <%= m2%>
            <%= m3%>
            <%= m4%>
            <%= m5%>
            <%= m6%>
            <%= m7%>
            <% response.setHeader("Refresh", "5;"+url);%>
        </div>
    </body>
</html>
