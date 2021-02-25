import React from 'react'
import {DetailText,Prices,Location,Amenties,Slider} from './index'
import {Reviews,ReviewWrite} from '../../rev/pages'

export const PlaceDetailPage = ()=>{
    return <div className="content-body">
    <section className="page-section pt-0 pb-50">
      <div className="container">
        <div className="menu-widget with-switch mt-30 mb-30">
          <ul className="magic-line">
            <li className="current_item"><a href="#overview" className="scrollto">Overview</a></li>
            <li><a href="#prices" className="scrollto">Prices</a></li>
            <li><a href="#location" className="scrollto">Location</a></li>
            <li><a href="#amenties" className="scrollto">Amenties</a></li>
            <li><a href="#reviews" className="scrollto">Reviews (28) <span className="stars stars-5"></span></a></li>
          </ul>
        </div>
      </div>
      <Slider/>
      <DetailText/>
      <Prices/>
      <Location/>
      <Amenties/>
      <Reviews/>
      <ReviewWrite/>
    </section>
  </div>
}