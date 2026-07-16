package PojoClasses;

public class Student {

	private String sname;
	private String course;
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		System.out.println("Sname");
		this.sname = sname;
	}
	public String getCourse() {
		return course;
	}
	public void setCourse(String course) {
		System.out.println("Course");
		this.course = course;
	}
}
