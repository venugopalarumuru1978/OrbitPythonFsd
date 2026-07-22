package com.apps;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.beans.CricketOperations;

public class CricApp1 {

	public static void main(String[] args) {
		ApplicationContext  appObj = new ClassPathXmlApplicationContext("beanConfig.xml");
		
		CricketOperations  co =  (CricketOperations)appObj.getBean("dbCon"); 
	}

}
