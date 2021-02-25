import React from 'react'
import {Link,Route} from 'react-router-dom'

export const Header = ()=>{
    return <header>
    <div className="site-top-panel">
      <div className="container p-relative">
        <div className="row">
          <div className="col-md-6 col-sm-7">
            <div className="top-left-wrap font-3">
              <div className="mail-top"><a href="mailto:support.suntour@example.com"> <i className="flaticon-suntour-email"></i>suntour@example.com</a></div><span>/</span>
              <div className="tel-top"><a href="tel:(723)-700-1183"> <i className="flaticon-suntour-phone"></i>(723)-700-1183</a></div>
            </div>
          </div>
          <div className="col-md-6 col-sm-5 text-right">
            <div className="top-right-wrap">
              <div className="top-login"><a href="#">My Account</a></div>
              <div className="curr-wrap dropdown">
                <div>
                  <ul>
                    <li><a href="#" className="lang-sel icl-en">Currency<i className="fa fa-angle-down"></i></a>
                      <ul>
                        <li><a href="#">USD</a></li>
                        <li><a href="#">EUR</a></li>
                        <li> <a href="#">GBP</a></li>
                        <li> <a href="#">AUD</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lang-wrap dropdown">
                <div>
                  <ul>
                    <li><a href="#" className="lang-sel icl-en">Language <i className="fa fa-angle-down"></i></a>
                      <ul>
                        <li><a href="#">English</a></li>
                        <li> <a href="#">Deutsch</a></li>
                        <li> <a href="#">Espanol</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav className="main-nav js-stick">
      <div className="full-wrapper relative clearfix container">
        <div className="nav-logo-wrap local-scroll"><a href="/" className="logo"><img src="/img/logo.png" data-at2x="img/logo@2x.png" alt=""/></a></div>
        <div className="inner-nav desktop-nav">
          <ul className="clearlist">
            <li><a href="/" className="mn-has-sub active">Home <i className="fa fa-angle-down button_open"></i></a>
              <ul className="mn-sub">
                <li className="active"><a href="index.html">Standart Slider</a></li>
                <li><a href="index-search.html">Main Search</a></li>
                <li><a href="index-slider.html">Full Slider</a></li>
                <li><a href="index-video.html">Video Slider</a></li>
              </ul>
            </li>
            <li className="slash">/</li>
            <li><a href="shop-grid.html" className="mn-has-sub">Shop <i className="fa fa-angle-down button_open"></i></a>
              <ul className="mn-sub">
                <li><a href="shop-grid.html">Shop Grid</a></li>
                <li><a href="shop-cart.html">Shop Cart</a></li>
                <li><a href="shop-checkout.html">Shop Checkout</a></li>
                <li><a href="shop-single.html">Shop Single Product</a></li>
              </ul>
            </li>
            <li className="slash">/</li>
            <li><a href="hotels-search.html" className="mn-has-sub">관광지 <i className="fa fa-angle-down button_open"></i></a>
              <ul className="mn-sub">
                <li><Link to="/place/list">관광지 리스트</Link></li>
                <li><Link to="/place/list2">관광지 리스트 v2</Link></li>
                <li><Link to="/place/detail">관광지 상세</Link></li>
              </ul>
            </li>
            <li className="slash">/</li>
            <li className="megamenu"><a href="page-about-us.html" className="mn-has-sub">Pages <i className="fa fa-angle-down button_open"></i></a>
              <ul className="mn-sub mn-has-multi">
                <li className="mn-sub-multi"><a className="mn-group-title">Pages</a>
                  <ul>
                    <li><a href="page-about-us.html">About Us</a></li>
                    <li><a href="page-services.html">Services</a></li>
                    <li><a href="page-procces.html">Our Procces</a></li>
                    <li><a href="page-our-team.html">Our Team</a></li>
                    <li><a href="page-profile.html">Profile</a></li>
                    <li><a href="page-elements.html">Elements</a></li>
                  </ul>
                </li>
                <li className="mn-sub-multi"><a className="mn-group-title">Portfolio</a>
                  <ul>
                    <li><a href="portfolio-3-col.html">Three Columns</a></li>
                    <li><a href="portfolio-4-col.html">Four Columns</a></li>
                    <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
                    <li><a href="portfolio-with-sidebar.html">With Sidebar</a></li>
                    <li><a href="portfolio-gallery.html">Gallery</a></li>
                    <li><a href="page-portfolio-single.html">Portfolio Single</a></li>
                  </ul>
                </li>
                <li className="mn-sub-multi"><a className="mn-group-title">Blog</a>
                  <ul>
                    <li><a href="blog-2-col-sidebar.html">Two Columns + Sidebar</a></li>
                    <li><a href="blog-3-col.html">Three Columns</a></li>
                    <li><a href="blog-4-col.html">Four Columns</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                    <li><a href="blog-grid.html">Blog Grid</a></li>
                    <li><a href="blog-list.html">Blog List</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="slash">/</li>
            <li><Link to="/contact">관리자</Link></li>
            <li className="search"><a href="#" className="mn-has-sub">Search</a>
              <ul className="search-sub">
                <li>
                  <div className="container">
                    <div className="mn-wrap">
                      <form method="post" className="form">
                        <div className="search-wrap">
                          <input type="text" placeholder="Where will you go next?" className="form-control search-field"/><i className="flaticon-suntour-search search-icon"></i>
                        </div>
                      </form>
                    </div>
                    <div className="close-button"><span>Search</span></div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
}