import Frame from '../Components/Frame';
import HomeFooter from '../Home/SubComponents/HomeFooter';
import PPDetail from './Components/PPDetail';

const PrivacyPolicy = () => {
  return (
    <Frame title="Privacy Policy">
      <div className="note-wrapper">
        <PPDetail />        
      </div>
      <HomeFooter />
    </Frame>
  )
}

export default PrivacyPolicy