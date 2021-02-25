import React from 'react'

export const Search = ()=>{
    return <div className="tours-container">
    <div className="tours-box">
      <div className="tours-search mb-20">
        <form method="post" className="form search divider-skew">
          <div className="search-wrap">
            <input type="text" placeholder="Destination" className="form-control search-field"/><i className="flaticon-suntour-map search-icon"></i>
          </div>
        </form>
        <div className="tours-calendar divider-skew"> 
          <input placeholder="Depart date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" className="calendar-default textbox-n"/><i className="flaticon-suntour-calendar calendar-icon"></i>
        </div>
        <div className="tours-calendar divider-skew"> 
          <input placeholder="Return date" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" className="calendar-default textbox-n"/><i className="flaticon-suntour-calendar calendar-icon"></i>
        </div>
        <div className="selection-box divider-skew"><i className="flaticon-suntour-adult box-icon"></i>
          <select>
            <option>Adult</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="selection-box divider-skew"><i className="flaticon-suntour-children box-icon"></i>
          <select>
            <option>Child</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="selection-box"><i className="flaticon-suntour-bed box-icon"></i>
          <select>
            <option>Room</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 clearfix">
          <div className="widget-price-slider float-left">
            <form method="get" action="#">
              <div className="price_slider_wrapper">
                <div aria-disabled="false" className="price_slider price_slider_amount ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                  <div className="ui-slider-range ui-widget-header ui-corner-all"></div><a href="#" className="ui-slider-handle ui-state-default ui-corner-all">
                    <div style={{}} className="price_label"><span className="from"></span></div></a><a href="#" className="ui-slider-handle ui-state-default ui-corner-all">
                    <div style={{}} className="price_label"><span className="to"></span></div></a>
                </div>
                <div className="price_slider_amount addon">
                  <input id="min_price" type="text" name="min_price" value="" data-min="0" placeholder="Min price" style={{display:"none"}}/>
                  <input id="max_price" type="text" name="max_price" value="" data-max="200" placeholder="Max price" style={{display:"none"}}/>
                  <input type="hidden" name="post_type" value="product"/>
                </div>
              </div>
            </form>
          </div>
          <div className="rating">Rating
            <div className="stars stars-5"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tours-search">
            <form method="post" className="form search">
              <div className="search-wrap">
                <input type="text" placeholder="Destination" className="form-control search-field"/><i className="flaticon-suntour-map search-icon"></i>
              </div>
            </form>
            <div className="button-search">Search</div>
          </div>
        </div>
      </div>
    </div>
  </div>
}