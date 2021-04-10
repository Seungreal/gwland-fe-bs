import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { CourseDetail } from '..'

export default ({match})=>{
    return <>
        <Switch>
        <Route path="/course/detail" component={CourseDetail}/>
        </Switch>
    </>
}