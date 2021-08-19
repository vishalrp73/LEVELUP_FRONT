import './compCSS/proj_item.css';

const ProjectItem = (props) => {
    return (
        <div className = 'item-wrapper' id = {props.project.project_id}>
            <img className = 'proj-img' src = {props.project.preview} />
            <h5 className = 'proj-name'>{props.project.project_name}</h5>
            <p className = 'proj-det'>{props.project.project_id} | {props.project.course} | {props.project.activity_type}</p>
        </div>
    )
}

export default ProjectItem;