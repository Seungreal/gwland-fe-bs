import React from 'react'
import {Subscribe,Search,RecomPlace} from './index'

export const PlaceListPage = ()=>{
    return <div className="content-body">
    <div className="container page">
      <h2 className="title-section mb-5"><span>Search</span> Hotels</h2>
      <div className="search-hotels mb-40 pattern">
        <Search/>
      </div>
      <RecomPlace/>
    </div>
    <Subscribe/>
  </div>
}