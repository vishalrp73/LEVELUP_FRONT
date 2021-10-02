import './studProfBox.css';
import { useState, useEffect } from 'react';
import { Modal } from '@material-ui/core';

import Header from '../../head-foot/teachDash/header';


const StudentProfileBox = (props) => {

    const [id, setId] = useState(0);
    const [pic, setPic] = useState('');
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [school, setSchool] = useState('');
    const [teacher, setTeacher] = useState('');
    const [dob, setDob] = useState('');
    const [contNum, setContNum] = useState('');
    const [email, setEmail] = useState('');


    const [open, setOpen] = useState(false);

    useEffect(() => {

        setId(props.id);
        setPic(props.pic);
        setFName(props.fName);
        setLName(props.lName);
        setSchool(props.school);
        setTeacher(props.teacher);
        setDob(props.dob);
        setContNum(props.contact);
        setEmail(props.email);


    }, [props]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const detKeyVal = {
        'School': school,
        'Teacher': `${teacher} - Jasmina Salvador`,
        'Course': 'Beginner',
        'Date of Birth': dob,
        'Contact No': contNum,
        'Email Address': email
    }

    return (
        <>
            <div className = 'student-profile-box' id = {id} onClick = { () => handleOpen() }>

                <img id = 'stud-prof-photo' src = {pic} />
                <h4 id = 'stud-prof-text'>
                    {(fName).toUpperCase()} {(lName).toUpperCase()}
                </h4>

            </div>

            <Modal className = 'stud-prof-modal' open = {open} onClose = {() => handleClose()} >

                <>

                <Header />

                <div className = 'stud-prof-modal-core'>
                    
                    
                    <p className = 'close-modal' onClick = {() => handleClose()}>x</p>
                    
                    <div className = 'stud-prof-core-wrapper'>

                        <div className = 'stud-prof-image-box'>
                            <img src = {pic} className = 'stud-img' />

                            <input type = 'button' className = 'img-box-btn' value = 'EDIT PROFILE' />
                            <input type = 'button' className = 'img-box-btn' value = 'CHANGE PHOTO' />

                        </div>

                        <div className = 'stud-prof-detail-box'>
                            
                            <h1 className = 'stud-name'>{fName} {lName}</h1>

                            <div className = 'detail-distro'>

                                {
                                    Object.entries(detKeyVal).map(detail => (
                                        <div className = 'detail-row-wrap'>

                                            <h4 className = 'detail-key'>
                                                {detail[0]}
                                            </h4>

                                            <h4 className = 'detail-value'>
                                                {detail[1]}
                                            </h4>

                                        </div>
                                    ))
                                }


                            </div>


                        </div>

                    </div>

                    <input type = 'button' value = 'BACK TO PROFILES'
                            className = 'exit-modal-btn'
                            onClick  = {() => handleClose()} />

                </div>

                </>


            </Modal>


        </>
    )

};

export default StudentProfileBox;