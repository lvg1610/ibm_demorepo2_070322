import java.sql.*;
public class EmployeeDAO
{
    public Connection getConnection()
    {
         return DriverManager.getConnection();
    }

    public List<Employee> getAllEmployees()
    {
    }

    public boolean insertEmployee()
    {
    }
    
    public boolean deleteEmployee(int employeeId)
    {
    } 
} 