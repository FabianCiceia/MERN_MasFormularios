import React, { useState } from  'react';
const UserForm = (props) => {
    const [firstName,  serFirstName] = useState("");
    const [lastName, serLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword,setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        props.onCreateUser(newUser);

    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) =>  serFirstName(e.target.value) } />
            </div>
            <div>
                <label> Last Name:</label>
                <input type="text" onChange={ (e) => serLastName(e.target.value) } />
            </div>
            <div>
                <label>Email : </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
export default UserForm;
