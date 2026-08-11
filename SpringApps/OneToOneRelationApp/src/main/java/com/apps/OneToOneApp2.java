package com.apps;

import java.util.Scanner;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.beans.Profile;
import com.beans.Users;

public class OneToOneApp2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Configuration cfg = new Configuration();
		cfg.configure("hibernate.cfg.xml");
		
		SessionFactory sf = cfg.buildSessionFactory();
		Session sesObj = sf.openSession();
		Transaction trans = sesObj.beginTransaction();
		
		Profile  pf = new Profile();
		Users user = new Users();
		Scanner sc = new Scanner(System.in);
		
		System.out.println("User ID ");
		user.setUserid(sc.nextInt());
		System.out.println("User Name ");
		user.setUsername(sc.next());
		
		System.out.println("User Profile ID");
		pf.setPfid(sc.nextInt());
		System.out.println("User Profile Name ");	
		pf.setPf_name(sc.next());
		
		user.setProf(pf);
		pf.setUser(user);
				
		sesObj.persist(user);
		trans.commit();
		
		System.out.println("Success");

	}

}
