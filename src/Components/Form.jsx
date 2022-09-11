import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Form = (props) => {
    //First Name
    const [first, setFirst] = useState("")
    //Last Name
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    //confirm password
    const [confirm, setConfirm] = useState("")

    const createForm = (e) => {
        e.preventDefault()

        const newUser = { first, last, email, password, confirm }
        console.log("Welcome", newUser)
    	setFirst("")
    	setEmail("")
    	setPassword("")
    }
    return(
        <>
            <form>
                <div>
                    <label className="text-primary form-label">First Name: </label> 
                    <input className="form-control" type="text" value={first} onChange={ (e) => setFirst(e.target.value) } />
                    {first.length < 2 && first.length > 0 ? (
                        <p className="text-danger">First Name must be at least 2 characters</p>) :
                        null
                    }
                </div>
                <div>
                    <label className="text-primary form-label">Last Name: </label> 
                    <input className="form-control" type="text" value={last} onChange={ (e) => setLast(e.target.value) } />
                    {last.length < 2 && last.length > 0 ? (
                        <p className="text-danger">Last Name must be at least 2 characters</p>) :
                        null
                    }
                </div>
                <div>
                    <label className="text-primary form-label">Email Address: </label> 
                    <input className="form-control" type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    {email.length < 5 && email.length > 0 ? (
                        <p className="text-danger">Email must be at least 5 characters</p>) :
                        null
                    }
                </div>
                <div>
                    <label className="text-primary form-label">Password: </label>
                    <input className="form-control" type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    {password.length < 8 && password.length > 0 ? (
                        <p className="text-danger">Password must be at least 8 characters</p>) :
                        null
                    }
                </div>
                <div>
                    <label className="text-primary form-label">Confirm Password: </label> 
                    <input className="form-control" type="password" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
                    {confirm !== password ? (
                        <p className="text-danger">Passwords do not match!</p>) :
                        null
                    }
                </div>
            </form>
            <h4>Form Data:</h4>
            <p>First Name: {first} </p>
            <p>Last Name: {last} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm: {confirm} </p> 
        </>
        
    )    
}
export default Form;
