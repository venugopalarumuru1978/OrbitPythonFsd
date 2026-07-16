package Apps;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import PojoClasses.Student;

public class StdApp1 {

	public static void main(String[] args) {
		ApplicationContext app = new ClassPathXmlApplicationContext("beanConfig.xml");
		Student std = (Student)app.getBean("stdObj");
		System.out.println(std.getSname());
		System.out.println(std.getCourse());
	}

}
