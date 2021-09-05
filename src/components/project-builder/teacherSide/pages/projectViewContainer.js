import Header from '../../../../components/head-foot/projectBuilder/projHeader';
import TeacherProjectDashboard from '../teachProjBuilder';
import Footer from '../../../../components/head-foot/projectBuilder/projFooter';

import { useState, useEffect } from 'react';

const ProjectViewerContainer = (props) => {

    const [project, setProject] = useState({})

    useEffect(() => {
        setProject(props.project)
    }, [props])


    return (
        <>
            <Header project = {project} />
            <TeacherProjectDashboard project = {project} />
            <Footer />
        </>
    )
}

export default ProjectViewerContainer;