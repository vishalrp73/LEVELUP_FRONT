import './compCSS/projItem.css';
import { useState } from 'react';

import Modal from '@material-ui/core/Modal';

import ProjectViewerContainer from '../project-builder/teacherSide/pages/projectViewContainer';

const ProjectItem = (props) => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>

            <div className = 'item-wrapper' id = {props.project.project_id} onClick = {() => handleClick()}>
                <img className = 'proj-img' src = {props.project.preview} />
                <h5 className = 'proj-name'>{props.project.project_name}</h5>
                <p className = 'proj-det'>{props.project.project_id} | {props.project.course} | {props.project.activity_type}</p>
            </div>

            <Modal className = 'project-modal' open = {open} onClose = {() => handleClose()} >

                <ProjectViewerContainer />

            </Modal>


        </div>
    )
}

export default ProjectItem;