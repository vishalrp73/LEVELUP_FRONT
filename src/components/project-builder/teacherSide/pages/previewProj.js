import '../pageCSS/previewProj.css';

import { useState, useEffect } from 'react';

const PreviewProject = (props) => {

    const [project, setProject] = useState(props.project)

    useEffect(() => {
        setProject(props.project)
    }, [props])

    return (
        <>
            <img src = {project.preview} />
        </>
    )
}

export default PreviewProject;