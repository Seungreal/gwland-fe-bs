import React from 'react'

export const About = ()=>{
    return <section className="small-section cws_prlx_section bg-gray-40"><img src="/pic/parallax-1.jpg" alt="" className="cws_prlx_layer"/>
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h2 className="title-section-top alt">About</h2>
          <h2 className="title-section alt mb-20"><span>Sun</span>Tour</h2>
          <p className="color-white">Vestibulum tincidunt venenatis scelerisque. Proin quis enim lacinia, vehicula massa et, mollis urna. Proin nibh mauris, blandit vitae convallis at, tincidunt vel tellus. Praesent posuere nec lectus non cursus. Sed commodo odio et ipsum sagittis tincidunt non eget felis.</p>
          <div className="cws_divider short mb-30 mt-30"></div>
          <h3 className="font-5 color-white font-medium">Andrew McDonald</h3>
        </div>
        <div className="col-md-7">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe src="https://www.youtube.com/embed/yib7tvIrL6k" className="embed-responsive-item"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
}