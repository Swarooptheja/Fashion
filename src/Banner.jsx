import React, { Component } from "react";
import Slider from "react-slick";
import "./Bannner.css"
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div className="bannerimage">
            <img src="https://cdn.shopify.com/s/files/1/1982/7331/files/7_1_1_1349x.progressive.png.jpg?v=1668423528" alt="" />   </div>
          <div className="bannerimage">
           <img src="https://cdn.shopify.com/s/files/1/1982/7331/files/slide_banner10_1_1366x.progressive_7_11zon_1349x.progressive.jpg?v=1666334027" alt="" />   </div>
          <div className="bannerimage">
            <img src="https://cdn.shopify.com/s/files/1/1982/7331/files/active_wear_new_1_1349x.progressive.png.jpg?v=1659780288" alt="" /> </div>
          <div className="bannerimage">
            <img src="https://cdn.shopify.com/s/files/1/1982/7331/files/imgpsh_fullsize_anim_11_1_1349x.progressive.png.jpg?v=1667217451" alt="" /> </div>
          <div className="bannerimage">
           <img src="https://cdn.shopify.com/s/files/1/1982/7331/files/1903X728_slide_banner2_1_1366x.progressive_9_11zon_1349x.progressive.jpg?v=1666333795" alt="" /> </div>
          <div className="bannerimage">
            <img src="https://cdn.shopify.com/s/files/1/1982/7331/files/Disney_Veirdo_Banner_3_1349x.progressive.jpg?v=1648728076" alt="" />  </div>
        </Slider>
      </div>
    );
  }
}