<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1 style="text-align: center">Login Page</h1>
	<hr />
	<form name="frm2" method="POST" action="loginPost">
		<p style="text-align:center">
<input type="text" name="txtUser" placeholder="Username" />
			<br /><br />		
<input type="password" name="txtPwd" placeholder="Password" />
			<br /><br />
			<input type="submit"  value="Login Here" />
		</p>
	</form>
	
	<h1>${msg }</h1>
</body>
</html>