import React, { Component } from "react";
import Slider from "react-slick";
import "./Carousel.css"
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow  />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2 id="youmayalsolike">You May Also Like</h2>
        <Slider {...settings} >
           

            
          <div  className="slides">
           <img src="https://images.urbndata.com/is/image/Anthropologie/4110348690103_081_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
          </div>
          <div className="slides">
            <img src="https://images.urbndata.com/is/image/Anthropologie/4113086690097_059_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
          </div>
          <div className="slides">
            <img src="https://images.urbndata.com/is/image/Anthropologie/4112347800051_001_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
          </div>
          <div className="slides">
            <img src="https://images.urbndata.com/is/image/Anthropologie/4114529100218_066_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
          </div>
          <div className="slides">
           <img src="https://images.urbndata.com/is/image/Anthropologie/4115650590035_040_b14?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
          </div>
          <div className="slides">
            <img src="https://images.urbndata.com/is/image/Anthropologie/4130646420031_014_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
          </div>
          <div className="slides">
            <img src="https://images.urbndata.com/is/image/Anthropologie/4133402250055_001_b?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349" alt="" />
          </div>
         
        </Slider>
      </div>
    );
  }
}