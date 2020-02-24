<%@page import="database.Account"%>
<%@page import="registration.SignUpRef"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="signUp" class="registration.SignUpRef" scope="request"></jsp:useBean>
<jsp:useBean id="db" class="database.Account" scope="application"></jsp:useBean>    
<jsp:setProperty name="signUp" property="*"></jsp:setProperty>
<% 
    String m1 = "";
    String m2 = "";
    String m3 = "";
    String m4 = "";
    String m5 = "";
    String m6 = "";
    String m7 = "";
    String m8 = "";
    String m9 = "";
    String m10 = "";
    if (!(signUp.getUsername()==null|| signUp.getPassword()==null || signUp.getFirstName()==null || signUp.getLastName()==null || signUp.getGender()==null || signUp.getEmail()==null || signUp.getAddress()==null)) {
        m1 = db.signUpClient(signUp.getUsername(), signUp.getPassword());
  
         if (!m1.equals("username already used, try another one")) {
            m2 = db.setFirstName(signUp.getUsername(), signUp.getFirstName());
            m3 = db.setLastName(signUp.getUsername(), signUp.getLastName());
            m4 = db.setGender(signUp.getUsername(), signUp.getGender());
            m5 = db.setAge(signUp.getUsername(), signUp.getYear(), signUp.getMonth(), signUp.getDay());
            m6 = db.setTelephone(signUp.getUsername(), signUp.getTelephone());
            m7 = db.setEmail(signUp.getUsername(), signUp.getEmail());
            m8 = db.setAddress(signUp.getUsername(), signUp.getAddress());
            m9 = db.setLicenseValidity(signUp.getUsername(), "Invalid");
            m10 = db.setStatus(signUp.getUsername(), "Offline");
        }
    }
%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Sign Up Verification</title>
        <style>
            @import url(registration_css.css);
        </style>
    </head>
    <body class="bodyReg">
        <div class="form">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <%= m1 %>
            <br>
            <%= m2 %>
            <br>
            <%= m3 %>
            <br>
            <%= m4 %>
            <br>
            <%= m5 %>
            <br>
            <%= m6 %>
            <br>
            <%= m7 %>
            <br>
            <%= m8 %>
            <br>
            <%= m9 %>
            <br>
            <%= m10 %>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <% response.setHeader("Refresh", "5; URL=../registration/registration.html"); %>
        </div>
    </body>
</html>

