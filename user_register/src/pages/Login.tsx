import React, { useState ,SyntheticEvent} from 'react'
import { Redirect } from 'react-router-dom';

const Login =()=>{
    const [email,setEmail] =  useState('');
    const [password,setPassword] =  useState('');
    const [redirect ,setRedirect] = useState(false);
    const data = {
    "email":email,
    "password" : password
     };

    const submit =async (e:SyntheticEvent) =>{
        e.preventDefault();
        
        const response = await fetch('http://127.0.0.1:8000/api/login/',{
            method :'POST',
            headers : {'Content-Type':'application/json',
            },
            credentials :'include',
            body:JSON.stringify(data) 
            
        });

    console.log("iam here in login form",response.json())
       setRedirect(true)
    }

    if (redirect){
        return <Redirect to="/home"/>
        }

    return(
        <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
           onChange ={
            e=>setEmail(e.target.value)}
            />
          
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
           onChange ={
            e=>setPassword(e.target.value)}
            />
        
    
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    );
};

export default Login;