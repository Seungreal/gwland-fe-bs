import React from 'react'
import {Route} from 'react-router-dom'
import PlaceList from './PlaceList'
import PlaceDetail from './PlaceDetail'
import PlaceAdd from './PlaceAdd'

export default ({match})=>{
    return <>
        <Route path={match.path} exact>
            <PlaceList
            sidebar="left"
            layout="list"
            title="Blog list left sidebar"
            />
        </Route>
        <Route path="/blog/:post_id" component={PlaceDetail} />
        <Route path={`${match.path}/add`} component={PlaceAdd}/>
    </>
}