import entity.Employee;
import dao.EmployeeDAO;
import java.util.List;
public class EmployeeService
{
    private Employee emp;
    private EmployeeDAO edao;

    public List<Employee> getAllEmployees()
    {
           return edao.getAllEmployees();
    }
}