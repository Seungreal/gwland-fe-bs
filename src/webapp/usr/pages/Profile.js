import axios from 'axios';
import React, { useEffect } from 'react';

export default ()=>{
    useEffect(()=>{
        axios.get('http://localhost:8080/user/profile',{
            headers:{
                Authorization:'Bearer '+ localStorage.getItem('accessToken')
            }
        })
        .then(resp=>console.log(resp))
        .catch(err=>console.log(err))
    })

    return <>
    </>
}