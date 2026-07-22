package TestPack;

public class Account {

	private String accNo;
	private String bank;
	public String getAccNo() {
		return accNo;
	}
	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}
	public String getBank() {
		return bank;
	}
	public void setBank(String bank) {
		this.bank = bank;
	}
	public Account(String accNo, String bank) {
		super();
		this.accNo = accNo;
		this.bank = bank;
		System.out.println("Acc Cons");
	}
}
