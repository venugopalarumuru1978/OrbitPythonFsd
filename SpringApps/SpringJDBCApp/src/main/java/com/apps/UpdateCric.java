package com.apps;
import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.beans.Cricket;
import com.beans.CricketOperations;

public class UpdateCric {

	public static void main(String[] args) {
		ApplicationContext  appObj = new ClassPathXmlApplicationContext("beanConfig.xml");		
		CricketOperations  co =  (CricketOperations)appObj.getBean("dbCon");
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Cric Number ");
		int cid = sc.nextInt();
		
		Cricket  cObj = co.Search(cid);
		if(cObj!=null)
		{
			System.out.println(cObj.getCrno() + "\t" + cObj.getCrname() + "\t" + cObj.getType_of_game() + "\t" + cObj.getRuns());
			System.out.println("Enter new name of Cricketer ");
			String cname = sc.next();
			co.UpdateCricName(cname, cid);
		}
		else 
			System.out.println("Not Found");
	}
}
