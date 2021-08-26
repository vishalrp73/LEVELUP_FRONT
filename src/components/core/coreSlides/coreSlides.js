import './coreSlides.css';
import { useState } from 'react';

import frame from '../../../img/home/frame.png';
import games from '../../../img/home/joystick.png';
import chatbots from '../../../img/home/robot.png';
import aug_reality from '../../../img/home/aug-reality.png';

import proj_1 from '../../../img/home/project-1.png';
import proj_2 from '../../../img/home/project-2.png';
import proj_3 from '../../../img/home/project-3.png';
import proj_4 from '../../../img/home/project-4.png';

const CoreSlides = () => {

    const [image, setImage] = useState(1);
    const [src, setSrc] = useState(proj_1);

    const handleClick = (event) => {
        setImage(event)

        if (event == 1) {
            setSrc(proj_1)
        } else if (event == 2) {
            setSrc(proj_2)
        } else if (event == 3) {
            setSrc(proj_3)
        } else if (event == 4) {
            setSrc(proj_4)
        }
    }


    return (
        <>
            <div className = 'slides-wrapper'>
                <div className = 'offer-wrap'>
                    
                    <h2 id = 'offer-title'>What we offer</h2>
                    <p id = 'offer-text'>The Creative Problem Solving programme is series of
                        digital creation projects aimed to encourage self-motivation and student
                        agency, designed by New Zealand's leading IT industry experts and schools.</p>
                    <h4 id = 'offer-sub'>What will students create?</h4>
                    
                    
                    <div className = 'blue-btn-wrap'>
                        
                        <div className = 'blue-btn'>
                            <img className = 'blue-img' src = {frame} />
                            <h4 className = 'btn-text'>ANIMATION</h4>
                        </div>

                        <div className = 'blue-btn'>
                            <img className = 'blue-img' src = {games} />
                            <h4 className = 'btn-text'>GAMES</h4>
                        </div>

                        <div className = 'blue-btn'>
                            <img className = 'blue-img' src = {chatbots} />
                            <h4 className = 'btn-text'>CHATBOTS</h4>
                        </div>

                        <div className = 'blue-btn'>
                            <img className = 'blue-img' src = {aug_reality} />
                            <h4 className = 'btn-text'>AUGMENTED REALITY</h4>
                        </div>
                        

                    </div>



                </div>

                <div className = 'laptop-wrap'>
                    <img id = 'laptop-img' src = { src } />
                    <div className = 'radio-wrap'>
                        <input type = 'radio' name = 'select' onClick = {() => handleClick(1)}/>
                        <input type = 'radio' name = 'select' onClick = {() => handleClick(2)}/>
                        <input type = 'radio' name = 'select' onClick = {() => handleClick(3)}/>
                        <input type = 'radio' name = 'select' onClick = {() => handleClick(4)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoreSlides;