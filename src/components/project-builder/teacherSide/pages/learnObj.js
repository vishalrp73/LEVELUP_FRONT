import '../pageCSS/learnObj.css';

import { useState, useEffect } from 'react';

const LearningObjective = (props) => {

    const [project, setProject] = useState(props.project)

    useEffect(() => {
        setProject(props.project)
    }, [props])


    return (
        <>
            <p style = {{textAlign: 'center'}}>{project.learning_objective}</p>
        </>
    )
}

export default LearningObjective;