import React from 'react'

export const Prices = ()=>{
    return <div id="prices" className="container mb-50 mt-40">
    <div className="search-hotels room-search pattern">
      <div className="search-room-title">
        <h5>Choose your room</h5>
      </div>
      <div className="tours-container">
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
            <div className="button-search">GO</div>
          </div>
        </div>
      </div>
    </div>
    <div className="room-table">
      <table className="table alt-2">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Max.</th>
            <th>Options</th>
            <th>Today's price</th>
            <th>Booking</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <img src="/pic/190x130.jpg" data-at2x="pic/190x130@2x.jpg" alt/>
              <h6>Grand Hotel Wien</h6>
              <p className="mb-0">(Extra beds available: Crib, <br/> Rollaway bed) Room sleeps <br/> 4 guests (up to 3 children)</p>
            </td>
            <td> 
              <div className="table-icon"><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people alt"></i></div>
              <p>4 guest</p>
            </td>
            <td> 
              <ul className="style-1">
                <li>Special conditions, pay when you stay</li>
                <li>Breakfast included</li>
                <li>Free Parking</li>
              </ul>
            </td>
            <td className="room-price">$120</td>
            <td> <a href="#" className="cws-button alt gray">Book now</a></td>
          </tr>
          <tr>
            <td> <img src="/pic/190x130.jpg" data-at2x="pic/190x130@2x.jpg" alt/>
              <h6>Deluxe Room, Sea View</h6>
              <p className="mb-0">(Extra beds available: Crib, <br/> Rollaway bed)</p>
            </td>
            <td> 
              <div className="table-icon"><i className="flaticon-people"></i><i className="flaticon-people"></i><i className="flaticon-people alt"></i><i className="flaticon-people alt"></i><i className="flaticon-people alt"></i></div>
              <p>2 guest</p>
            </td>
            <td> 
              <ul className="style-1">
                <li>Special conditions, pay when you stay</li>
                <li>Breakfast included</li>
                <li>Free Parking</li>
                <li>Free Internet</li>
              </ul>
            </td>
            <td className="room-price">Sold out</td>
            <td> <a href="#" className="cws-button alt gray">Book now</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
}