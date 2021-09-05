import './stepper.css';

import { useState, useEffect } from 'react';


const Stepper = (props) => {

    const [project, setProject] = useState({})
    const [projectList, setProjectList] = useState([])
    const [edit, setEdit] = useState()

    useEffect(() => {
        setProject(props.project)

        fetch('http://localhost:4000/projects')
        .then (response => response.json())
        .then (json => setProjectList(json))
        .catch (err => console.log(err))

        let x = document.getElementById(project.project_id)
        x.style.backgroundColor = '#FDF7C0'
        x.style.border = '3px solid #43C0F6'
        x.style.height = '40px'
        x.style.width = '40px'
        x.style.fontSize = '24px'


    }, [props])

    



    return (
        <div className = 'stepper-wrapper'>
            
            <div className = 'stepper-text-wrapper'>
                <p className = 'stepper-title-text'>PROJECT</p>
                <p className = 'stepper-project-name'>{project.project_name}</p>
            </div>

            <div className = 'project-list-wrapper' >

                {
                    projectList.map(circle => (
                        <div className = 'project-circle' id = {circle.project_id}>
                            <p>{circle.project_id}</p>
                        </div>
                    ))
                }
            
            </div>


        </div>
    )
}

export default Stepper;