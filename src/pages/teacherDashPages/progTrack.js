import './pageCSS/progTrack.css';
import { useState, useEffect } from 'react';

const ProgressTracker = () => {

    const [users, setUsers] = useState([]);
    const [projects, setProjects] = useState([]);
    const [progHist, setProgHist] = useState([]);
    const [userId, setUserId] = useState(0)
    let totalProj = projects.length;

    useEffect(() => {

        fetch ('http://localhost:4000/users')
        .then (response => response.json())
        .then (json => setUsers(json))
        .catch (err => console.log(err));

        fetch ('http://localhost:4000/projects')
        .then (response => response.json())
        .then (json => setProjects(json))
        .catch (err => console.log(err));

        fetch ('http://localhost:4000/prog_hist')
        .then (response => response.json())
        .then (json => setProgHist(json))
        .catch (err => console.log(err));

    }, [])

    useEffect(() => {
        const savedID = localStorage.getItem("user_id")
        console.log(savedID)
    }, [])

    const banks = (user_id) => {
        return (
            projects.map(project => (
                <div className = 'prog-icons'>
                    <div id = { (user_id) + "-" + (project.project_id) } className = 'banks'>{ project.project_id }</div>
                    { validate(user_id, project.project_id) }
                </div>
            ))
        )
    }

    const validate = (user_id, proj_id) => {
        for (let i = 0; i < progHist.length; i++) {
            if (progHist[i].user_id == user_id && progHist[i].project_id == proj_id) {
                if (progHist[i].date_completed != null) {
                    let colour = document.getElementById((user_id) + "-" + (proj_id));
                    /* IF ERROR: Delete line below, save, refresh page, add line back in and save */
                    /* MIGHT BE BECAUSE USEEFFECT HOOK */
                    colour.style.backgroundColor = '#99EDCC';
                }
            }
        }
    }

    const projCount = (user_id) => {
        let comp = 0;
        for (let i = 0; i < progHist.length; i++) {
            if (progHist[i].user_id == user_id && progHist[i].project_id != null) {
                if (progHist[i].date_completed != null) {
                    comp++
                }
            }
        }
        return(comp)
    }

    return (
        <div>
            <div className = 'prog-head-wrap'>

                <h2 id = 'prog-title-text'>BEGINNER COURSE</h2>
                <h5 id = 'prog-export-text'>EXPORT AS SPREADSHEET</h5>
            </div>


                { users.map(user => (
                    <div className = 'prog-track-wrapper'>

                        <div className = 'prog-text-wrap'>
                            <h4 id = 'prog-text'>{ (user.first_name).toUpperCase() } { (user.last_name).toUpperCase() }</h4>
                            <h5 id = 'prog-proj-comp'>{ projCount(user.user_id) } / { totalProj } PROJECTS COMPLETED</h5>
                        </div>
                        { banks(user.user_id) }

                    </div>
                ))}

        </div>
    )
}

export default ProgressTracker;