function SaiTeja()
{
    return(
        <div>
            <p style={{textAlign:"center"}}>
                <label>Person Name</label><br />
                <input type="text"  name="txtPname" />
                <br /><label>Gender</label><br />
                <input type="radio"  name="rdoGender"  value="Male" />
                <label>Male</label>
                &nbsp;&nbsp;&nbsp;
                <input type="radio"  name="rdoGender"  value="Female" />
                <label>Female</label>
                <br /><label>Location</label><br />
                <select name="ddlCity">
                <option value="-1">Select City</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Amaravathi">Amaravathi</option>
                <option value="Bangalore">Bangalore</option>
            </select>

        <br /><br />
        <input type="button"  value="Click Me" />
            </p>

        </div>
    );
}

export default SaiTeja;