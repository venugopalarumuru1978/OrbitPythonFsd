function Data()
{
let cities = ["Hyderabad","Mumbai", "Goa", "Bangalore", "Amaravathi"];

    return(
        <div>
            <h1>Array Data Presentation</h1>            
            <ol type="1" style={{textAlign:"left"}}>
            {
                cities.map((ct)=>(
                 <li>{ct}</li>
                ))
            }
            </ol>

        <hr />

<table width="100%" border={1}>
{
    cities.map((ct)=>(
        <tr>
            <td style={{textAlign:"left"}}>{ct}</td>
        </tr>
    ))
}
</table>

        </div>
    );
}

export default Data;