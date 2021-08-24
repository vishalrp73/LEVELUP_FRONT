import './pageCSS/studReq.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import done_icon from "../../img/teachDash/check-icon.png";

const StudentRequests = () => {

    const [requests, setRequests] = useState([]);
    let collection = [];

    useEffect(() => {
        fetch('http://localhost:4000/requests')
        .then (response => response.json())
        .then (json => setRequests(json))
        .catch (err => console.log(err));
    }, [])

    const handleClick = (value) => {
        if (value.target.checked == true ) {
            collection.push(value.target.id);
            console.log(collection)
        } else if (value.target.checked == false) {
            collection.forEach((item, index) => {
                if (item == value.target.id) {
                    collection.splice(index, 1);
                    console.log(collection);
                }
            })
        }
    }

    const handleMarkComp = () =>  {
        axios.post ('http://localhost:4000/remove', {
            checkedValues: collection
        })
        .then (response => {
            if (response.status === 200) {
                console.log('Removed data')
            }
        })
        .catch (() => {
            console.log('Unsuccessful marking')
        })
    }


    return (
        <div>

                <div className = 'title-bar'>
                    <h3>HELP REQUESTS</h3>
                

                    <div id = 'mark-box' onClick = { handleMarkComp }>
                        <img style = {{width: '20px', height: '20px'}} src = {done_icon} />
                        <a id = 'mark-comp-link'><h3>MARK AS DONE</h3></a>
                    </div>
                </div>

        { requests.map(user => (
            <div className = 'stud-req-wrapper'>
                <input type = 'checkbox' id = { user.date_created } onChange = { handleClick } />

                <div className = 'requests-wrap'>
                    <img id = 'req-stud-photo' src = { user.profile_pic } />
                    <h3 id = 'req-stud-text'>{ (user.first_name).toUpperCase() } needs help with their project</h3>
                    <h5 id = 'req-timestamp'>{ new Date(user.date_created).toUTCString()}</h5>
                </div>
            </div>
        ))}


        </div>
    )
}

export default StudentRequests;