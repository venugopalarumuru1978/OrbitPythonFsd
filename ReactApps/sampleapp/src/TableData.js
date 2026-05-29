function TableData()
{
    let  empdata = [
        {"eno":1001,"ename":"Raghava", "job":"Developer", "sal":10000.00},
        {"eno":1002,"ename":"Rakesh", "job":"Tester", "sal":9000.00},
        {"eno":1003,"ename":"Ramana", "job":"Developer", "sal":10000.00},
        {"eno":1004,"ename":"Rajesh", "job":"Tester", "sal":9000.00},
        {"eno":1005,"ename":"Rohit", "job":"HR-Manager", "sal":30000.00}
    ];

    return(
        <div>
            <h1>Employee Information</h1>
            <hr />
            <table width="100%" border={1}>
                <tr>
                    <th>Emp No</th>
                    <th>Emp Name</th>
                    <th>Emp Job</th>
                    <th>Emp Salary</th>
                </tr>

                {
                    empdata.map((emp)=>(
                        <tr>
                            <td>{emp.eno}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.job}</td>
                            <td>{emp.sal}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default TableData;