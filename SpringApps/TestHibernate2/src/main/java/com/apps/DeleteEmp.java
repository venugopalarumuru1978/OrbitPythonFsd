package com.apps;

import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Employee;

import jakarta.persistence.TypedQuery;

public class DeleteEmp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter Emp ID ");
		int eno = sc.nextInt();
		
		Configuration cfg = new Configuration();		
		cfg.configure("hibernate.cfg.xml");		
		SessionFactory sf = cfg.buildSessionFactory();
			
		Session sObj = sf.openSession();
		Transaction trans =sObj.beginTransaction();
		
		TypedQuery qry = sObj.createQuery("delete from Employee where empno=:eid");
		qry.setParameter("eid", eno);
		qry.executeUpdate();
		trans.commit();
		System.out.println("Emp Deleted");		
	}
}
