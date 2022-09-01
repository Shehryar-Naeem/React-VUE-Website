import React from "react"
import NavBar from "./NAVBAR/Navbar"
import { Routes,Route } from "react-router-dom"
import Home from "./Pages/HomePage/Home"
import Footer from "./FooterComp/Footer"
import AssignmentOne from "./Pages/Assignments/Assignment1"
import AdminPage from "./Pages/Admin page/AdminPage"
import Inputpage from "./Pages/inputPage/InputPage"
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
      <Route path="/adminpage" element={<AdminPage/>}/>
      <Route path="/inputpage" element={<Inputpage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App