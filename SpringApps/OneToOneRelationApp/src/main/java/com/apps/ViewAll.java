package com.apps;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


import com.beans.Users;

import jakarta.persistence.TypedQuery;

public class ViewAll {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		Session sesObj = sf.openSession();
		
		
		TypedQuery<Users>  qry = sesObj.createQuery("from Users");
		List<Users>  userList = qry.getResultList();
		
		for(Users u : userList)
		{
			System.out.println("User Name : " + u.getUsername());
			System.out.println("User Profiler Name : " + u.getProf().getPf_name());			
		}	
	}
}
