package com.apps;

import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Employee;

public class EmpApp2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Employee emp = new Employee();
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Employee Name ");
		emp.setEname(sc.next());
		System.out.println("Employee Job ");
		emp.setJob(sc.next());
				
		Configuration cfg = new Configuration();		
		cfg.configure("hibernate.cfg.xml");
		SessionFactory sf = cfg.buildSessionFactory();
		Session sObj = sf.openSession();
		Transaction trans =sObj.beginTransaction();
		
		sObj.persist(emp); // to save data in db
		trans.commit();
		
		System.out.println("Success");
	}

}
