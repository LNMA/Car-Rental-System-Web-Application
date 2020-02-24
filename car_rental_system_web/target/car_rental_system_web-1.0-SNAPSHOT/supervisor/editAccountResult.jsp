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
        isExistMassage = db.getExistType(oldUsername);
        if (isExistMassage.equals("client")) {
            massage = db.updateUsername(oldUsername, newUsername);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editPassword")) {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.updatePassword(username, password);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editGender")) {
        String username = request.getParameter("username");
        String gender = request.getParameter("gender");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setGender(username, gender);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editFirstName")) {
        String username = request.getParameter("username");
        String firstName = request.getParameter("firstName");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setFirstName(username, firstName);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editLastName")) {
        String username = request.getParameter("username");
        String lastName = request.getParameter("lastName");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setLastName(username, lastName);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editEmail")) {
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setEmail(username, email);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editAddress")) {
        String username = request.getParameter("username");
        String address = request.getParameter("address");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setAddress(username, address);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editStatus")) {
        String username = request.getParameter("username");
        String status = request.getParameter("status");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setStatus(username, status);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editLicenseValidity")) {
        String username = request.getParameter("username");
        String licenseValidity = request.getParameter("licenseValidity");
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setLicenseValidity(username, licenseValidity);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
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
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setAge(username, yearNum, monthNum, dayNum);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editTelephone")) {
        String username = request.getParameter("username");
        String telephone = request.getParameter("number");
        int telephoneNum = Integer.parseInt(telephone);
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setTelephone(username, telephoneNum);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editTotalBills")) {
        String username = request.getParameter("username");
        String totalBills = request.getParameter("number");
        double totalBillsNum = Double.parseDouble(totalBills);
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setTotalBills(username, totalBillsNum);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
        }
    }
    if (operation.equals("editDiscountPoint")) {
        String username = request.getParameter("username");
        String discountPoint = request.getParameter("number");
        int discountPointNum = Integer.parseInt(discountPoint);
        isExistMassage = db.getExistType(username);
        if (isExistMassage.equals("client")) {
            massage = db.setDiscountPoint(username, discountPointNum);
        } else {
            massage = "something wrong or you are not have permission to perform this operation";
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
            <% response.setHeader("Refresh", "5; URL=../supervisor/supervisor-main-screen.jsp");%>
        </div>
    </body>
</html>
