package com.controllers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.models.Student;

@Controller
public class StudentController {

	// it will be added to dropdownlist country
	@ModelAttribute("ctryNames")
    public List<String> ctryNames(){
		List<String>  cnames = new ArrayList<String>();
		cnames.add("India");
		cnames.add("Pakistan");
		cnames.add("Srilanka");

//		List<String> cnames = Arrays.asList("India", "Pakistan", "Srilanka");
        return cnames;
    }
	
	@GetMapping("/nstd")
	public String newStd(Model m)
	{
/*
		List<String>  cnames = new ArrayList<String>();
		cnames.add("India");
		cnames.add("Pakistan");
		cnames.add("Srilanka");
		m.addAttribute("cnames", cnames);
	*/	
		m.addAttribute("stdObj", new Student());
		
		return "NewStudent";
	}

	@PostMapping("/nstdpost")
	public String newStd(@ModelAttribute("stdObj") Student std,  Model m)
	{
		System.out.println(std.getRollno());
		System.out.println(std.getLocation());
		System.out.println(std.getSname());
		System.out.println(std.getCountry());
/*
		List<String>  cnames = new ArrayList<String>();
		cnames.add("India");
		cnames.add("Pakistan");
		cnames.add("Srilanka");
		m.addAttribute("cnames", cnames);
*/
		return "NewStudent";
	}

}
