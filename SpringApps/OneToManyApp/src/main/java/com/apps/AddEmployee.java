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

import jakarta.persistence.TypedQuery;

public class AddEmployee {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		Session sesObj = sf.openSession();
		Transaction trans = sesObj.beginTransaction();
		Scanner sc = new Scanner(System.in);
		
		List<Employee> emplist = new ArrayList<Employee>();
		
		Employee emp = new Employee();
		System.out.println("Employee ID ");
		emp.setEmpno(sc.nextInt());
		System.out.println("Employee Name ");		
		emp.setEmpname(sc.next());
		System.out.println("Dept ID ");
		int dno = sc.nextInt();
		
		
		TypedQuery<Dept>  qry =  sesObj.createQuery("from Dept where deptid=:dno");
		qry.setParameter("dno", dno);
		
		List<Dept>  dlist = qry.getResultList();
		
		if(dlist.size()==1)
		{
			System.out.println("Ok");
			//Dept dObj = dlist.get(0);
			emp.setDept(dlist.get(0));
			emplist.add(emp);
			sesObj.persist(emp);
			trans.commit();
			System.out.println("Success");
		}
		else
			System.out.println("Invalid Deptno");
	}
}
