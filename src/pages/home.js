import Header from '../components/head-foot/homeHeadFoot/header';
import Footer from '../components/head-foot/homeHeadFoot/footer';
import CoreBanner from '../components/core/coreBanner/coreBanner';
import CoreSlides from '../components/core/coreSlides/coreSlides';
import CorePanel from '../components/core/corePanel/corePanel';
import InfoSelect from '../components/core/infoSelect/infoSelect';
import Entry from '../components/core/entry/entry';



const Home = () => {
    return(
        <>
            <Header />
            <CoreBanner />
            <CoreSlides />
            <CorePanel />
            <InfoSelect />
            <Entry />
            <Footer />
        </>
    )
}

export default Home;