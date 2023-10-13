import {React, useState} from 'react'

import axios from 'axios'

const Registration = () => {

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (phone.length != 10) {
            window.alert("Invalid Phone Number")
        }
        else if (firstName.length == 0 || lastName.length == 0) {
            window.alert("Name Empty")
        }
        else {

            const formData = {
                    "firstname": firstName,
                    "lastname": lastName,
                    "email": email,
                    "password": password
            }
            
            axios
                .post('http://localhost:3030/signup', formData)
                .then ((res) => {
                    console.log('successful')
                })
                .catch((err) => {
                    console.log('error')
                })
            }

        }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return ( 
        <div>
            <form onSubmit = {handleSubmit}>
                First Name: <input type = "text" name = "username" value = {firstName} onChange = {handleFirstNameChange} placeholder='name' /><br/>
                Last Name: <input type = "text" name = "lastName" value = {lastName} onChange = {handleLastNameChange} /><br />
                <label>Phone</label>
                <input type = "text" name = "phone" value = {phone} onChange = {handlePhoneChange} placeholder = 'phone'/><br/>
                <label>Email</label>
                <input type = "email" name = "email" value = {email} onChange = {handleEmailChange} placeholder = 'email'/><br/>
                <label>Password</label>
                <input type = "password" name = "password" value = {password} onChange = {handlePasswordChange} placeholder = 'password'/><br/>
                <input type = "submit"></input>
            </form>
        </div>


     );
}
 
export default Registration;