import '../../../components/teacherDash/dashboard.css';

import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LearningObjective from './pages/learnObj';
import Instructions from './pages/instructions';
import VideoTutorial from './pages/videoTut';
import PreviewProject from './pages/previewProj';
import CheckSubmissions from './pages/checkSub';
import OfflineActivities from './pages/offAct';
import QuizResults from './pages/quizRes';

import teacher_photo from '../../../img/teachDash/teacher_photo.png';

import learn_obj_icon from '../../../img/projBuilder/obj_icon.png';
import instructions_icon from '../../../img/projBuilder/instructions_icon.png';
import video_icon from '../../../img/projBuilder/video_icon.png';
import preview_icon from '../../../img/projBuilder/preview_icon.png';
import sub_icon from '../../../img/projBuilder/sub_icon.png';
import offline_icon from '../../../img/projBuilder/offline_icon.png';
import quiz_icon from '../../../img/projBuilder/quiz_icon.png';

import caret_left from '../../../img/teachDash/caret_left.png';
import caret_right from '../../../img/teachDash/caret_right.png';
import user_icon from '../../../img/teachDash/user_icon.png';
import set_icon from '../../../img/teachDash/settings_icon.png';
import log_icon from '../../../img/teachDash/logout_icon.png';


const TeacherProjectDashboard = (props) => {

    const [open, setOpen] = useState(true)
    const [large, setLarge] = useState(false)
    const [pic, setPic] = useState("")
    const [project, setProject] = useState(props.project)

    useEffect(() => {
        setProject(props.project)
    }, [props])

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
                        <img id = 'teacher-photo' src = {teacher_photo} />
                    </div>

                    <div className = 'nav-wrapper'>

                        <NavLink to = '/learnObj.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { learn_obj_icon } />
                                <h2 className = {clsx('nav-text', {
                                    ['hidden']: !large,
                                    ['hidden']: large,
                                })} >LEARNING OBJECTIVES</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/instructions.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { instructions_icon } />
                                <h2 className = {clsx('nav-text', {
                                    ['hidden']: !large,
                                    ['hidden']: large,
                                })} >INSTRUCTIONS</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/videoTut.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { video_icon } />
                                <h2 className = {clsx('nav-text', {
                                    ['hidden']: !large,
                                    ['hidden']: large,
                                })} >VIDEO TUTORIAL</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/previewProj.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { preview_icon } />
                                <h2 className = {clsx('nav-text', {
                                    ['hidden']: !large,
                                    ['hidden']: large,
                                })} >PREVIEW PROJECT</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/checkSub.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { sub_icon } />
                                <h2 className = {clsx('nav-text', {
                                    ['hidden']: !large,
                                    ['hidden']: large,
                                })} >CHECK SUBMISSIONS</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/offAct.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { offline_icon } />
                                <h2 className = {clsx('nav-text', {
                                    ['hidden']: !large,
                                    ['hidden']: large,
                                })} >OFFLINE ACTIVITIES</h2>
                            </div>
                        </NavLink>

                        <NavLink to = '/quizRes.js' className = 'nav-link' activeClassName = 'nav-link-active' >
                            <div className = 'nav-buttons'>
                                <img className = {clsx('nav-icons', {
                                                ['icons-large']: !large,
                                                ['icons-large']: large,
                                })} src = { quiz_icon } />
                                <h2 className = {clsx('nav-text', {
                                    ['hidden']: !large,
                                    ['hidden']: large,
                                })} >VIEW QUIZ RESULTS</h2>
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

                                <Route exact path = '/learnObj.js' >
                                    <LearningObjective project = {project} />
                                </Route>

                                <Route exact path = '/instructions.js' >
                                    <Instructions project = {project} />
                                </Route>

                                <Route exact path = '/videoTut.js' >
                                    <VideoTutorial project = {project} />
                                </Route>

                                <Route exact path = '/previewProj.js' >
                                    <PreviewProject project = {project} />
                                </Route>

                                <Route exact path = '/checkSub.js' >
                                    <CheckSubmissions project = {project} />
                                </Route>

                                <Route exact path = '/offAct.js' >
                                    <OfflineActivities project = {project} />
                                </Route>

                                <Route exact path = '/quizRes.js' >
                                    <QuizResults project = {project} />
                                </Route>


                            </Switch>

                        </div>

                    </div>



            </Router>

        </div>
    )
}

export default TeacherProjectDashboard;