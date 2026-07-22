package com.beans;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;

public class CricketOperations {

	private DataSource  dataSource;
	private JdbcTemplate  jdbc;
	
	public DataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
		jdbc = new JdbcTemplate(this.dataSource);
		System.out.println("Db Connected");
	}
	
	public void AddCricket(Cricket cObj)
	{
		
	}
	
		
}
