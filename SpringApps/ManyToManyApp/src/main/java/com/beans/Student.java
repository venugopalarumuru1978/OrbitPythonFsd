package com.beans;

import java.util.HashSet;
import java.util.Set;

//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinTable;
//import jakarta.persistence.ManyToMany;
import jakarta.persistence.*;
@Entity
public class Student {
	@Id    
    private Long id;    
    private String name;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
        name = "student_course",
        joinColumns =  @JoinColumn(name = "student_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Courses> cour_info = new HashSet<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<Courses> getCour_info() {
		return cour_info;
	}

	public void setCour_info(Set<Courses> cour_info) {
		this.cour_info = cour_info;
	}
    
    
    
    
}
