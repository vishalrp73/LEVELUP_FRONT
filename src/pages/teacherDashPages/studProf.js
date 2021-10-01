import './pageCSS/studProf.css';
import { useState, useEffect } from "react";
import StudentProfileBox from '../../components/teacherDash/studProfModal/studProfBox';

const StudentProfiles = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/users')
        .then (response => response.json())
        .then (json => setData(json))
        .catch (err => console.log(err));
    }, [])

    console.log(data);

    return (
        <div id = 'stud-prof-wrap'>


            { data.map(item => (

                <>
                    <StudentProfileBox
                        id = {item.user_id}
                        pic = {item.profile_pic}
                        fName = {item.first_name}
                        lName = {item.last_name}
                        school = {item.school}
                        teacher = {item.teacher_id}
                        dob = {item.date_of_birth}
                        contact = {item.contact_number}
                        email  = {item.email}
                        />

                </>

            ))}

        </div>
    )
}

export default StudentProfiles;