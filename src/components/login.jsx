import React, { useState } from 'react'

const Login = () => {

    const [userName, setUserName] = useState({
        name: '',
        age: ''
    });

    const handleChange = (e) => {
        setUserName({...userName, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/add-name', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userName)
        })
        .then(response => response.json())
        .then((result) => {
            alert(result.message);
        });
    };

    return(
        <>
        <div className='login-page'
        style={
            {
                padding : '20px',
                textAlign : 'center'
            }
        }>
            <h1 style={{
                margin : '20px',
                marginBottom: '50px'
            }}
            >Login</h1>
                <form onClick={handleSubmit}>
                    <input type='text' value={userName.name} name='name' placeholder='Name' onChange={handleChange}/>
                    <input type='number' value={userName.age} name='age' placeholder='Age' onChange={handleChange}/>
                    <button type='submit'>Loign</button>
                </form>
        </div>
        </>
    );
};

export default Login;