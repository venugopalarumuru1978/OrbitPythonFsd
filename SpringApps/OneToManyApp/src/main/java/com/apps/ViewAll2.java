package com.apps;


import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import com.beans.Employee;

import jakarta.persistence.TypedQuery;

public class ViewAll2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		Session sesObj = sf.openSession();
		
		TypedQuery<Employee>  qry = sesObj.createQuery("from Employee");		
		List<Employee> emp_dept = qry.getResultList();
		
		for(Employee e : emp_dept)
		{
			System.out.println("Employee Name  : "  + e.getEmpname());
			System.out.println("Dept Name : " + e.getDept().getDeptname());
		}
	}

}
