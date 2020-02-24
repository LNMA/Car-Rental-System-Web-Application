package referance;

import java.io.Serializable;

public class AddAccountRef implements Serializable {

    private String username;
    private String password;
    private String type;
    private String firstName;
    private String lastName;
    private String gender;
    private int year;
    private int month;
    private int day;
    private int telephone;
    private String email;
    private String address;
    private String status;
    private String licenseValidity;
    private int discountPoint;
    private double totalBills;
    private String rank;
    private String section;

    public AddAccountRef() {
    }

    public String getUsername() {
	return username;
    }

    public void setUsername(String username) {
	this.username = username;
    }

    public String getPassword() {
	return password;
    }

    public void setPassword(String password) {
	this.password = password;
    }

    public String getType() {
	return type;
    }

    public void setType(String type) {
	this.type = type;
    }

    public String getFirstName() {
	return firstName;
    }

    public void setFirstName(String firstName) {
	this.firstName = firstName;
    }

    public String getLastName() {
	return lastName;
    }

    public void setLastName(String lastName) {
	this.lastName = lastName;
    }

    public String getGender() {
	return gender;
    }

    public void setGender(String gender) {
	this.gender = gender;
    }

    public int getYear() {
	return year;
    }

    public void setYear(int year) {
	this.year = year;
    }

    public int getMonth() {
	return month;
    }

    public void setMonth(int month) {
	this.month = month;
    }

    public int getDay() {
	return day;
    }

    public void setDay(int day) {
	this.day = day;
    }

    public int getTelephone() {
	return telephone;
    }

    public void setTelephone(int telephone) {
	this.telephone = telephone;
    }

    public String getEmail() {
	return email;
    }

    public void setEmail(String email) {
	this.email = email;
    }

    public String getAddress() {
	return address;
    }

    public void setAddress(String address) {
	this.address = address;
    }

    public String getStatus() {
	return status;
    }

    public void setStatus(String status) {
	this.status = status;
    }

    public String getLicenseValidity() {
	return licenseValidity;
    }

    public void setLicenseValidity(String licenseValidity) {
	this.licenseValidity = licenseValidity;
    }

    public int getDiscountPoint() {
	return discountPoint;
    }

    public void setDiscountPoint(int discountPoint) {
	this.discountPoint = discountPoint;
    }

    public double getTotalBills() {
	return totalBills;
    }

    public void setTotalBills(double totalBills) {
	this.totalBills = totalBills;
    }

    public String getRank() {
	return rank;
    }

    public void setRank(String rank) {
	this.rank = rank;
    }

    public String getSection() {
	return section;
    }

    public void setSection(String section) {
	this.section = section;
    }
     
    
}
