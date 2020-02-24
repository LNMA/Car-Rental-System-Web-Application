<%@page contentType="text/html" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html>
        <head>
            <title>Start Page</title>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <style>
                @import url(registration_css.css);
            </style>
        </head>
        <script src="registration_js.js"></script>
        <body class="bodyReg">
            <div class="formUp">
                <form action="reg-cliant.jsp" method="post" name="signUpForm" onsubmit="return validateForm1()" >
                    <br>
                    <p class="login">
                        Sign Up
                    </p>
                    <table >
                        <tr>
                            <td>
                                <p class="label">
                                    Username
                                </p>
                            </td>
                            <td>
                                <input type="text" maxlength="30" name="username" placeholder="               Type your username" class="txtup" required/>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="label">
                                    password
                                </p>
                            </td>
                            <td>
                                <input type="password" maxlength="30" name="password" placeholder="               Type your password" class="txtup" required/> 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="label">
                                    First Name
                                </p>
                            </td>
                            <td>
                                <input type="text" name="firstName" maxlength="50" placeholder="                 Type your first name" class="txtup" required/>

                            </td>
                            <td>
                                <p class="label">
                                    Last Name
                                </p>
                            </td>
                            <td>
                                <input type="text" name="lastName" maxlength="50" placeholder="                 Type your last name" class="txtup" required/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="label">
                                    Gender
                                </p>
                            </td>
                            <td>
                                <select class="selectGender" name="gender">
                                    <option value="Male" selected>Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p class="label">
                                    Birth Date
                                </p>
                            </td>
                            <td>
                                <select class="selectDate" name="year" id="selyear" required>
                                <% for (int i = 1950; i < 2021; i++) {%>
                                <option value="<%= i%>" selected>
                                    <%= i%>
                                </option>
                                <% } %>        
                            </select>
                        </td>
                        <td>
                            <select class="selectDate" name="month" id="selmonth" required>
                                <% for (int i = 1; i < 13; i++) {%>
                                <option value="<%= i%>" >
                                    <%= i%>
                                </option>
                                <% }%>        
                            </select>
                        </td>
                        <td>
                            <select class="selectDate" name="day" id="selday" onclick="dayInsert()" required>      
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="label">
                                Telephone
                            </p>
                        </td>
                        <td>
                            <input type="text" name="telephone" maxlength="15"  placeholder="                Type your telephone" class="txtup" id="telephoneTxt" onkeypress="justNumber()" required/>
                        </td>
                        <td>
                            <p class="label">
                                Email
                            </p>
                        </td>
                        <td>
                            <input type="email" name="email" maxlength="62" placeholder="                    Type your email" class="txtup" required/>
                        </td>
                    </tr>
                    <tr>
                    <tr>
                        <td>
                            <p class="label">
                                Address
                            </p>
                        </td>
                        <td>
                            <input type="text" name="address" maxlength="120" placeholder="                            Type your address" class="txt" required/>
                        </td>
                    </tr>
                </table>
                <input type="submit" class="sub" value="Sign up"/>
                <br>
                <br>
            </form>
        </div>
    </body>
</html>
