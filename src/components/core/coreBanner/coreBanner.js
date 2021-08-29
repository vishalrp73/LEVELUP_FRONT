import './coreBanner.css';
import { useState } from 'react';
import { Modal } from '@material-ui/core';
import LogSign from '../../logSign/logSign';

const CoreBanner = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else if (!open) {
            setOpen(true)
        }
    }

    return (
        <>
            <div className = 'banner-wrapper'>
                <div id = 'content-wrap' >
                    <h1 className = 'banner-heading'>Prepare young minds for a better <span id = 'fut_blue'>future.</span></h1>
                    <p className = 'banner-text'>Let us help you advance students in Digital
                        Technologies and other learning areas with our project-based learning
                        programme.</p>

                    <div id = 'button-wrap' >
                        <div id = 'sign-wrap' >
                            <input className = 'buttons' id = 'sign_up' type = 'button' value = 'SIGN UP' onClick = {() => handleClick()}/>
                            <p id = 'sign-text'>*Basic subscription includes the first 15 projects
                                free of charge.</p>
                        </div>
                        <input className = 'buttons' id = 'learn_more' type = 'button' value = 'LEARN MORE' />
 
                    </div>
                </div>

                <Modal className = 'mui-modal' open = {open} onClose = {() => handleClick()}>
                    <LogSign log = {false}/>
                </Modal>
            </div>
        </>

    )
}

export default CoreBanner;