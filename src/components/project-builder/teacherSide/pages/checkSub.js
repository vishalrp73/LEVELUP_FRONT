import '../../../../pages/teacherDashPages/pageCSS/studSub.css';
import done_icon from '../../../../img/teachDash/check-icon.png';

import { useState, useEffect } from 'react';
import axios from 'axios';

const CheckSubmissions = () => {

    const [subs, setSubs] = useState([])
    let subCollect = [];

    useEffect(() => {
        fetch ('http://localhost:4000/subs')
        .then (response => response.json())
        .then (json => setSubs(json))
        .catch (err => console.log(err));
    }, [])

    const handleCheck = (value) => {
        if (value.target.checked === true) {
            subCollect.push(value.target.id);
        } else if (value.target.checked == false) {
            subCollect.forEach((item, index) => {
                if (item == value.target.id) {
                    subCollect.splice(index, 1) 
                }
            })
        }
    }

    const handleMarkComp = () => {
        axios.post('http://localhost:4000/sub_complete', {
            checkedValues: subCollect
        })
        .then (response => {
            if (response.status === 200) {
                console.log('Removed Data')
            }
        })
        .catch (() => {
            console.log('Unsuccessful marking')
        })
    }

    return (
        <>
            <div className = 'student-sub-wrapper'>
                <div className = 'title-bar'>
                    <h3>PROJECT SUBMISSIONS</h3>
                </div>

                <div id = 'dl_files_box'>
                    <h3>DOWNLOAD FILES</h3>
                </div>

                <div id = 'mark-box'>
                    <img style = {{width: '20px', height: '20px'}} src = {done_icon} />
                    <a id = 'mark-comp-link' onClick = { handleMarkComp } ><h3>MARK AS COMPLETE PROJECT</h3></a>
                </div>
            </div>

            {
                subs.map(user => (
                    <div className = 'stud-sub-panel'>

                        <input id = { user.date_submitted } type = 'checkbox' onClick = { handleCheck } />

                        <div className = 'sub-wrapper'>

                            <img id = 'stud-sub-photo' src = { user.profile_pic } />

                            <div className = 'stud-sub-box'>
                                <h3 id = 'stud-sub-text'>
                                    { (user.first_name).toUpperCase() } submitted their project
                                </h3>
                                <img id = 'sub-img' src = { user.submission } />
                            </div>

                        </div>



                    </div>
                ))
            }



        </>
    )
}

export default CheckSubmissions;