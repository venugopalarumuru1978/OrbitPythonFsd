<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false" %>
    
<%@ taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1 style="text-align: center">Student Register</h1>
	<hr />
	<frm:form name="frmReg" method="post" action="nstdpost"  modelAttribute="stdObj">
	<p style="text-align:center">
		<label>Roll Number </label><br />
		<frm:input path="rollno" type="text" />
		
		<br /><label>Student Name </label><br />
		<frm:input path="sname" type="text" />
	
		<br /><label>Location </label><br />
		<frm:select path="location">		
			<frm:option value="Hyd">Hyderabad</frm:option>
			<frm:option value="Bgl">Bangalore</frm:option>
			<frm:option value="Amr">Amaravathi</frm:option>		
		</frm:select>
		<br /><label>Country</label><br />
		<frm:select path="country" >
			<frm:options items="${ctryNames }"/>
		</frm:select>
		<br /><br />
		<frm:button>Register Student</frm:button>	
	</p>
	</frm:form>
</body>
</html>