import React from "react"
import { HomeData } from "./HomeData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
const PrevBtn=(prop)=>{
    const {className,onClick}=prop;
    return (
      <>
      <div className={className} onClick={onClick}  >
        <AiOutlineArrowLeft  style={{zIndex:"3000"}}/> 
      </div>
      </>
    )
  }
  const NextBtn=(prop)=>{
    const {className,onClick}=prop;
    return (
      <>
      <div className={className} onClick={onClick}>
        <AiOutlineArrowRight/>
      </div>
      </>
    )
  }
const Home=()=>{
  const setting={
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    prevArrow:<PrevBtn/>,
    nextArrow:<NextBtn/>,
    
  }
    return (
        <>
            <Slider {...setting}>
            {
                HomeData.map((data)=>{
                    return(
                        <div className="slider_container" key={data.id}>
                            <img src={data.image} className="size" alt="vue images"/>
                        </div>
                    )
                })
            }
            </Slider>
        </>
    )
}

export default Home