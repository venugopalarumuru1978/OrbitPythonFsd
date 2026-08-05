package com.apps;

import java.util.List;
import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Employee;

import jakarta.persistence.TypedQuery;

public class Search {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter Job : ");
		String jb = sc.next();
		
		Configuration cfg = new Configuration();		
		cfg.configure("hibernate.cfg.xml");		
		SessionFactory sf = cfg.buildSessionFactory();
			
		Session sObj = sf.openSession();
		
		TypedQuery qry = sObj.createQuery("from Employee where job=:job");
		qry.setParameter("job", jb);
		
		List<Employee>  elist= qry.getResultList();
		
		if(elist.size()!=0)
		{
			for(Employee e : elist)
				System.out.println(e.getEmpno() + "\t" + e.getEname() + "\t" + e.getJob());			
		}
		else
			System.out.println("No Emp Present with given job");
	}
}
