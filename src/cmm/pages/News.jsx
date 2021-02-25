import React from 'react'

export const News = ()=>{
    return <div className="news-popup"> 
    <div className="news-popup-wrap"> <i className="close-button flaticon-close"></i>
      <div className="row">
        <div className="col-sm-6"><img src="/pic/news-popup.jpg" data-at2x="pic/news-popup@2x.jpg" alt=""/></div>
        <div className="col-sm-6">
          <div className="news-content">
            <div className="news-title">
              <h2>Newsletter</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <form method="get" action="#" className="newsletter contact-form">
              <label className="mb-0">
                <input type="text" placeholder="Enter Your Email ..." value="" name="email" className="newsletter-field mb-0"/>
              </label>
              <button type="submit" className="newsletter-submit cws-button alt">Submit</button>
            </form>
            <div className="checkbox-wrap">
              <div className="checkbox">
                <input id="checkbox40" type="checkbox" value="None" name="check"/>
                <label htmlFor="checkbox40">Dont Show This Message Again</label>
              </div>
            </div>
            <div className="social-wrap"><a href="#" className="cws-social flaticon-social-4"></a><a href="#" className="cws-social flaticon-social"></a><a href="#" className="cws-social flaticon-social-3"></a><a href="#" className="cws-social flaticon-social-1"></a><a href="#" className="cws-social flaticon-social-network"></a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
}