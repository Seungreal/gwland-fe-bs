import React from 'react'
import {Route,Redirect} from 'react-router-dom'

export default ({auth,current,...rest})=>{
    const arr = Array.from(current)
    if(arr.find(role=>role===auth)===undefined){
        return <Redirect to="/login"/>
    }
    return <Route {...rest}/>
}