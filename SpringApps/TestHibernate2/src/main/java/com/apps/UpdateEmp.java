package com.apps;

import java.util.List;
import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Employee;

import jakarta.persistence.TypedQuery;

public class UpdateEmp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter ID : ");
		int eno = sc.nextInt();
		
		Configuration cfg = new Configuration();		
		cfg.configure("hibernate.cfg.xml");		
		SessionFactory sf = cfg.buildSessionFactory();
			
		Session sObj = sf.openSession();
		Transaction trans =sObj.beginTransaction();
		TypedQuery qry = sObj.createQuery("from Employee where empno=:eid");
		qry.setParameter("eid", eno);
		
		List<Employee>  elist= qry.getResultList();
		
		if(elist.size()!=0)
		{
			Employee e = elist.get(0);
			System.out.println(e.getEmpno() + "\t" + e.getEname() + "\t" + e.getJob());
			System.out.println("New name of employee");
			String ename = sc.next();
			
			qry = sObj.createQuery("update Employee set ename=:ena where empno=:eid");
			qry.setParameter("eid", eno);
			qry.setParameter("ena", ename);
			qry.executeUpdate();
			trans.commit();
			System.out.println("Emp Updated");
		}
		else
			System.out.println("No Emp Present with given ID");
	}
}
