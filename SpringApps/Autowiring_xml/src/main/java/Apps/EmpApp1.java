package Apps;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import TestPack.Employee;
import TestPack.StdInfo;


public class EmpApp1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext appObj = new ClassPathXmlApplicationContext("beanConfig.xml");
		Employee  emp = (Employee)appObj.getBean("empObj");
		emp.ShowEmp();
		
		

	}

}
