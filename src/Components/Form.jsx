import {useState} from "react";

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
                    <label className="text-danger">First Name: </label> 
                    <input className="form-control" type="text" value={first} onChange={ (e) => setFirst(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={last} onChange={ (e) => setLast(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input className="form-control" type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input className="form-control" type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label> 
                    <input className="form-control" type="password" value={confirm} onChange={ (e) => setConfirm(e.target.value) } />
                </div>
            </form>
            <p>First Name: {first} </p>
            <p>Last Name: {last} </p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm: {confirm} </p> 
        </>
        
    )    
}
export default Form;
