import React from 'react'

export const Location = ()=>{
    return <div id="location" className="container mb-50">
    <div className="row">
      <div className="col-md-12">
        <h4 className="trans-uppercase mb-10">Location</h4>
        <div className="cws_divider mb-30"></div>
        <div className="map-wrapper">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25295.930156304785!2d16.371063311644324!3d48.208404844730474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07986fcad78b%3A0x73f5a4d267cc4174!2zTmFnbGVyZ2Fzc2UgMTAsIDEwMTAgV2llbiwg0JDQstGB0YLRgNC40Y8!5e0!3m2!1sru!2sua!4v1453294615596" allowfullscreen=""></iframe>
        </div>
        <ul className="icon inline mt-20">
          <li> <a href="#">9300 Meadow Lane, Kalamazoo, MI 49009<i className="flaticon-suntour-map"></i></a></li>
          <li> <a href="#">00 1 877-859-5095<i className="flaticon-suntour-phone"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
}