import React from 'react'
import { Switch, Route } from "react-router-dom"
import { SurveyForm, SurveyResult } from '..'

export default ({match})=>{
    return<>
        <Switch>
            <Route path={match.url} exact component={SurveyForm}/>
            <Route path={match.url+"/result"} component={SurveyResult}/>
        </Switch>
    </>
}