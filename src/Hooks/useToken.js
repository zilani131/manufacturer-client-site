import React, { useEffect, useState } from 'react';

const useToken = user => {
    const [token,setToken]=useState(''); // token will be string so we use empty string
    useEffect(()=>{
//  console.log('user inside token',user); we have email in user.user.email
console.log('user inside token',user); 
const email=user?.user?.email
const currentUser={email:email};
if(email){
    fetch(`https://morning-crag-81099.herokuapp.com/user/${email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("data inside token",data)
        const accessToken=data.token;
        localStorage.setItem('accessToken',accessToken); //first one is key the second one is value
        setToken(accessToken)
    });

}
    },[user]);
    return [token];
};

export default useToken;