package com.apps;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Employee;

import jakarta.persistence.TypedQuery;

public class ViewList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();		
		cfg.configure("hibernate.cfg.xml");		
		SessionFactory sf = cfg.buildSessionFactory();
			
		Session sObj = sf.openSession();
		
		TypedQuery qry = sObj.createQuery("from Employee");
		
		List<Employee>  elist= qry.getResultList();
		
		for(Employee e : elist)
			System.out.println(e.getEmpno() + "\t" + e.getEname() + "\t" + e.getJob());
	}
}
