import React from 'react'

export const Counter = ()=>{
    return <section className="small-section">
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-xs-6 mb-md-30">
          <div className="counter-block"><i className="counter-icon flaticon-suntour-world"></i>
            <div className="counter-name-wrap">
              <div data-count="345" className="counter">0</div>
              <div className="counter-name">Tours</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-xs-6 mb-md-30">
          <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-fireworks"></i>
            <div className="counter-name-wrap">
              <div data-count="438" className="counter">0</div>
              <div className="counter-name">Holidays</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-xs-6 mb-md-30">
          <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-hotel"></i>
            <div className="counter-name-wrap">
              <div data-count="526" className="counter">0</div>
              <div className="counter-name">Hotels</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-xs-6 mb-md-30">
          <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-ship"></i>
            <div className="counter-name-wrap">
              <div data-count="169" className="counter">0</div>
              <div className="counter-name">Cruises</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-xs-6">
          <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-airplane"></i>
            <div className="counter-name-wrap">
              <div data-count="293" className="counter">0</div>
              <div className="counter-name">Flights</div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-xs-6">
          <div className="counter-block with-divider"><i className="counter-icon flaticon-suntour-car"></i>
            <div className="counter-name-wrap">
              <div data-count="675" className="counter">0</div>
              <div className="counter-name">Cars</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}