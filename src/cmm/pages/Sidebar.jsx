import React from 'react'

export const Sidebar = ()=>{
    return <div class="col-md-4 sidebar">
    <aside class="sb-right pb-0">
      <div class="cws-widget">
        <div class="widget-search">
          <form role="search" method="get" action="#" class="search-form">
            <label><span class="screen-reader-text">Where will you go next?</span>
              <input type="search" placeholder="Where will you go next?" value="" name="s" title="Search:" class="search-field"/>
            </label>
            <button type="submit" class="search-submit"><i class="flaticon-suntour-search"></i></button>
          </form>
        </div>
      </div>
      <div class="cws-widget">
        <div class="widget-categories">
          <h2 class="widget-title">Categories</h2>
          <ul>
            <li class="cat-item cat-item-1"><a href="#">Marketing</a>[11]</li>
            <li class="cat-item cat-item-1"><a href="#">Inovation</a>[13]</li>
            <li class="cat-item cat-item-1"><a href="#">Product Services</a>[22]</li>
            <li class="cat-item cat-item-1"><a href="#">Team Work</a>[35]</li>
            <li class="cat-item cat-item-1"><a href="#">Social Networks</a>[08]</li>
            <li class="cat-item cat-item-1"><a href="#">Marketing</a>[29]</li>
            <li class="cat-item cat-item-1"><a href="#">Business</a>[16]</li>
          </ul>
        </div>
      </div>
      <div class="cws-widget">
        <div class="widget-tags">
          <h2 class="widget-title">Tags</h2>
          <div class="widget-tags-wrap"><a href="#" rel="tag" class="tag">Adventure</a><a href="#" rel="tag" class="tag">Romantic</a><a href="#" rel="tag" class="tag">Wildlife</a><a href="#" rel="tag" class="tag">Beach</a><a href="#" rel="tag" class="tag">Honeymoon</a><a href="#" rel="tag" class="tag">Island</a><a href="#" rel="tag" class="tag">Parks</a><a href="#" rel="tag" class="tag">Family</a><a href="#" rel="tag" class="tag">Travel</a></div>
        </div>
      </div>
    </aside>
  </div>
}