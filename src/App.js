import React from "react"
import NavBar from "./NAVBAR/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import Footer from "./FooterComp/Footer"
import AssignmentOne from "./Pages/Assignments/Assignment1"
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
      <Route path="/assignment/assignment1" element={<AssignmentOne/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App