<%@page import="database.Account"%>
<%@page import="referance.AddAccountRef"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="addAccount" class="referance.AddAccountRef" scope="page"></jsp:useBean>
<jsp:setProperty name="addAccount" property="*"></jsp:setProperty>
<jsp:useBean id="db" class="database.Account" scope="application"></jsp:useBean>
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
    String m11 = "";
    String m12 = "";
    if (!(addAccount.getUsername() == null || addAccount.getPassword() == null || addAccount.getType() == null || addAccount.getLastName() == null || addAccount.getFirstName() == null || addAccount.getGender() == null || addAccount.getEmail() == null || addAccount.getStatus() == null)) {
        String type = addAccount.getType();
        if (type.equals("root")) {
            m1 = db.signUpRoot(addAccount.getUsername(), addAccount.getPassword());
            if (m1.equals("Sign Up successfully")) {
                m2 = db.setFirstName(addAccount.getUsername(), addAccount.getFirstName());
                m3 = db.setLastName(addAccount.getUsername(), addAccount.getLastName());
                m4 = db.setGender(addAccount.getUsername(), addAccount.getGender());
                m5 = db.setAge(addAccount.getUsername(), addAccount.getYear(), addAccount.getMonth(), addAccount.getDay());
                m6 = db.setTelephone(addAccount.getUsername(), addAccount.getTelephone());
                m7 = db.setEmail(addAccount.getUsername(), addAccount.getEmail());
                m8 = db.setAddress(addAccount.getUsername(), addAccount.getAddress());
                m9 = db.setStatus(addAccount.getUsername(), addAccount.getStatus());
            }
        }
        if (type.equals("supervisor")) {
            m1 = db.signUpSupervisor(addAccount.getUsername(), addAccount.getPassword());
            if (m1.equals("Sign Up successfully")) {
                m2 = db.setFirstName(addAccount.getUsername(), addAccount.getFirstName());
                m3 = db.setLastName(addAccount.getUsername(), addAccount.getLastName());
                m4 = db.setGender(addAccount.getUsername(), addAccount.getGender());
                m5 = db.setAge(addAccount.getUsername(), addAccount.getYear(), addAccount.getMonth(), addAccount.getDay());
                m6 = db.setTelephone(addAccount.getUsername(), addAccount.getTelephone());
                m7 = db.setEmail(addAccount.getUsername(), addAccount.getEmail());
                m8 = db.setAddress(addAccount.getUsername(), addAccount.getAddress());
                m9 = db.setStatus(addAccount.getUsername(), addAccount.getStatus());
                m10 = db.setRank(addAccount.getUsername(), addAccount.getRank());
                m11 = db.setSection(addAccount.getUsername(), addAccount.getSection());
            }
        }
        if (type.equals("client")) {
            m1 = db.signUpClient(addAccount.getUsername(), addAccount.getPassword());
            if (m1.equals("Sign Up successfully")) {
                m2 = db.setFirstName(addAccount.getUsername(), addAccount.getFirstName());
                m3 = db.setLastName(addAccount.getUsername(), addAccount.getLastName());
                m4 = db.setGender(addAccount.getUsername(), addAccount.getGender());
                m5 = db.setAge(addAccount.getUsername(), addAccount.getYear(), addAccount.getMonth(), addAccount.getDay());
                m6 = db.setTelephone(addAccount.getUsername(), addAccount.getTelephone());
                m7 = db.setEmail(addAccount.getUsername(), addAccount.getEmail());
                m8 = db.setAddress(addAccount.getUsername(), addAccount.getAddress());
                m9 = db.setStatus(addAccount.getUsername(), addAccount.getStatus());
                m10= db.setLicenseValidity(addAccount.getUsername(), addAccount.getLicenseValidity());
                m11 = db.setDiscountPoint(addAccount.getUsername(), addAccount.getDiscountPoint());
                m12 = db.setTotalBills(addAccount.getUsername(), addAccount.getTotalBills());
                
            }
        }
    }


%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Add Car Verification</title>
        <style>
            @import url(../registration/registration_css.css);
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
            <%= m1%>
            <br>
            <%= m2%>
            <br>
            <%= m3%>
            <br>
            <%= m4%>
            <br>
            <%= m5%>
            <br>
            <%= m6%>
            <br>
            <%= m7%>
            <br>
            <%= m8%>
            <br>
            <%= m9%>
            <br>
            <%= m10%>
            <br>
            <%= m11%>
            <br>
            <%= m12%>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <% response.setHeader("Refresh", "5; URL=../root/root-main-screen.jsp");%>
        </div>
    </body>
</html>