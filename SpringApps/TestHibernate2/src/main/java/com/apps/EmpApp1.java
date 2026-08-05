package com.apps;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Employee;

public class EmpApp1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		
		Employee emp = new Employee();
		//emp.setEmpno(12);
		emp.setEname("Kalyan");
		emp.setJob("Developer");
		
		Session sObj = sf.openSession();
		Transaction trans =sObj.beginTransaction();
		
		sObj.persist(emp); // to save data in db
		trans.commit();
		
		System.out.println("Success");
	}

}
