package com.beans;

import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

public class CricketOperations {

	private DataSource  dataSource;
	private JdbcTemplate  jdbc; // null object
	
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
		String sqlcmd = "Insert into Cricket values(?,?,?,?)";
		jdbc.update(sqlcmd, new Object[] {cObj.getCrno(),cObj.getCrname(),cObj.getRuns(), cObj.getType_of_game()});
		System.out.println("Cricketer is Added...");
	}
	
	public List<Cricket> ShowAll()
	{
		String sqlcmd = "Select * from Cricket";
		List<Cricket>  crkAll = new ArrayList<Cricket>();
		
		crkAll =  jdbc.query(sqlcmd, new BeanPropertyRowMapper(Cricket.class));
		
		return crkAll;
	}
		
}
