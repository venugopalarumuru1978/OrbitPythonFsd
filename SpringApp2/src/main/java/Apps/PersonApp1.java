package Apps;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import TestPack.Employee;
import TestPack.Person;

public class PersonApp1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext appObj = new ClassPathXmlApplicationContext("beanConfig.xml");
		Person pObj = (Person)appObj.getBean("perObj");
		pObj.PrintValues();
		
	}

}
