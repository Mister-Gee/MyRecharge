import Frame from '../Components/Frame';
import HomeFooter from '../Home/SubComponents/HomeFooter';
import TCDetails from './Components/TCDetails';

const TermsAndContions = () => {
  return (
    <Frame title="Terms and Conditions">
      <div className="note-wrapper">
        <TCDetails />
      </div>
      <HomeFooter />
    </Frame>
  )
}

export default TermsAndContions