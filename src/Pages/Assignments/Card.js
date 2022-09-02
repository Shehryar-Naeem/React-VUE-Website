import React from "react"

const Card =({image,text})=>{
    return (
        <>
             <div className="grid_card">
              <img src={image} alt="assignment pic"/>
              <p>{text}</p>
            </div>
        </>
    )
}
export default Card