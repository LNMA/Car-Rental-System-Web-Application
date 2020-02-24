<%@page import="database.Account"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="db" class="database.Account" scope="application"></jsp:useBean>
<%
    
    String operation = request.getParameter("operation");
    String massage = "";
    String isExistMassage = "";
    boolean isExist = false;
    if (operation.equals("editUsername")) {
        String oldUsername = request.getParameter("oldUsername");
        String newUsername = request.getParameter("newUsername");
        isExist = db.isAccountExist(oldUsername);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.updateUsername(oldUsername, newUsername);
	    }
	}
    if (operation.equals("removeAccount")) {
        String username = request.getParameter("username");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.deleteAccount(username);
	    }  
	}
    if (operation.equals("editPassword")) {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.updatePassword(username, password);
	    }  
	}
    if (operation.equals("editType")) {
        String username = request.getParameter("username");
        String type = request.getParameter("type");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.updateType(username, type);
	    }  
	}
    if (operation.equals("editGender")) {
        String username = request.getParameter("username");
        String gender = request.getParameter("gender");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setGender(username, gender);
	    }  
	}
    if (operation.equals("editFirstName")) {
        String username = request.getParameter("username");
        String firstName = request.getParameter("firstName");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setFirstName(username, firstName);
	    }  
	}
    if (operation.equals("editLastName")) {
        String username = request.getParameter("username");
        String lastName = request.getParameter("lastName");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setLastName(username, lastName);
	    }  
	}
    if (operation.equals("editEmail")) {
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setEmail(username, email);
	    }  
	}
    if (operation.equals("editAddress")) {
        String username = request.getParameter("username");
        String address = request.getParameter("address");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setAddress(username, address);
	    }  
	}
    if (operation.equals("editRank")) {
        String username = request.getParameter("username");
        String rank = request.getParameter("rank");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("supervisor")) {
            massage = db.setRank(username, rank);
	    }  
	}
    if (operation.equals("editSection")) {
        String username = request.getParameter("username");
        String section = request.getParameter("section");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("supervisor")) {
            massage = db.setSection(username, section);
	    }  
	}
    if (operation.equals("editStatus")) {
        String username = request.getParameter("username");
        String status = request.getParameter("status");
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setStatus(username, status);
	    }  
	}
    if (operation.equals("editLicenseValidity")) {
        String username = request.getParameter("username");
        String licenseValidity = request.getParameter("licenseValidity");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setLicenseValidity(username, licenseValidity);
	    }  
	}
    if (operation.equals("editAge")) {
        String username = request.getParameter("username");
        String year = request.getParameter("year");
        String month = request.getParameter("month");
        String day = request.getParameter("day");
        int yearNum = Integer.parseInt(year);
        int monthNum = Integer.parseInt(month);
        int dayNum = Integer.parseInt(day);
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setAge(username, yearNum,monthNum,dayNum);
	    }  
	}
    if (operation.equals("editTelephone")) {
        String username = request.getParameter("username");
        String telephone = request.getParameter("number");
        int telephoneNum = Integer.parseInt(telephone);
        isExist = db.isAccountExist(username);
        isExistMassage = db.getAMassage();
        if (isExist) {
            massage = db.setTelephone(username, telephoneNum);
	    }  
	}
    if (operation.equals("editTotalBills")) {
        String username = request.getParameter("username");
        String totalBills = request.getParameter("number");
        double totalBillsNum = Double.parseDouble(totalBills);
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setTotalBills(username, totalBillsNum);
	    }  
	}
    if (operation.equals("editDiscountPoint")) {
        String username = request.getParameter("username");
        String discountPoint = request.getParameter("number");
        int discountPointNum = Integer.parseInt(discountPoint);
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setDiscountPoint(username, discountPointNum);
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
            <br>
            <br>
            <br>
            <%= isExistMassage%>
            <br>
            <br>
            <br>
            <br>
            <%= massage%>
            <br>
            <% response.setHeader("Refresh", "5; URL=../root/root-main-screen.jsp");%>
        </div>
    </body>
</html>
