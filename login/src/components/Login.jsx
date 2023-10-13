import {React, useState} from 'react'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const formData = {
        "firstname": firstName,
        "lastname": lastName,
        "email": email,
        "password": password
}

axios
    .post('http://localhost:3030/users/${test@test.com}/login', formData)
    .then ((res) => {
        console.log('successful')
    })
    .catch((err) => {
        console.log('error')
    })
}



    return ( 
        <div>
            <form onSubmit = {handleSubmit}>
                Email: <input type = "email" name = "email" value = {email} onChange = {handleEmailChange} placeholder = 'email'/><br/>
                <label>Password</label>
                <input type = "password" name = "password" value = {password} onChange = {handlePasswordChange} placeholder = 'password'/><br/>
                <input type = "submit"/>
            </form>
        </div>
     );
}
 
export default Login;