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
import Finaltermsolvedpaper from "./Pages/PaperPages/FinalTermSolvedPaper";
import MidtermPaperCollection from "./Pages/PaperPages/MidtermPaperCollection";
import FinalTermPaperCollection from "./Pages/PaperPages/FinalTermPaperCollection";
import ShortNotes from "./Pages/ShortNotePage/ShortNote";
import MidtermSolvedPaperTechnique from "./Pages/HOwToPage/MidTermSolvedTechnique";
import CGPA from "./Pages/HOwToPage/CGPA";
import UploadAssignment from "./Pages/HOwToPage/UploadAssignment";
import HowtoSolvedMCQs from "./Pages/HOwToPage/HowToSolveMCQs";
import HowToUseExamSoftware from "./Pages/HOwToPage/HowtoUseExamSoftwre";
import AvoidZeroMarks from "./Pages/HOwToPage/AvoidZeroMarks";
import HowtoSaveAndCopyQuiz from "./Pages/HOwToPage/HowtoCopyandSaveQuiz";
import HowtoCalculateCGPA from "./Pages/HOwToPage/HowtoCalculateCGPA";
import HowtoImprovegrade from "./Pages/HOwToPage/HowtoImprovegrade";
import HowtoinstallDEV from "./Pages/SoftwarePages/DevC++page";
import HowToInstallSublimeIDE from "./Pages/SoftwarePages/SublimePage";
import HowtoInstallWinRAR from "./Pages/SoftwarePages/WinRar";
import HowtoDownloadMathSoftware from "./Pages/SoftwarePages/MathSoftware";
import JavaDevelopmentKit from "./Pages/SoftwarePages/JavaDevelopmentkit";
import VisualStudioProcedurePage from "./Pages/SoftwarePages/VisualStudio";
import ProgrammingLanguageCPlusPlus from "./Pages/OtherPages/C++ProgrammingPage";
import Scholarships from "./Pages/OtherPages/ScholarShipPage";
import LaptopScheme from "./Pages/OtherPages/LatopScheme";
import MeritList from "./Pages/OtherPages/MeritListPage";
import NTS from "./Pages/OtherPages/NTS";
import Pricebondpage from "./Pages/OtherPages/PiceBondpage";
import HowtoApplyforMigration from "./Pages/HOwToPage/ApplyforMigration";
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

        <Route path="/finaltermsolvedpaper" element={<FinalTerm />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        <Route
          path="/finaltermsolvedpaperwithpdf"
          element={<Finaltermsolvedpaper />}
        >
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route
          path="/midtermpapercollection"
          element={<MidtermPaperCollection />}
        >
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route
          path="/finaltermpapercollection"
          element={<FinalTermPaperCollection />}
        >
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/shortnote" element={<ShortNotes />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route
          path="/midtermpapersolvingtechnique"
          element={<MidtermSolvedPaperTechnique />}
        >
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/cgpa" element={<CGPA />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/uploadassignment" element={<UploadAssignment />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/howtosolvemcqs" element={<HowtoSolvedMCQs />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/howtouseexamsoftware" element={<HowToUseExamSoftware />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route
          path="/howtoavoidzeromarksorplagiarism"
          element={<AvoidZeroMarks />}
        >
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/howtosaveandcopyquiz" element={<HowtoSaveAndCopyQuiz />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/howtocalculatecpga" element={<HowtoCalculateCGPA />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/howtoimprovegrade" element={<HowtoImprovegrade />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        <Route path="/howtoapplyformigrationandtransfer" element={<HowtoApplyforMigration/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        {/* how to install software */}
        <Route path="/howtoinstalldevc++" element={<HowtoinstallDEV />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route
          path="/howtoinstallsublimetextide"
          element={<HowToInstallSublimeIDE />}
        >
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/howtoinstallwinrar" element={<HowtoInstallWinRAR />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route
          path="/howtodownloadmathsoftware"
          element={<HowtoDownloadMathSoftware />}
        >
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/javadevelopementkit" element={<JavaDevelopmentKit />}>
          <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        
        <Route path="/howtoinstallandusevisualstudiocode" element={<VisualStudioProcedurePage/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        

        {/*Other page routes*/ }

        <Route path="/c++programming" element={<ProgrammingLanguageCPlusPlus/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/sholarshipsPage" element={<Scholarships/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>


        <Route path="/laptopScheme" element={<LaptopScheme/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>
        <Route path="/meritlist" element={<MeritList/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>

        <Route path="/ntspage" element={<NTS/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
        </Route>


        <Route path="/pricebondpage" element={<Pricebondpage/>}>
        <Route path="" element={<TrendingSection getYear={getYear} />} />
          <Route path="comments" element={<Comment />} />
          <Route path="archive" element={<Archive />} />
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
