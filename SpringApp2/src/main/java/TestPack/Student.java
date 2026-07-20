package TestPack;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Student {

	private String sname;
	private List<String> courses;
	private Set<String>  qua;
	private Map<String, String> course_trainer;
	private Properties  course_fees;
	
	
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public List<String> getCourses() {
		return courses;
	}
	public void setCourses(List<String> courses) {
		this.courses = courses;
	}
	public Set<String> getQua() {
		return qua;
	}
	public void setQua(Set<String> qua) {
		this.qua = qua;
	}
	public Map<String, String> getCourse_trainer() {
		return course_trainer;
	}
	public void setCourse_trainer(Map<String, String> course_trainer) {
		this.course_trainer = course_trainer;
	}
	public Properties getCourse_fees() {
		return course_fees;
	}
	public void setCourse_fees(Properties course_fees) {
		this.course_fees = course_fees;
	}
	
	
}
