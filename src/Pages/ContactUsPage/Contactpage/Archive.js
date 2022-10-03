import React from "react";
import LatestPostLinks from "./LatestPostLink";


const Archive=({getYear})=>{
    return (
        <>
            <div>
                <LatestPostLinks  link={`CS502 Asssignment 5 solution spring ${getYear}`}/>
                <LatestPostLinks link={`CS502 Asssignment 5 solution spring ${getYear}`}/>
                <LatestPostLinks link={`CS502 Asssignment 5 solution spring ${getYear}`}/>
                <LatestPostLinks link={`CS502 Asssignment 5 solution spring ${getYear}`}/>
                <LatestPostLinks link={`CS502 Asssignment 5 solution spring ${getYear}`}/>
                <LatestPostLinks link={`CS502 Asssignment 5 solution spring ${getYear}`}/>
                <LatestPostLinks link={`CS502 Asssignment 5 solution spring ${getYear}`}/>
            </div>
        </>
    )
}
export default Archive;