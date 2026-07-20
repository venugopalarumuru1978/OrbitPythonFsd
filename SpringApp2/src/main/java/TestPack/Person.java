package TestPack;

public class Person {
	private String pname;
	private String email;
	private String phone;
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public Person(String pname, String email, String phone) {
		super();
		this.pname = pname;
		this.email = email;
		this.phone = phone;
		System.out.println("Person Cons");
	}
	
	
	public void PrintValues()
	{
		System.out.println("Person Name " +this.getPname());
		System.out.println("Person Email " +this.getEmail());
		System.out.println("Person Phone " +this.getPhone());
	}
}
