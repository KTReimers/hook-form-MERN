import React, {useState} from 'react';

const Form = props =>{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [cp, setCp] = useState("");

    const [formInput, setFormInput]= useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setFormInput({
            fName: fname,
            lName: lname,
            Email: email,
            Pw: pw,
            Cp: cp
            // ...formInput,
            // [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form className= "col-sm-4" onChange={ onChangeHandler }>
                <div className="form-group">
                    <label htmlFor="fname">First Name </label>
                    <input type="text" className="form-control" onChange={(e) => setFname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name </label>
                    <input type="text" className="form-control" onChange={(e) => setLname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="pw">Password </label>
                    <input type="password" className="form-control" onChange={(e) => setPw(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="cp">Confirm Password</label>
                    <input type="password" className="form-control" onChange={(e) => setCp(e.target.value)}/>
                </div>
                <input type="submit" value="submit" className="btn btn-primary"/>
            </form>
            <br/>
            <h3>Your form data</h3>
            <h4>First Name: {formInput.fName}</h4>
            <h4>Last Name: {formInput.lName}</h4>
            <h4>Email: {formInput.Email}</h4>
            <h4>Password: {formInput.Pw}</h4>
            <h4>Confirm Password: {formInput.Cp}</h4>
        </>
    )
}
export default Form;