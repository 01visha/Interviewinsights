import React from "react";
import Testimonials from "./Testimonials.jsx";
import Overview from "./Overview.jsx";
import Reviews from "./Reviews.jsx";
import Features from "./Features.jsx";
import Banner from "./Banner.jsx";


function Home() {
    return (
        
        <>
       
        <div id="popup-search-box">
          <div className="box-inner-wrap d-flex align-items-center">
            <form id="form" action="#" method="get" role="search">
              <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
            </form>
            <div className="search-close"><i className="fa-sharp fa-regular fa-xmark" /></div>
          </div>
        </div>
        {/* /#popup-search-box */}
        <div className="mobile-side-menu">
          <div className="side-menu-content">
            <div className="side-menu-head">
              <a href="index.html"><img src="assets/img/logo/logo-1.png" alt="logo" /></a>
              <button className="mobile-side-menu-close"><i className="fa-regular fa-xmark" /></button>
            </div>
            <div className="side-menu-wrap" />
            <ul className="side-menu-list">
              <li><i className="fa-light fa-location-dot" />Address : <span>Amsterdam, 109-74</span></li>
              <li><i className="fa-light fa-phone" />Phone : <a href="tel:+01569896654">+01 569 896 654</a></li>
              <li><i className="fa-light fa-envelope" />Email : <a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </div>
        </div>
        {/* /.mobile-side-menu */}
        <div className="mobile-side-menu-overlay" />
      <Banner />
      <Testimonials />
      <Overview />
      <Features />     
      <Reviews />       
        </>
    );

}

export default Home