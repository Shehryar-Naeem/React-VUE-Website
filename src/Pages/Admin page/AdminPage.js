import React from "react"
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
                                url="/adminpage" 
                                icon={<i class="fa fa-plus" aria-hidden="true"></i>}
                                text="Add Card Page"
                            />
                            <ListItem 
                                url="/passwordpage" 
                                icon={<i class="fa fa-unlock-alt" aria-hidden="true"></i>}
                                text="Password"
                            />
                            <ListItem 
                                url="/adminpagetwo" 
                                icon={<i class="fa fa-plus" aria-hidden="true"></i>}
                                text="Add Card Page"
                            />
                            <ListItem 
                                url="/helppage" 
                                icon={<i class="fa fa-info-circle" aria-hidden="true"></i>}
                                text="Help"
                            />
                            <ListItem 
                                url="/message" 
                                icon={<i class="fa fa-comment" aria-hidden="true"></i>}
                                text="Message"
                            />
                            <ListItem 
                                url="/setting" 
                                icon={<i class="fa fa-cog" aria-hidden="true"></i>}
                                text="setting"
                            />
                            

                        </ul>
                    </div>
                </div>
            </section>
        </> 
    )
}
export default AdminPage;