import React from 'react'

export const Latest = ()=>{
    return <section className="small-section cws_prlx_section bg-blue-40"><img src="/pic/parallax-3.jpg" alt="" className="cws_prlx_layer"/>
    <div className="container">
      <div className="row mb-50">
        <div className="col-md-8">
          <h6 className="title-section-top font-4">Latest News</h6>
          <h2 className="title-section alt-2"><span>Our</span> Blog</h2>
          <div className="cws_divider mb-25 mt-5"></div>
          <p className="color-white">Vestibulum feugiat vitae tortor ut venenatis. Sed cursus, purus eu euismod bibendum, diam nisl suscipit odio, vitae ultrices mauris dolor quis mauris. Curabitur ac metus id leo maxim.</p>
        </div>
        <div className="col-md-4"><i className="flaticon-suntour-calendar title-icon alt"></i></div>
      </div>
      <div className="carousel-container">
        <div className="row">
          <div className="owl-two-pag pagiation-carousel mb-20">
            <div className="blog-item clearfix">
              <div className="blog-media"><a href="blog-single.html">
                  <div className="pic"><img src="/pic/blog/270x270/1.jpg" data-at2x="pic/blog/270x270/1@2x.jpg" alt=""/></div></a></div>
              <div className="blog-item-body clearfix">
                <a href="blog-single.html">
                  <h6 className="blog-title">Sed semper lacus et enim sodales</h6></a>
                <div className="blog-item-data">Mon, 03-23-2016</div>
                <p>Etiam maximus molestie accumsan. Sed metus sapien, fermentum nec lorem ac, tempor gravida arcu.</p><a href="blog-single.html" className="blog-button">Read more</a>
              </div>
            </div>
            <div className="blog-item clearfix">
              <div className="blog-media"><a href="blog-single.html">
                  <div className="pic"><img src="/pic/blog/270x270/2.jpg" data-at2x="pic/blog/270x270/2@2x.jpg" alt=""/></div></a></div>
              <div className="blog-item-body clearfix">
                <a href="blog-single.html">
                  <h6 className="blog-title">Aenean nec urna ullamcorper</h6></a>
                <div className="blog-item-data">Mon, 03-23-2016</div>
                <p>Nullam efficitur lorem eu felis rutrum elementum. Vestibulum feugiat massa id ante scelerisque blandit.</p><a href="blog-single.html" className="blog-button">Read more</a>
              </div>
            </div>
            <div className="blog-item clearfix">
              <div className="blog-media"><a href="blog-single.html">
                  <div className="pic"><img src="/pic/blog/270x270/3.jpg" data-at2x="pic/blog/270x270/3@2x.jpg" alt=""/></div></a></div>
              <div className="blog-item-body clearfix">
                <a href="blog-single.html">
                  <h6 className="blog-title">Etiam sit amet est et massa</h6></a>
                <div className="blog-item-data">Mon, 03-23-2016</div>
                <p>urabitur rhoncus sem et eros pharetra euismod. Ut commodo sem magna, in congue ex vestibulum ut.</p><a href="blog-single.html" className="blog-button">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}