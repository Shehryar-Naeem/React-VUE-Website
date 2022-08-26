import React from "react"
import NavBar from "./NAVBAR/Navbar"
import { Routes,Route } from "react-router-dom"
const App=()=>{
  return (
    <>
    <Routes>
      <Route path="/"/>
      <Route path="/ouraim"/>
      <Route path="/privacypolicy"/>
      <Route path="/dmca"/>
      <Route path="/sitemap"/>
      <Route path="/aboutus"/> 
      <Route path="contactus"/>
    </Routes>
      <NavBar/>
    </>
  )
}

export default App