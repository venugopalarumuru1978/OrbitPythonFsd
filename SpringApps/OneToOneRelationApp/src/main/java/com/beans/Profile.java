package com.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Profile {

	@Id
	private int pfid;
	
	private String pf_name;
	
	  @OneToOne
	  @JoinColumn(name = "userid")
	private Users user;

	public int getPfid() {
		return pfid;
	}

	public void setPfid(int pfid) {
		this.pfid = pfid;
	}

	public String getPf_name() {
		return pf_name;
	}

	public void setPf_name(String pf_name) {
		this.pf_name = pf_name;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}
	
	
	
}
