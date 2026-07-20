package TestPack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Required;

public class StdInfo {

	private String sname;
	private Course curs;
	
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public Course getCurs() {
		return curs;
	}
	
	@Autowired(required = true)
	@Qualifier("curs2")
	public void setCurs(Course curs) {
		this.curs = curs;
	}
	
	public void Display()
	{
		System.out.println("Student Name : " + this.getSname());
		System.out.println("Course Name : " + this.getCurs().getCname());
		System.out.println("Course Fees : " + this.getCurs().getFees());
	}
}
