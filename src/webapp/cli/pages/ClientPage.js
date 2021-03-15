import React from 'react'
import { Switch, Route } from "react-router-dom"
import ContactForm from './ContactForm/ContactForm'

export default ()=>{
    return <>
        <Switch>
            <Route path="/client/join" exact component={ContactForm}/>
        </Switch>
    </>
}