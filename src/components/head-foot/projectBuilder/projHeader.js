import './projHead-foot.css';

import logo from '../../../img/teachDash/logo.png';
import nz_flag from '../../../img/teachDash/nz_flag.png';
import maori_flag from '../../../img/teachDash/maori_flag.png';

import Stepper from '../../project-builder/header-stepper/stepper';

import { useState, useEffect } from 'react';

const Header = (props) => {

    const [project, setProject] = useState({});

    useEffect(() => {
        setProject(props.project)
    }, [props])


    return (
        <div className = 'header-wrapper'>

            <div id = 'logo-wrapper'>
                <img id = 'logo' src = { logo } />
            </div>

            <Stepper project = {project} />

            <div className = 'submenu-wrapper'>

                <a href = '#' className = 'sub-links' id = 'takeSC'>
                    <h5 className = 'sub-text'>Take Screenshot</h5>
                </a>

                <a href = '#' className = 'sub-links' id = 'helpC'>
                    <h5 className = 'sub-text'>Help Centre</h5>
                </a>

                <a href = '#' className = 'sub-links' id = 'morePr'>
                    <h5 className = 'sub-text'>More Projects</h5>
                </a>

            </div>

            <div id = 'flag-wrapper'>
                <img id = 'nz-flag' src = { nz_flag } />
                <img id = 'maori-flag' src = { maori_flag } />
            </div>


        </div>
    )
}

export default Header;