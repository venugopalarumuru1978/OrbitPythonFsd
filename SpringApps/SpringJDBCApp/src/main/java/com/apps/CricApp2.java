package com.apps;

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.beans.Cricket;
import com.beans.CricketOperations;

public class CricApp2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		ApplicationContext  appObj = new ClassPathXmlApplicationContext("beanConfig.xml");
		
		CricketOperations  co =  (CricketOperations)appObj.getBean("dbCon");
		
		Cricket ck = new Cricket();
		System.out.println("Cric Number ");
		ck.setCrno(sc.nextInt());
		
		System.out.println("Cric Name");
		ck.setCrname(sc.next());
		
		System.out.println("Cric Runs");
		ck.setRuns(sc.nextInt());
		
		System.out.println("Type of Game ");
		ck.setType_of_game(sc.next());		
		co.AddCricket(ck);
		
	}

}
