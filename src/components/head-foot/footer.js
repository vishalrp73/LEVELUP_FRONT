import './header-footer.css';

const Footer = () => {
    return (
        <div className = 'footer-wrapper'>
            
            <div className = 'text-wrapper'>

                <div className = 'text-box'>
                    <h4 className = 'title-text'>COMPANY</h4>
                    <ul className = 'text-items'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Partners</li>
                    </ul>
                </div>

                <div className = 'text-box'>
                    <h4 className = 'title-text'>COURSES</h4>
                    <ul className = 'text-items'>
                        <li>Register</li>
                        <li>Login</li>
                        <li>Projects</li>
                        <li>Teachers</li>
                        <li>Parents</li>
                        <li>Resources</li>
                    </ul>
                </div>

                <div className = 'text-box'>
                    <h4 className = 'title-text'>SUPPORT</h4>
                    <ul className = 'text-items'>
                        <li>FAQs</li>
                        <li>Helpdesk</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className = 'text-box'>
                    <h4 className = 'title-text'>LEGAL</h4>
                    <ul className = 'text-items'>
                        <li>Terms &amp; Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className = 'text-box'>
                    <h4 className = 'title-text'>LevelUp Works</h4>
                    <p>LevelUp Works is an Auckland-based enterprise
                        dedicated to developing game-based learning
                        software to help teachers in repsonse to New
                        Zealand Digital Technologies &amp; Hangarau
                        Matihiko.<br/>
                        alan@levelupworks.com<br/>
                        (021) 668 185
                    </p>
                </div>





            </div>

        </div>
    )
}

export default Footer;