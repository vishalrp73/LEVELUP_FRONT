import './infoSelect.css';
import { useState } from 'react';

const InfoSelect = () => {

    const learn_path = (
        <div className = 'panel-wrap'>
            <h2 id = 'panel-title'>Learning Pathways (Selection 1)</h2>
            <p id = 'panel-sub'>Learning pathways tab</p>
            <ul>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>Placeholder Title</h5>
                    <p className = 'item-text'>Placeholder list item text</p>
                </li>
            </ul>
        </div>
    )

    const digi_tech = (
        <div className = 'panel-wrap'>
            <h2 id = 'panel-title'>Digital Technologies (Selection 2)</h2>
            <p id = 'panel-sub'>Digital technologies tab</p>
            <ul>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>Placeholder Title</h5>
                    <p className = 'item-text'>Placeholder list item text</p>
                </li>
            </ul>
        </div>
    )

    const key_comp = (
        <div className = 'panel-wrap'>
            <h2 id = 'panel-title'>Enhance Key Competencies</h2>
            <p id = 'panel-sub'>The programme enhances capabilities of students in the 5 Key
                            Competencies identified in the New Zealand curriculum.</p>
            <ul>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>THINKING</h5>
                    <p className = 'item-text'>In particular the programme focused on problem
                            solving, design thinking and computational thinking.</p>
                </li>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>DISCERNING CODES</h5>
                    <p className = 'item-text'>Analysing language, symbols, and texts in order to
                            understand and make sense of the codes in which knowledge is expressed.</p>
                </li>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>SELF-MANAGEMENT</h5>
                    <p className = 'item-text'>Projects and challenges are designed to motivate students
                            to explore and experiment with self-motivation.</p>
                </li>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>RELATIONSHIPS WITH PEERS</h5>
                    <p className = 'item-text'>The programme is designed to with unplugged sessions
                            where students interact in a range of different situations, including
                            things like being able to listen well, recognise different points of view,
                            and share ideas.</p>
                </li>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>PARTICIPATION AND COLLABORATION</h5>
                    <p className = 'item-text'>The programme encourages students to be involved in
                            communities, such as family, whanau, school and contribute and
                            make connections with other people.</p>
                </li>
            </ul>
        </div>
    )

    const ir_4 = (
        <div className = 'panel-wrap'>
            <h2 id = 'panel-title'>IR4.0 (Selection 4)</h2>
            <p id = 'panel-sub'>Whatever IR4.0 Means</p>
            <ul>
                <li className = 'panel-item'>
                    <h5 className = 'item-title'>Placeholder Title</h5>
                    <p className = 'item-text'>Placeholder list item text</p>
                </li>
            </ul>
        </div>
    )

    const [panel, setPanel] = useState(1);

    const handleClick = (event) => {
        setPanel(event);
        console.log(panel)

    }

    const renderText = (e) => {
        if (panel == 1) {
            return learn_path
        } else if (panel == 2) {
            return digi_tech
        } else if (panel == 3) {
            return key_comp
        } else if (panel == 4) {
            return ir_4
        }
    }




    return (
        <>
            <div className = 'info-wrapper'>
                <h2 className = 'info-title'>How our programme helps teachers and schools</h2>

                <div id = 'info-btn-group'>
                    <input name = 'group' className = 'info-btn' type = 'button' value = 'LEARNING PATHWAYS' onClick = {() => handleClick(1)} />
                    <input name = 'group' className = 'info-btn' type = 'button' value = 'DIGITAL TECHNOLOGIES' onClick = {() => handleClick(2)} />
                    <input name = 'group' className = 'info-btn' type = 'button' value = 'KEY COMPETENCIES' onClick = {() => handleClick(3)} />
                    <input name = 'group' className = 'info-btn' type = 'button' value = 'IR4.0' onClick = {() => handleClick(4)} />
                </div>

                    <div className = 'text-panel'>
                        { renderText() }
                    </div>
                
            </div>
        </>
    )
}

export default InfoSelect;