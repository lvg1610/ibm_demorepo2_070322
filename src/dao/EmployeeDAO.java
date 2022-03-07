import java.sql.*;
public class EmployeeDAO
{
    public Connection getConnection()
    {
         return DriverManager.getConnection();
    }

    public ArrayList<Employee> getEmployeesDetails()
    {
    }

    public boolean addEmployeeDetails()
    {
    }
    
    public boolean deleteEmployee(int employeeId)
    {
    } 
} 