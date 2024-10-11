import React, { useState } from 'react'

export default function Sidebar({activeTab, clickselectTab}) {
    
    return (
    <>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height: '100%'}}>
                
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item" onClick={()=> clickselectTab("Home") }>
                            <a href="#" className={`nav-link ${activeTab==='Home' && 'active'}`} aria-current="page">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Home
                            </a>
                        </li> 
                        <li onClick={()=> clickselectTab("Create Post")}>
                            <a href="#" className={`nav-link ${activeTab==='Create Post' && 'active'}`}>
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Create Post
                            </a>
                        </li>

                        <li onClick={()=> clickselectTab("Calulator")}>
                            <a href="#" className={`nav-link ${activeTab==='Calulator' && 'active'}`}>
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Calulator
                            </a>
                        </li>

                        <li onClick={()=> clickselectTab("User")}>
                            <a href='#' className={`nav-link ${activeTab==='User' && 'active'}`}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                                User
                            </a>
                        </li>

                        <li onClick={()=> clickselectTab("Register")}>
                            <a href='#' className={`nav-link ${activeTab==='Register' && 'active'}`}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                               New User
                            </a>
                        </li>

                        <li onClick={()=> clickselectTab("UserList")}>
                            <a href='#' className={`nav-link ${activeTab==='UserList' && 'active'}`}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                               Register User List
                            </a>
                        </li>

                        <li onClick={()=> clickselectTab("Addtabdata")}>
                            <a href='#' className={`nav-link ${activeTab==='Addtabdata' && 'active'}`}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                               Add Tab Details
                            </a>
                        </li>
                       
                       
                    </ul>
                    <hr/>
                        <div className="dropdown">
                            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                <strong>mdo</strong>
                            </a>
                            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                                <li><a className="dropdown-item" href="#">New project...</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                   
</div>
                </>
                )
}
