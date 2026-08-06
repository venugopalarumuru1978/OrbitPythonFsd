package com.beans;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;
@Entity
public class Courses {
	 	@Id
	 	private Long id;
	    
	    private String title;

	    @ManyToMany(mappedBy = "cour_info")
	    private Set<Student> students = new HashSet<>();

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public Set<Student> getStudents() {
			return students;
		}

		public void setStudents(Set<Student> students) {
			this.students = students;
		}
	    
	    
}
