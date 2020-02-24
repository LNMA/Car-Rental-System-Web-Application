<%@page import="database.Order"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="order" class="database.Order" scope="application"></jsp:useBean>
<%
    String operation = request.getParameter("operation");
    String massege = "";
    boolean isExist = false;
    String isExistMassege = "";
    if (operation.equals("removeOrder")) {
        String orderIDString = request.getParameter("orderId");
        int orderID = Integer.parseInt(orderIDString);
        isExist = order.isOrderExist(orderID);
        isExistMassege = order.getMassage();
        if (isExist) {
            massege = order.deleteOrder(orderID);
        }
    }
    if (operation.equals("editOrderId")) {
        String orderIDString = request.getParameter("orderId");
        int orderID = Integer.parseInt(orderIDString);
        isExist = order.isOrderExist(orderID);
        isExistMassege = order.getMassage();
        if (isExist) {
            String dayString = request.getParameter("day");
            int day = Integer.parseInt(dayString);
            massege = order.setDay(orderID, day);
        }
    }
    if (operation.equals("editPaymentMethod")) {
        String orderIDString = request.getParameter("orderId");
        int orderID = Integer.parseInt(orderIDString);
        isExist = order.isOrderExist(orderID);
        isExistMassege = order.getMassage();
        if (isExist) {
            String paymentMethod = request.getParameter("paymentMethod");
            massege = order.setPaymentMethods(orderID, paymentMethod);
        }
    }
    if (operation.equals("editBill")) {
        String orderIDString = request.getParameter("orderId");
        int orderID = Integer.parseInt(orderIDString);
        isExist = order.isOrderExist(orderID);
        isExistMassege = order.getMassage();
        if (isExist) {
            String bill = request.getParameter("number");
            double billNumber = Double.parseDouble(bill);
            massege = order.setBill(orderID, billNumber);
        }
    }
    if (operation.equals("editLastMeterReading")) {
        String orderIDString = request.getParameter("orderId");
        int orderID = Integer.parseInt(orderIDString);
        isExist = order.isOrderExist(orderID);
        isExistMassege = order.getMassage();
        if (isExist) {
            String bill = request.getParameter("number");
            double billNumber = Double.parseDouble(bill);
            massege = order.setDistance(orderID, billNumber);
        }
    }
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Edit Order Verification</title>
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
            <%= isExistMassege%>
            <br>
            <br>
            <br>
            <br>
            <%= massege%>
            <br>
            <% response.setHeader("Refresh", "5; URL=../root/root-main-screen.jsp");%>
        </div>
    </body>
</html>
