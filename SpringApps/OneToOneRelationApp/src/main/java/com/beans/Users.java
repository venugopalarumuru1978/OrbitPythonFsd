package com.beans;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Users {

	@Id
	private int userid;
	
	private String username;
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	private Profile prof;

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Profile getProf() {
		return prof;
	}

	public void setProf(Profile prof) {
		this.prof = prof;
	}
	
	
}
