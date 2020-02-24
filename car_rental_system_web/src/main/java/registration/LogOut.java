package registration;

import database.Account;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class LogOut extends HttpServlet {
    private Account account;

    @Override
    public void init() throws ServletException {
	super.init(); //To change body of generated methods, choose Tools | Templates.
	initializeDB();
    }

    private void initializeDB(){
	 account = new Account();
    }
    
    
    

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	HttpSession usernameSession = request.getSession();
	String username = (String)usernameSession.getAttribute("username");
	account.setStatus(username, "Offline");
	request.logout();
	HttpSession session = request.getSession();
	session.invalidate();
	response.sendRedirect("..\\car_rental_system_web\\registration\\registration.html");
		
	
	
    }

  

    @Override
    public String getServletInfo() {
	return "Log Out";
    }

}
