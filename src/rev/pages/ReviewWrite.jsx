import React from 'react'

export const ReviewWrite = ()=>{
    return <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h4 className="trans-uppercase mb-10">Write a review</h4>
        <div className="cws_divider mb-30"></div>
      </div>
    </div>
    <div className="review-content pattern relative">
      <div className="row">
        <div className="col-md-5 mb-md-30 mb-xs-0">
          <div className="review-total"><img src="/pic/blog/120x120.jpg" data-at2x="pic/blog/120x120@2x.jpg" alt/>
            <div className="review-total-content">
              <h6>Hotel Bohemians</h6>
              <div className="stars stars-4"></div>
              <ul className="icon">
                <li>Istanbul, Turkey<i className="flaticon-suntour-map"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="review-marks clearfix mb-30">
            <ul>
              <li>Cleanliness
                <div className="stars stars-5"></div>
              </li>
              <li>Location
                <div className="stars stars-5"></div>
              </li>
              <li>Staff
                <div className="stars stars-5"></div>
              </li>
              <li>Free Wi-Fi
                <div className="stars stars-5"></div>
              </li>
            </ul>
            <ul>
              <li>Comfort
                <div className="stars stars-5"></div>
              </li>
              <li>Facilities
                <div className="stars stars-5"></div>
              </li>
              <li>Value for money
                <div className="stars stars-5"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form className="form clearfix">
        <div className="row">
          <div className="col-md-4">
            <input type="text" name="email" value="" size="40" placeholder="First Name" aria-required="true" className="form-row form-row-first"/>
          </div>
          <div className="col-md-4">
            <input type="text" name="email" value="" size="40" placeholder="Last Name" aria-required="true" className="form-row form-row-first"/>
          </div>
          <div className="col-md-4">
            <input type="text" name="email" value="" size="40" placeholder="Booking Number" aria-required="true" className="form-row form-row-first"/>
          </div>
          <div className="col-md-12">
            <input type="text" name="password" value="" size="40" placeholder="Title of your review" aria-required="true" className="form-row form-row-last"/>
          </div>
          <div className="col-md-12">
            <textarea name="message" cols="40" rows="4" placeholder="Message of your review" aria-invalid="false" aria-required="true" className="mb-20"></textarea>
            <input type="submit" value="Add a review" className="cws-button alt float-right"/>
          </div>
        </div>
      </form>
    </div>
  </div>
}