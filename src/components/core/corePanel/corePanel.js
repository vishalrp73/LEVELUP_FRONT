import './corePanel.css';

import creative from '../../../img/idea.png';
import brain from '../../../img/brain.png';
import hands from '../../../img/team.png';
import atom from '../../../img/atom.png';

const CorePanel = () => {
    return (
        <>
            <div className = 'panel-wrapper'>
                <h4 id = 'panel-text'>Teaching kids programming and digital
                    skills is MORE than just writing code.</h4>

                <div id = 'panels' >

                    <div className = 'panel-container' id = 'create'>
                        <img className = 'inner-img' src = {creative} />
                        <h2 className = 'inner-text'>Creativity &amp; Individuality</h2>
                    </div>

                    <div className = 'panel-container' id = 'critical'>
                        <img className = 'inner-img' src = {brain} />
                        <h2 className = 'inner-text'>Critical Thinking &amp; Problem Solving</h2>
                    </div>

                    <div className = 'panel-container' id = 'communication'>
                        <img className = 'inner-img' src = {hands} />
                        <h2 className = 'inner-text'>Communication &amp; Collaboration</h2>
                    </div>

                    <div className = 'panel-container' id = 'technology'>
                        <img className = 'inner-img' src = {atom} />
                        <h2 className = 'inner-text'>Technology &amp; Future Focus</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CorePanel;