import React from "react"
import { Route, Routes } from "react-router-dom";
import Inputpage from "../inputPage/InputPage";
import ListItem from "./List";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Inputpage, NewPage } from "./inputpage";
const AdminPage=()=>{
    return (
        <>
            <section className="admin_container">
                <div className="left_admin_navigation_panel">
                    <div className="navigation">
                        <ul>
                            <ListItem 
                                url="inputpage" 
                                icon={<i className="fa fa-plus" aria-hidden="true"></i>}
                                text="Add Card Page"
                            />
                            <ListItem 
                                url="/passwordpage" 
                                icon={<i className="fa fa-unlock-alt" aria-hidden="true"></i>}
                                text="Password"
                            />
                            <ListItem 
                                url="/adminpagetwo" 
                                icon={<i className="fa fa-plus" aria-hidden="true"></i>}
                                text="Add Card Page"
                            />
                            <ListItem 
                                url="/helppage" 
                                icon={<i className="fa fa-info-circle" aria-hidden="true"></i>}
                                text="Help"
                            />
                            <ListItem 
                                url="/message" 
                                icon={<i className="fa fa-comment" aria-hidden="true"></i>}
                                text="Message"
                            />
                            <ListItem 
                                url="/setting" 
                                icon={<i className="fa fa-cog" aria-hidden="true"></i>}
                                text="setting"
                            />
                        </ul>
                    </div>
                </div>
                <div className="right_admin_navigation_panel">
                    <Routes>
                       <Route path ="inputpage" element={<Inputpage/>}/>
                    </Routes>
                </div>
            </section>
        </> 
    )
}
export default AdminPage;