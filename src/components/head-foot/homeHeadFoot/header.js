import './header-footer.css';

import logo from '../../../img/home/logo.png';
import NZ_Flag from '../../../img/home/nz-flag.png';
import Maori_Flag from '../../../img/home/maori-flag.png';

import Modal from '@material-ui/core/Modal';
import LogSign from '../../logSign/logSign';
import { useState, useEffect } from 'react';


const Header = () => {

    const [open, setOpen] = useState(false);
    const [log, setLog] = useState(false);
    const [img, setImg] = useState('');

    const handleClick = (id) => {
        console.log(id)
        if (open == true) {
            setOpen(false)
        } else if (open == false) {
            setOpen(true)
        }

        if (id == 'register') {
            setLog(false)
        } else if (id = 'login') {
            setLog(true)
        }
    }

    

    return (
        <div className = 'home-header-wrapper'>
            <img id = 'home-logo' src = { logo } />

            <div className = 'links-wrap'>
                <h3 id = 'links-text'>HOME</h3>
                <h3 id = 'links-text'>FEATURES</h3>
                <h3 id = 'links-text'>TEACHERS</h3>
            </div>

            <div id = 'right-box'>

                <div id = 'lang-box'>
                    <p id = 'lang-text'>LANG</p>
                    <img id = 'nz-flag' src = { NZ_Flag } />
                    <img id = 'maori-flag' src = { Maori_Flag } />
                </div>

                <a id = 'user-link' >
                    <div id = 'user-box'>
                        <div id = 'temp' style = {{backgroundImage: `url(${img})`}} />
                        <p id = 'register' className = 'user-text' onClick = {(event) => handleClick(event.target.id)}>REGISTER | </p>
                        <p id = 'login' className = 'user-text' onClick = {(event) => handleClick(event.target.id)}>LOGIN</p>
                    </div>
                </a>

                <Modal className = 'mui-modal' open = {open} onClose = {() => handleClick() } >
                    <LogSign log = {log} />
                </Modal>

            </div>
        </div>
    )
}

export default Header;