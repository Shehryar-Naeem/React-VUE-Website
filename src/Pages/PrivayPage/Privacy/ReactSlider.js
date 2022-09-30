import React from "react";
import Slider from "react-slick";
import { AssignmentData } from "./AssignmentData";

const SliderComp=()=>{
    return (
        <>
        {/* <div style={{display:"flex"}}> */}
            <Slider
            slidesToShow={3}
            slidesToScroll={3}>
                {
                    AssignmentData.map((cur,index)=>{
                        return (
                            <div key={index}>
                                <img src={cur} alt="assignment" style={{width:"10rem",height:"10rem"}}/>
                            </div>
                        )
                    })
                }         
            </Slider>
            {/* </div>   */}
        </>
    )
}
export default SliderComp