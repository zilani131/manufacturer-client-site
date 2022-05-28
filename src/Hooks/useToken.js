import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token,setToken]=useState(''); // token will be string so we use empty string
    useEffect(()=>{
//  console.log('user inside token',user); we have email in user.user.email
console.log('user inside token',user); 
const email=user?.user?.email
const name=user?.user?.displayName
const currentUser={name:name,email:email};
if(email){
    fetch(`http://localhost:5000/userdetails/${email}`,{
        method:"PUT",
        headers:{
            'content-type':"application/json"
        },
     body:JSON.stringify(currentUser),
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(`data insert log in`,data)
    })
} 
    });
    return [token];
};

export default useToken;