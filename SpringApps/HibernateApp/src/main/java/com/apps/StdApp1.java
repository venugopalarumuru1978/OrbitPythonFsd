package com.apps;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Student;

public class StdApp1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		
		Student std = new Student();
		std.setRollno(1001);
		std.setSname("Ramana");
		std.setLocation("Kavali");
		
		Session sObj = sf.openSession();
		Transaction trn = sObj.beginTransaction();
		sObj.persist(std);
		
		trn.commit();
		
		System.out.println("Success");

	}

}
