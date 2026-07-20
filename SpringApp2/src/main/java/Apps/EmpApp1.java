package Apps;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import TestPack.Employee;

public class EmpApp1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext appObj = new ClassPathXmlApplicationContext("beanConfig.xml");
		Employee emp = (Employee)appObj.getBean("empObj");
		System.out.println(emp.getEname());
		System.out.println(emp.getJob());
		System.out.println(emp.getSal());
	}

}
