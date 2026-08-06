package com.beans;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="Depts")
public class Dept {

	@Id
	private int deptid;	
	private String deptname;
	
	 	
	 	 @OneToMany(mappedBy = "dept", cascade = CascadeType.ALL)
	     private List<Employee> employees = new ArrayList<>();


		 public int getDeptid() {
			 return deptid;
		 }


		 public void setDeptid(int deptid) {
			 this.deptid = deptid;
		 }


		 public String getDeptname() {
			 return deptname;
		 }


		 public void setDeptname(String deptname) {
			 this.deptname = deptname;
		 }


		 public List<Employee> getEmployees() {
			 return employees;
		 }


		 public void setEmployees(List<Employee> employees) {
			 this.employees = employees;
		 }
	 	 
	 	 
	 	 
}
