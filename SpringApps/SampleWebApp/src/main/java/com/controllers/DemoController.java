package com.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DemoController {

	@GetMapping("/home")
	public String TestPage1(Model m)
	{
		int x=100;
		float y = 12.45f;
		m.addAttribute("xVal", x);		
		m.addAttribute("yVal", y);
		return "HomePage";
	}
	
	@GetMapping("/contact")
	public String TestPage2(ModelMap m)
	{
		m.addAttribute("info", "This is Contact Page")
		.addAttribute("test", "Created using MVC");
		
		return "ContactPage";
	}
	
	@GetMapping("/demo")
	public ModelAndView  TestPage3()
	{
		ModelAndView pinfo = new ModelAndView();
		pinfo.addObject("msg", "This is Web App");
		pinfo.setViewName("DemoPage");
		return pinfo;
	}
	
	@GetMapping("/form1")
	public String TestPage4(Model m)
	{
		return "TestForm1";
	}
	
	@PostMapping("/frmpost")
	public String TestPage4a(Model m)
	{
		m.addAttribute("msg", "Post Method is executed");
		return "TestForm1";
	}
		
	@GetMapping("/form2")
	public String TestPage5(Model m)
	{
		return "TestForm2";
	}
	
	@PostMapping("/frm2post")
	public String TestPage5a(@RequestParam("txtName") String sname,  
								Model m)
	{
		m.addAttribute("msg", sname);
		return "TestForm2";
	}
	
	@GetMapping("/login")
	public String LoginPage(Model m)
	{
		return "LoginPage";
	}
	
	@PostMapping("/loginPost")
	public String LoginPage(@RequestParam("txtUser") String uname,
			@RequestParam("txtPwd") String pswd,
								Model m)
	{
		if(uname.equals("Orbit") && pswd.equals("orb@123"))
		{
			return "WelcomePage";
		}		
		m.addAttribute("msg", "Please check username / password");
		return "LoginPage";
	}
	

}
