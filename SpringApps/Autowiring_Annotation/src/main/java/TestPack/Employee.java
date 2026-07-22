package TestPack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Employee {

	private String ename;
	private int sal;
	private String job;
	private Account accno;
	
	public Employee(String ename, int sal, String job, 
			@Autowired(required = true)
			@Qualifier("accObj2")
			Account accno) {
		super();
		this.ename = ename;
		this.sal = sal;
		this.job = job;
		this.accno = accno;
		System.out.println("Emp Cons");
	}
	public Account getAccno() {
		return accno;
	}
	public void setAccno(Account accno) {
		this.accno = accno;
	}
	public String getEname() {
		return ename;
	}
	public void setEname(String ename) {
		this.ename = ename;
	}
	public int getSal() {
		return sal;
	}
	public void setSal(int sal) {
		this.sal = sal;
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	
	public void ShowEmp()
	{
		System.out.println("Emp Name : " + this.getEname());
		System.out.println("Emp Job : " + this.getJob());
		System.out.println("Emp Salary : " + this.getSal());
		System.out.println("Bank Name : " + this.getAccno().getBank());
		System.out.println("Account Number  : " + this.getAccno().getAccNo());
		
	}
	
}
