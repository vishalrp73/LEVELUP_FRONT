import './pageCSS/studProf.css';
import { useState, useEffect } from "react";

const StudentProfiles = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users')
        .then (response => response.json())
        .then (json => setData(json))
        .catch (err => console.log(err));
    }, [])

    return (
        <div id = 'stud-prof-wrap'>


            { data.map(item => (
                    <div className = 'student-profile-box'>
                        <img id = 'stud-prof-photo' src = { item.profile_pic } />
                        <h4 id = 'stud-prof-text'>{ (item.first_name).toUpperCase() } { (item.last_name).toUpperCase() }</h4>
                    </div>
            ))}

        </div>
    )
}

export default StudentProfiles;