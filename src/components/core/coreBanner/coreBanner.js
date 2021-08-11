import './coreBanner.css';

const CoreBanner = () => {
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
                            <input className = 'buttons' id = 'sign_up' type = 'button' value = 'SIGN UP' />
                            <p id = 'sign-text'>*Basic subscription includes the first 15 projects
                                free of charge.</p>
                        </div>
                        <input className = 'buttons' id = 'learn_more' type = 'button' value = 'LEARN MORE' />
 
                    </div>
                </div>
            </div>
        </>

    )
}

export default CoreBanner;