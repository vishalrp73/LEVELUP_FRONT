import '../pageCSS/projectViewContainer.css';

import Header from '../../../../components/head-foot/projectBuilder/projHeader';
import TeacherProjectDashboard from '../teachProjBuilder';
import Footer from '../../../../components/head-foot/projectBuilder/projFooter';

const ProjectViewerContainer = () => {
    return (
        <>
            <Header />
            <TeacherProjectDashboard />
            <Footer />
        </>
    )
}

export default ProjectViewerContainer;