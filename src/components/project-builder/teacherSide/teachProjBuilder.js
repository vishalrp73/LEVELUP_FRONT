import './teachProjBuilder.css';

import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LearningObjective from './pages/learnObj';


const TeacherProjectDashboard = () => {

    const [open, setOpen] = useState(true)
    const [large, setLarge] = useState(false)
    const [pic, setPic] = useState("")

    const handleDrawerOpen = () => {
        setOpen(true)
        setLarge(false)
    }

    const handleDrawerClose = () => {
        setOpen(false)
        setLarge(true)
    }


    return (
        <div className = 'teach-proj-builder-wrapper'>

            <Router>


                
            </Router>

        </div>
    )
}

export default TeacherProjectDashboard;