import React from 'react'

export const Subscribe = ()=>{
    return <section className="page-section pt-90 pb-80 bg-main pattern relative">
    <div className="container">
      <div className="call-out-box clearfix with-icon">
        <div className="row call-out-wrap">
          <div className="col-md-5">
            <h6 className="title-section-top gray font-4">subscribe today</h6>
            <h2 className="title-section alt-2"><span>Get</span> Latest offers</h2><i className="flaticon-suntour-email call-out-icon"></i>
          </div>
          <div className="col-md-7">
            <form action="php/contacts-process.php" method="post" className="form contact-form mt-10">
              <div className="input-container">
                <input type="text" placeholder="Enter your email" value="" name="email" className="newsletter-field mb-0 form-row"/><i className="flaticon-suntour-email icon-left"></i>
                <button type="submit" className="subscribe-submit"><i className="flaticon-suntour-arrow icon-right"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
}