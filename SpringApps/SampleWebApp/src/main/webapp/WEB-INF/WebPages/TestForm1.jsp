<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1 style="text-align: center">Form 1</h1>
	<hr />
	<form name="frm1" method="POST" action="frmpost">
		<p style="text-align:center">
			<input type="submit"  value="Click Me" />
		</p>
	</form>
	
	<h1>${msg }</h1>
</body>
</html>