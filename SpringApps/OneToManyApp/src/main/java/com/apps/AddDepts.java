package com.apps;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Dept;
import com.beans.Employee;

public class AddDepts {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		Session sesObj = sf.openSession();
		Transaction trans = sesObj.beginTransaction();
		Scanner sc = new Scanner(System.in);
		
		Dept dpt = new Dept();
		System.out.println("Dept ID ");
		dpt.setDeptid(sc.nextInt());
		System.out.println("Dept Name ");
		dpt.setDeptname(sc.next());		
		
		sesObj.persist(dpt);
		trans.commit();
				
		System.out.println("Success");

	}

}
