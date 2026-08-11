package com.apps;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Dept;
import com.beans.Employee;

import jakarta.persistence.TypedQuery;

public class ViewAll {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		Session sesObj = sf.openSession();
		
		TypedQuery<Dept>  qry = sesObj.createQuery("from Dept");		
		List<Dept> emp_dept = qry.getResultList();
		
		for(Dept d : emp_dept)
		{
			System.out.println("Dept Name : " + d.getDeptname());
			List<Employee> emplist = d.getEmployees();
			for(Employee e : emplist)
			{
				System.out.println("Employee Name  : "  + e.getEmpname());
			}			 
		}

	}

}
