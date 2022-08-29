import React from "react"
import NavBar from "./NAVBAR/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
const App=()=>{
  return (
    <>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ouraim"/>
      <Route path="/privacypolicy"/>
      <Route path="/dmca"/>
      <Route path="/sitemap"/>
      <Route path="/aboutus"/> 
      <Route path="contactus"/>
    </Routes>
    </>
  )
}

export default App