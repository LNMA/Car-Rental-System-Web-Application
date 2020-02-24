<%@page import="referance.AddCarRef"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="addCar" class="referance.AddCarRef" scope="request"></jsp:useBean>
<jsp:useBean id="car" class="database.Car" scope="application"></jsp:useBean>    
<jsp:setProperty name="addCar" property="*"></jsp:setProperty>
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
    String m13 = "";
    if (!(addCar.getCarId() == null || addCar.getType() == null || addCar.getMaker() == null || addCar.getModelName() == null || addCar.getRegistration() == null || addCar.getIdentification() == null || addCar.getStatus() == null)) {
        m1 = car.insertCarID(addCar.getCarId());
        String type = addCar.getType();
        m2 = "";
        m3 = "";
        m4 = "";
        m5 = "";
        m6 = "";
        m7 = "";
        m8 = "";
        m9 = "";
        m10 = "";
        m11 = "";
        m12 = "";
        m13 = "";
        if (!m1.equals("Car ID already used, try another one")) {
            if (type.equals("Compact")) {
                m2 = car.setType(addCar.getCarId(), addCar.getType());
                m3 = car.setMaker(addCar.getCarId(), addCar.getMaker());
                m4 = car.setModelName(addCar.getCarId(), addCar.getModelName());
                m5 = car.setModelYear(addCar.getCarId(), addCar.getModelYear());
                m6 = car.setNumberOfSeats(addCar.getCarId(), addCar.getSeats());
                m7 = car.setRegistrationNumber(addCar.getCarId(), addCar.getRegistration());
                m8 = car.setIdentificationNumber(addCar.getCarId(), addCar.getIdentification());
                m9 = car.setLastMeterReading(addCar.getCarId(), addCar.getLastMeterReading());
                m10 = car.setCostPerDay(addCar.getCarId(), addCar.getCostPerDay());
                m11 = car.setStatus(addCar.getCarId(), addCar.getStatus());
            }
            if (type.equals("Sedan")) {
                m2 = car.setType(addCar.getCarId(), addCar.getType());
                m3 = car.setMaker(addCar.getCarId(), addCar.getMaker());
                m4 = car.setModelName(addCar.getCarId(), addCar.getModelName());
                m5 = car.setModelYear(addCar.getCarId(), addCar.getModelYear());
                m6 = car.setNumberOfSeats(addCar.getCarId(), addCar.getSeats());
                m7 = car.setRegistrationNumber(addCar.getCarId(), addCar.getRegistration());
                m8 = car.setIdentificationNumber(addCar.getCarId(), addCar.getIdentification());
                m9 = car.setLastMeterReading(addCar.getCarId(), addCar.getLastMeterReading());
                m10 = car.setCostPerDay(addCar.getCarId(), addCar.getCostPerDay());
                m11 = car.setCostPerKmSedan(addCar.getCarId(), addCar.getCostPerKm());
                m12 = car.setStatus(addCar.getCarId(), addCar.getStatus());

            }
            if (type.equals("Van")) {
                m2 = car.setType(addCar.getCarId(), addCar.getType());
                m3 = car.setMaker(addCar.getCarId(), addCar.getMaker());
                m4 = car.setModelName(addCar.getCarId(), addCar.getModelName());
                m5 = car.setModelYear(addCar.getCarId(), addCar.getModelYear());
                m6 = car.setNumberOfSeats(addCar.getCarId(), addCar.getSeats());
                m7 = car.setRegistrationNumber(addCar.getCarId(), addCar.getRegistration());
                m8 = car.setIdentificationNumber(addCar.getCarId(), addCar.getIdentification());
                m9 = car.setLastMeterReading(addCar.getCarId(), addCar.getLastMeterReading());
                m10 = car.setCostPerDay(addCar.getCarId(), addCar.getCostPerDay());
                m11 = car.setCostPerKmVan(addCar.getCarId(), addCar.getCostPerKm());
                m12 = car.setInsurancePerDayVan(addCar.getCarId(), addCar.getInsurancePerDay());
                m13 = car.setStatus(addCar.getCarId(), addCar.getStatus());
            }
        }
    }else{
        m1 = "all field must fill";
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
            <%= m11 %>
            <br>
            <%= m12 %>
            <br>
            <%= m13 %>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <% response.setHeader("Refresh", "5; URL=../supervisor/supervisor-main-screen.jsp");%>
        </div>
    </body>
</html>

