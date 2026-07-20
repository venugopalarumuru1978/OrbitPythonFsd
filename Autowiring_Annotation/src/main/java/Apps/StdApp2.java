package Apps;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;


import TestPack.StdInfo;


public class StdApp2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ApplicationContext appObj = new ClassPathXmlApplicationContext("stdConfig.xml");
		StdInfo std = (StdInfo)appObj.getBean("stdObj");
		std.Display();
		

	}

}
