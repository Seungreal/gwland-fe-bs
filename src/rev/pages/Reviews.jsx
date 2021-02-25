import React from 'react'

export const Reviews = ()=>{
    return <div id="reviews" className="container mb-60">
    <div className="row">
      <div className="col-md-12">
        <h4 className="trans-uppercase mb-10">Reviews travellers</h4>
        <div className="cws_divider mb-30"></div>
      </div>
    </div>
    <div className="reviews-wrap">
      <div className="reviews-top pattern relative">
        <div className="reviews-total">
          <h5>Excellent</h5>
          <div className="reviews-sub-mark">4.2</div>
          <div className="stars-perc"><span style={{width:"85%"}}></span></div><span>Based on 67 reviews</span>
        </div>
        <div className="reviews-marks">
          <ul>
            <li>Cleanliness<span><span className="stars-perc"><span style={{width:"85%"}}></span></span>4.5</span></li>
            <li>Location<span><span className="stars-perc"><span style={{width:"80%"}}></span></span>4.0</span></li>
            <li>Staff<span><span className="stars-perc"><span style={{width:"100%"}}></span></span>5.0</span></li>
            <li>Free Wi-Fi<span><span className="stars-perc"><span style={{width:"65%"}}> </span></span>3.5</span></li>
          </ul>
          <ul>
            <li>Comfort<span><span className="stars-perc"><span style={{width:"85%"}}> </span></span>4.5</span></li>
            <li>Facilities<span><span className="stars-perc"><span style={{width:"80%"}}></span></span>4.0</span></li>
            <li>Value for money<span><span className="stars-perc"><span style={{width:"100%"}}> </span></span>5.0</span></li>
          </ul>
        </div>
      </div>
      <div className="comments">
        <div className="comment-body">
          <div className="avatar"><img src="/pic/blog/90x90/1.jpg" data-at2x="pic/blog/90x90/1@2x.jpg" alt/>12 Reviews</div>
          <div className="comment-info">
            <div className="comment-meta">
              <div className="title">
                <h5>Lovely clean, comfortable hotel <span>Rachel George</span></h5>
              </div>
              <div className="comment-date">
                <div className="stars stars-5">5</div><span>Mon, 03-23-2016</span>
              </div>
            </div>
            <div className="comment-content">
              <p>Proin ut pretium sem. Maecenas id commodo massa. Sed vitae urna hendrerit, commodo dolor non, porttitor odio. Suspendisse ac arcu eu enim lobortis luctus sed quis velit. Nam ut vestibulum orci, at sodales libero. Fusce egestas urna a dolor fermentum, id tincidunt leo eleifend. Phasellus pulvinar hendrerit pulvinar.</p>
            </div>
          </div>
        </div>
        <div className="comment-body">
          <div className="avatar"><img src="/pic/blog/90x90/2.jpg" data-at2x="pic/blog/90x90/2@2x.jpg" alt/>12 Reviews</div>
          <div className="comment-info">
            <div className="comment-meta">
              <div className="title">
                <h5>Brilliant hotel with history <span>Phillip Ferguson</span></h5>
              </div>
              <div className="comment-date">
                <div className="stars stars-4">4</div><span>Mon, 03-23-2016</span>
              </div>
            </div>
            <div className="comment-content">
              <p>Vestibulum tellus justo, scelerisque sit amet imperdiet et, placerat non massa. Aliquam erat volutpat. Proin vitae enim cursus, dapibus est at, feugiat mauris. Sed molestie dolor sed ante dictum dictum. Quisque at nulla ipsum. Praesent interdum euismod turpis, eget tristique justo porta eu. Cras ullamcorper pulvinar nibh, eget faucibus neque porta in.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-bottom">
        <h4>You've been in this hotel?</h4>
      </div>
    </div>
  </div>
}