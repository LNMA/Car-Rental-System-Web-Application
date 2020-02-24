<%@page import="database.Car"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="car" class="database.Car" scope="application"></jsp:useBean>
<% String operation = request.getParameter("operation");
    String massage = "";
    boolean isCarExist;
    String isCarExistMassage = "";
    if (operation.equals("changeCarId")) {
        String carIdOld = request.getParameter("oldCarId");
        String carIdNew = request.getParameter("newCarId");
        isCarExist = car.isCarExist_car(carIdOld);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.updateCarID(carIdOld, carIdNew);
        }
    }
    if (operation.equals("removeCar")) {
        String carId = request.getParameter("carId");
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.deleteCar(carId);
        }
    }
    if (operation.equals("editType")) {
        String carId = request.getParameter("carId");
        String type = request.getParameter("type");
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setType(carId, type);
        }
    }
    if (operation.equals("editMaker")) {
        String carId = request.getParameter("carId");
        String maker = request.getParameter("maker");
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setMaker(carId, maker);
        }
    }
    if (operation.equals("editModelName")) {
        String carId = request.getParameter("carId");
        String model = request.getParameter("model");
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setModelName(carId, model);
        }
    }
    if (operation.equals("editModelyear")) {
        String carId = request.getParameter("carId");
        String modelYear = request.getParameter("modelYear");
        int yearNum = Integer.parseInt(modelYear);
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setModelYear(carId, yearNum);
        }
    }
    if (operation.equals("editSeats")) {
        String carId = request.getParameter("carId");
        String numberOfSeats = request.getParameter("numberOfSeats");
        int numberOfSeatsNum = Integer.parseInt(numberOfSeats);
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setNumberOfSeats(carId, numberOfSeatsNum);
        }
    }
    if (operation.equals("editRegistration")) {
        String carId = request.getParameter("carId");
        String registration = request.getParameter("registration");
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setRegistrationNumber(carId, registration);
        }
    }
    if (operation.equals("editIdentification")) {
        String carId = request.getParameter("carId");
        String rdentification = request.getParameter("rdentification");
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setIdentificationNumber(carId, rdentification);
        }
    }
    if (operation.equals("editLastMeterReading")) {
        String carId = request.getParameter("carId");
        String lastMeter = request.getParameter("number");
        double lastMeterNumber = Double.parseDouble(lastMeter);
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setLastMeterReading(carId, lastMeterNumber);
        }
    }
    if (operation.equals("editCostPerDay")) {
        String carId = request.getParameter("carId");
        String costPerDay = request.getParameter("number");
        double costPerDayNumber = Double.parseDouble(costPerDay);
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setCostPerDay(carId, costPerDayNumber);
        }
    }
    if (operation.equals("editCostPerKm")) {
        String carId = request.getParameter("carId");
        String costPerKm = request.getParameter("number");
        double costPerKmNumber = Double.parseDouble(costPerKm);
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            String type = car.getType(carId);
            if (type.equals("Van") || type.equals("Sedan")) {
                if (type.equals("Van")) {
                    massage = car.setCostPerKmVan(carId, costPerKmNumber);
                }
                if (type.equals("Sedan")) {
                    massage = car.setCostPerKmSedan(carId, costPerKmNumber);
                }
            } else {
                massage = "car not have cost per km";
            }
        }

    }
    if (operation.equals("editInsurance")) {
        String carId = request.getParameter("carId");
        String insurancePerDay = request.getParameter("number");
        double insurancePerDayNumber = Double.parseDouble(insurancePerDay);
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            String type = car.getType(carId);
            if (type.equals("Van")) {
                massage = car.setInsurancePerDayVan(carId, insurancePerDayNumber);
            } else {
                massage = "car not have insurance per day";
            }
        }
    }
    if (operation.equals("editStatus")) {
        String carId = request.getParameter("carId");
        String status = request.getParameter("status");
        isCarExist = car.isCarExist_car(carId);
        isCarExistMassage = car.getTheMassage();
        if (isCarExist) {
            massage = car.setStatus(carId, status);
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
            <%= isCarExistMassage%>
            <br>
            <br>
            <br>
            <br>
            <%= massage%>
            <br>
            <% response.setHeader("Refresh", "2; URL=../root/root-main-screen.jsp");%>
        </div>
    </body>
</html>