package Apps;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import TestPack.Employee;
import TestPack.Student;

public class StdApp1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext appObj = new ClassPathXmlApplicationContext("beanConfig.xml");
		Student std = (Student)appObj.getBean("stdObj");
		System.out.println(std.getSname());
		System.out.println(std.getCourses());
		System.out.println(std.getQua());
		System.out.println(std.getCourse_trainer());
		System.out.println(std.getCourse_fees());
	}

}
