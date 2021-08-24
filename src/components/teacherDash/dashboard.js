import './dashboard.css';

import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';

import ProgressTracker from '../../pages/teacherDashPages/progTrack';
import StudentProfiles from '../../pages/teacherDashPages/studProf';
import StudentRequests from '../../pages/teacherDashPages/studReq';
import StudentSubmissions from '../../pages/teacherDashPages/studSub';
import ProjectLibrary from '../../pages/projLibrary';

import teach_img from '../../img/teachDash/teacher_photo.png';
import pt_icon from '../../img/teachDash/pt_icon.png';
import sp_icon from '../../img/teachDash/sp_icon.png';
import help_icon from '../../img/teachDash/help_icon.png';
import sub_icon from '../../img/teachDash/sub_icon.png';
import lib_icon from '../../img/teachDash/library_icon.png';
import caret_left from '../../img/teachDash/caret_left.png';
import caret_right from '../../img/teachDash/caret_right.png';
import user_icon from '../../img/teachDash/user_icon.png';
import set_icon from '../../img/teachDash/settings_icon.png';
import log_icon from '../../img/teachDash/logout_icon.png';

const Dashboard = () => {

    const [open, setOpen] = useState(true);
    const [large, setLarge] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true)
        setLarge(false)
    }

    const handleDrawerClose = () => {
        setOpen(false)
        setLarge(true)
    }

    return (
        <div className = 'dashboard-wrapper'>


            <Router>

                <div className = {clsx('drawer-wrapper', {
                                ['drawer-open']: open,
                                ['drawer-close']: !open,
                })} >

                    <div id = 'teacher-photo-wrap'>
                        <img id = 'teacher-photo' src = { teach_img } />
                    </div>

                    <div className = 'nav-wrapper'>

                        <NavLink exact to = '/' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { pt_icon } />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >PROGRESS TRACKER</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/studProf.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { sp_icon } />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >STUDENT PROFILES</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/studReq.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { help_icon } />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >STUDENT REQUESTS</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/studSub.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { sub_icon } />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >STUDENT SUBMISSIONS</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/projLibrary.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { lib_icon } />
                                <h2 className = {clsx('nav-text', {
                                                ['hidden']: !large,
                                                ['hidden']: large,
                                })} >PROJECT LIBRARY</h2>
                            </div>
                        </NavLink>

                    </div>

                    <a onClick = { handleDrawerClose } className = {clsx('carets', {
                                                    ['hidden']: !large,
                                                    ['hidden']: large,
                    })} >
                        <div id = 'left-button'>
                            <img id = 'caret-left' src = { caret_left } />
                        </div>
                    </a>

                    <a onClick = { handleDrawerOpen } className = {clsx('carets', {
                                                    ['hidden']: large,
                                                    ['hidden']: !large,
                    })} >
                        <div id = 'right-button'>
                            <img id = 'caret-right' src = { caret_right } />
                        </div>
                    </a>



                    <div className = {clsx('bottom-nav', {
                                    ['bottom-flex']: open,
                                    ['bottom-flex']: !open,
                    })} >

                            <a href = '#' className = 'bottom-links'>
                                <img className = 'bottom-img' src = { user_icon } />
                                <p className = {clsx('bottom-text', {
                                            ['hidden']: !large,
                                            ['hidden']: large,
                                })} >Profile</p>
                            </a>

                            <a href = '#' className = 'bottom-links'>
                                <img className = 'bottom-img' src = { set_icon } />
                                <p className = {clsx('bottom-text', {
                                            ['hidden']: !large,
                                            ['hidden']: large,
                                })} >Settings</p>
                            </a>

                            <a href = '#' className = 'bottom-links'>
                                <img className = 'bottom-img' src = { log_icon } />
                                <p className = {clsx('bottom-text', {
                                            ['hidden']: !large,
                                            ['hidden']: large,
                                })} >Log Out</p>
                            </a>

                    </div>
                </div>



                <div className = 'dash-wrap'>

                    <div className = 'inlay'>

                            <Switch>
                                    
                                    <Route exact path = '/'>
                                        <ProgressTracker />
                                    </Route>

                                    <Route exact path = '/studProf.js'>
                                        <StudentProfiles />
                                    </Route>

                                    <Route exact path = '/studReq.js'>
                                        <StudentRequests />
                                    </Route>

                                    <Route exact path = '/studSub.js'>
                                        <StudentSubmissions />
                                    </Route>

                                    <Route exact path = '/projLibrary.js'>
                                        <ProjectLibrary />
                                    </Route>


                            </Switch>
                    </div>


                </div>

            </Router>
        
        </div>
    )
}

export default Dashboard;