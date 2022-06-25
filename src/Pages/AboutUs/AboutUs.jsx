import Frame from '../Components/Frame';
import Intro from './Components/Intro';
import HomeFooter from '../Home/SubComponents/HomeFooter';
import AboutInfo from './Components/AboutInfo';
import MissionPurpose from './Components/MissionPurpose';
import BuyToken from './Components/BuyToken';

const AboutUs = () => {
  return (
    <Frame title="About Us">
      <div className='other-wrapper'>
        <Intro />
        <AboutInfo />
        <MissionPurpose />
        <BuyToken />
        <HomeFooter />
      </div>
    </Frame>
  )
}

export default AboutUs