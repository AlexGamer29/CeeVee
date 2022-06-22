import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Routes } from "react-router-dom";
// import { Home } from "./Pages/Home";
// import { About } from "./Pages/About";
// import { Contact } from "./Pages/Contact.jsx";
// import { Product } from "./Pages/Product";
// import SignIn from "./Pages/SignIn.jsx";
import Home from '../../pages/Home/Home'
import './NavBar.css';
import CeeVee from '../../assests/img/CeeVeebg.png'
import CV from "../../pages/CV/CV";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [color, setColor] = useState("60E1CB");

    document.body.style.backgroundColor = color;

    return (
        <div >
            <Router>
                <nav className="navbar">
                    <div className="nav-container">
                        <NavLink exact to="/" className="nav-logo">
                            <img src={CeeVee} alt="logo" className="biden-logo" />
                        </NavLink>

                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => { handleClick(); setColor("60E1CB"); }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => { handleClick(); setColor("60E1CB"); }}
                                >
                                    CV Templates
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/product"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => { handleClick(); setColor("60E1CB"); }}
                                >
                                    Product
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/write-cv"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => { handleClick(); setColor("60E1CB"); }}
                                >
                                    How to Write CVs?
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/community"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => { handleClick(); setColor("60E1CB"); }}
                                >
                                    Community
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/log-in"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => { handleClick(); setColor("60E1CB"); }}
                                >
                                    Log in
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/register"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={() => { handleClick(); setColor("60E1CB"); }}
                                >
                                    Register Now
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path="/" element={ <Home/>} />
                    <Route path="/about" element={ <CV />} />
                    <Route path="/product" />
                    <Route path="/contact" />
                    <Route path="/signin" />
                </Routes>
            </Router>
        </div>
    );
}

export default NavBar;