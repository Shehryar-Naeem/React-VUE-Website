import React from "react";
import NavBar from "./NAVBAR/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Footer from "./FooterComp/Footer";
import AssignmentOne from "./Pages/Assignments/Assignment1/AssignmentOne";
import AdminPage from "./Pages/Admin page/AdminPage";
import Inputpage from "./Pages/inputPage/InputPage";
import TrendingSection from "./Pages/Assignments/AssignmentCompont/TrendingSection";
import Archive from "./Pages/Assignments/AssignmentCompont/Archive";
import Comment from "./Pages/Assignments/AssignmentCompont/Comment";
import Assignment2 from "./Pages/Assignments/Assignment2/Assignment2";
import AssignmentThree from "./Pages/Assignments/Assignment3/Assignment3";
import CurrentFinalTermPage from "./Pages/PaperPages/CurrentFinalTermPage";
import MidTermPaper from "./Pages/PaperPages/MidTermpaper";
import FinalTerm from "./Pages/PaperPages/FinaTerm";
const getYear = new Date().getFullYear();

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ouraim" />
        <Route path="/privacypolicy" />
        <Route path="/dmca" />
        <Route path="/sitemap" />
        <Route path="/aboutus" />
        <Route path="contactus" />

        {/* *********** Route for Assignment Pages start *********  */}
        <Route path="/assignment/assignment1" element={<AssignmentOne />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        <Route path="/assignment/assignment2" element={<Assignment2 />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        <Route path="/assignment/assignment3" element={<AssignmentThree />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        {/* *********** Route for Assignment Pages end *********  */}

        <Route path="/currentfinaltermpaper" element={<CurrentFinalTermPage />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/midtermsolvedpaper" element={<MidTermPaper />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/finaltermsolvedpaper" element={<FinalTerm/>}>

        </Route>

        <Route path="/adminpage" element={<AdminPage />}>
          <Route path="inputpage" element={<Inputpage />} />
        </Route>
      </Routes>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
