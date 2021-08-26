import './entry.css';
import entry_photo from '../../../img/home/student-photo.png';

const Entry = () => {
    return (
        <>
            <div className = 'entry-wrapper'>

                <img id = 'entry-img' src = { entry_photo } />

                <div className = 'entry-panel'>

                    <h2 id = 'entry-title'>What are you waiting for?</h2>
                    <h5 id = 'entry-sub'>Start teaching Digital Technologies today.</h5>

                    <p id = 'entry-text'>If you need more information, we are happy to answer
                        any question you may have.</p>

                    <div className = 'btn-wrap'>
                        <input type = 'button' id = 'enq_now' className = 'entry-btn' value = 'ENQUIRE NOW' />
                        <input type = 'button' id = 'sign_up' className = 'entry-btn' value = 'SIGN UP' />
                    </div>

                </div>


            </div>
        </>
    )
}

export default Entry;