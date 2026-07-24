package com.apps;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.beans.Cricket;
import com.beans.CricketOperations;

public class AllCric {

	public static void main(String[] args) {
		ApplicationContext  appObj = new ClassPathXmlApplicationContext("beanConfig.xml");
		
		CricketOperations  co =  (CricketOperations)appObj.getBean("dbCon");
		
		List<Cricket>  cAll =  co.ShowAll();
		
		for(Cricket c : cAll)
		{
			System.out.println(c.getCrno() + "\t" + c.getCrname() + "\t" + c.getRuns() + "\t" + c.getType_of_game());
		}
	}
}
