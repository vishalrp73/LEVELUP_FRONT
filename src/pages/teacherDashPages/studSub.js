import './pageCSS/studSub.css';
import { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';
import axios from 'axios';

import done_icon from '../../img/teachDash/check-icon.png';

const StudentSubmissions = () => {

    const [subs, setSubs] = useState([]);
    const [open, setOpen] = useState([]);
    let subCollect = [];

    useEffect(() => {
        fetch ('http://localhost:4000/subs')
        .then (response => response.json())
        .then (json => {
            setSubs(json)
            setOpen(new Array(json.length).fill(false)) // Fills array with false values
        })
        .catch (err => console.log(err));
    }, [])


    /* if button is clicked, pushes value to array, if button is unchecked, value is removed from array */

    const handleCheck = (value) => {
        if (value.target.checked == true) {
          subCollect.push(value.target.id);
          console.log(subCollect);
        } else if (value.target.checked == false ) {
          subCollect.forEach((item, index) => { if(item == value.target.id) {
            subCollect.splice(index, 1);
            console.log(subCollect);
          }})
        }
      };

    const handleOpen = (i) => {
        let temp = [...open];
        temp[i] = true;
        setOpen(temp);
    }

    const handleClose = (i) => {
        let temp = [...open];
        temp[i] = false;
        setOpen(temp);
    }

    // Send data to backend to handle completion

    const handleMarkComp = () => {
        axios.post('http://localhost:4000/sub_complete', {
            checkedValues: subCollect
        })
        .then (response => {
            if (response.status === 200) {
                console.log('Removed Data');
            }
        })
        .catch (() => {
            console.log('Unsuccessful marking')
        })
    }

    const body = (sub) => {
        return (
            <div className = 'modal-wrapper' >
                <img className = 'modal-img' src = { sub } />
            </div>
        )
    }

    return (
        <div>

            <div className = 'student-sub-wrapper'>


                <div className = 'title-bar'>
                    <h3>PROJECT SUBMISSIONS</h3>
                    
                    <div id = 'dl_files-box'>
                        <h3>DOWNLOAD FILES</h3>
                    </div>

                    <div id = 'mark-box'>
                        <img style = {{width: '20px', height: '20px'}} src = {done_icon} />
                        <a id = 'mark-comp-link' onClick = { handleMarkComp }><h3>MARK AS COMPLETE PROJECT</h3></a>
                    </div>
                </div>

                { /* Maps submissions to individual panels */}

                { open && subs.map((user, index) => (
                    <div className = 'stud-sub-panel'>

                        <input id = { user.date_submitted } type = 'checkbox' onClick = {handleCheck}/>

                        <div className = 'sub-wrapper'>

                            <img id = 'stud-sub-photo' src = { user.profile_pic } />

                            <div className = 'stud-sub-box'>
                                <h3 id = 'stud-sub-text'>
                                    { (user.first_name).toUpperCase() } submitted their project</h3>
                                <img id = 'sub-img' src = { user.submission } onClick = { () => handleOpen(index) } />
                                
                                <Modal open = {open[index]} onClose = {() => handleClose(index)} >
                                    { body(user.submission) }
                                </Modal>
                            </div>

                            <h5 id = 'stud-sub-timestamp'>{ new Date(user.date_submitted).toUTCString() }</h5>
                        </div>

                    </div>
                ))}





            </div>

        </div>
    )
}

export default StudentSubmissions;