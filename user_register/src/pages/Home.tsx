import React, {useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Home =()=>{
    const [name,setName] =  useState('');

    useEffect(() => {
        
        async function getData() {
           
            const response = await fetch('http://127.0.0.1:8000/api/user',{

                headers : {'Content-Type':'application/json',
                },
                credentials :'include',
            });
            const content = await response.json();
            setName(content.name)        
        }
        getData();
        
    }
    );
    return(
        <div>  {name ? 'HI'+ name :"you are not authenticated"} </div>
    )
     };


export default Home;