package referance;

import java.io.Serializable;

public class AddCarRef implements Serializable{

    private String carId;
    private String type;
    private String maker;
    private String modelName;
    private int modelYear;
    private int seats;
    private String registration;
    private String identification;
    private double lastMeterReading;
    private double costPerDay;
    private double costPerKm;
    private double insurancePerDay;
    private String status;

    public AddCarRef() {
    }

    
    public String getCarId() {
	return carId;
    }

    public void setCarId(String carId) {
	this.carId = carId;
    }

    public String getType() {
	return type;
    }

    public void setType(String type) {
	this.type = type;
    }

    public String getMaker() {
	return maker;
    }

    public void setMaker(String maker) {
	this.maker = maker;
    }

    public String getModelName() {
	return modelName;
    }

    public void setModelName(String modelName) {
	this.modelName = modelName;
    }

    public int getModelYear() {
	return modelYear;
    }

    public void setModelYear(int modelYear) {
	this.modelYear = modelYear;
    }

    public int getSeats() {
	return seats;
    }

    public void setSeats(int seats) {
	this.seats = seats;
    }

    public String getRegistration() {
	return registration;
    }

    public void setRegistration(String registration) {
	this.registration = registration;
    }

    public String getIdentification() {
	return identification;
    }

    public void setIdentification(String identification) {
	this.identification = identification;
    }

    public double getLastMeterReading() {
	return lastMeterReading;
    }

    public void setLastMeterReading(double lastMeterReading) {
	this.lastMeterReading = lastMeterReading;
    }

    public double getCostPerDay() {
	return costPerDay;
    }

    public void setCostPerDay(double costPerDay) {
	this.costPerDay = costPerDay;
    }

    public double getCostPerKm() {
	return costPerKm;
    }

    public void setCostPerKm(double costPerKm) {
	this.costPerKm = costPerKm;
    }

    public double getInsurancePerDay() {
	return insurancePerDay;
    }

    public void setInsurancePerDay(double insurancePerDay) {
	this.insurancePerDay = insurancePerDay;
    }

    public String getStatus() {
	return status;
    }

    public void setStatus(String status) {
	this.status = status;
    }

}
