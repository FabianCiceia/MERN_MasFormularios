import React from 'react'
const User = (props) => {
    if(props.user){
        const { firstName, lastName, email , password , confirmPassword } = props.user;
        return (
            <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {confirmPassword} </p>
            </div>
        )
    }else{
        return (
            <div>
            <p>First Name: None</p>
            <p>Last Name: None </p>
            <p>Email: None </p>
            <p>Password: None  </p>
            <p>Confirm Password: None </p>
            </div>
        )
    }
}

export default User

