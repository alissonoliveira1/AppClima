import "./App.css";
import Local from "./Component/Local";
import Tempo from "./Component/Tempo";
import Previsao from "./Component/Previsao";
import React from "react";
import { ReactComponent as Left } from "./icon/left.svg";
import { ReactComponent as Right } from "./icon/right.svg";
import Slider from "react-slick";
function App() {

  
    const settings = {
      className: "Sliders2",
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };
    function CustomPrevArrow({ onClick }) {
      return (
        <button className="custom-prev-arrow" onClick={onClick}>
          {<Left className="setas" />}
        </button>
      );
    }
  
    function CustomNextArrow({ onClick }) {
      return (
        <button className="custom-next-arrow" onClick={onClick}>
          {<Right className="setas" />}
        </button>
      );
    }

  return (
    <div >
      <Slider  {...settings}>
        
        <div>
          <div className="containerApp">
            <div className="tituloDiv"><span className="titulo">Previsão de Hoje</span></div>
           
      <div className="box">
        oi
        <div >
          <Tempo />
        </div>
        
        <div>
          <Local />
        </div></div>
      </div>
      </div>

      <div className="containerApp2">
      <div className="tituloDiv"><span className="titulo2">Previsão da semana</span></div>
       <div> <Previsao/></div>
        </div>
      
      </Slider>
    </div>
    
  );
}

export default App;
