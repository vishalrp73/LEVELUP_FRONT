import './header-footer.css';

import Logo from '../../img/logo.png';
import NZ_Flag from '../../img/nz-flag.png';
import Maori_Flag from '../../img/maori-flag.png';

const Header = () => {
    return (
        <div className = 'header-wrapper'>
            <img id = 'logo' src = { Logo } />

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
                        <div id = 'temp' />
                        <p className = 'user-text'>REGISTER | </p>
                        <p className = 'user-text'>LOGIN</p>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Header;