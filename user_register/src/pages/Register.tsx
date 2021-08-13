import React, { useState ,SyntheticEvent} from 'react'
import { Redirect } from 'react-router-dom';

const Register =()=>{
    const [name,setName] =  useState('');
    const [email,setEmail] =  useState('');
    const [password,setPassword] =  useState('');
    const [redirect ,setRedirect] = useState(false);
    const headers = {
        method :'POST',
        headers : {'Content-Type':'application/json'},
        body:JSON.stringify({value:[
            name,
            email,
            password]
        })
      
     };
     

    const data = { "name": name,
    "email":email,
    "password" : password
 };

     
        const submit = async(e:SyntheticEvent) =>{
        e.preventDefault();
        console.log("iam herer",name,email,password)
        const response = await fetch('http://127.0.0.1:8000/api/register/',{
            method :'POST',
            headers : {'Content-Type':'application/json',
            },
            body:JSON.stringify(data) 
            
        });
       
        setRedirect(true)
    }
    if (redirect) {
    return <Redirect to="/login"/>
    }
    return(
        <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input type="name" className="form-control"  placeholder="name"
          onChange ={
              e=>setName(e.target.value)}
          />
    
          <input type="email" className="form-control"  placeholder="name@example.com"
           onChange ={
            e=>setEmail(e.target.value)}
          />
          
          <input type="password" className="form-control" placeholder="Password"
                   onChange ={
                    e=>setPassword(e.target.value)}
          />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
      </form>
    );
};

export default Register;