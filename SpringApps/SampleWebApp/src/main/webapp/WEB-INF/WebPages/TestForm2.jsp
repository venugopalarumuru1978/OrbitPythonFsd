<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1 style="text-align: center">Form 2</h1>
	<hr />
	<form name="frm2" method="POST" action="frm2post">
		<p style="text-align:center">
			<input type="text" name="txtName" placeholder="Enter ur Name" />			
			<input type="submit"  value="Click Me" />
		</p>
	</form>
	
	<h1>${msg }</h1>
</body>
</html>