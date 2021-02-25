import React from 'react'
import {Subscribe,Search,RecomPlace2,Sidebar} from './index'

export const PlaceListPage2 = ()=>{
    return <div className="content-body">
      <div className="container page">
        <div className="row">
          <RecomPlace2/>
          <Sidebar/>
        </div>
      </div>
      <Subscribe/>
    </div>
}