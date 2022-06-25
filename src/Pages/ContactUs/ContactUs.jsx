import Frame from '../Components/Frame';
import HomeFooter from '../Home/SubComponents/HomeFooter';
import ContactDetailCard from './Components/ContactDetailCard';
import ContactUsHeader from './Components/ContactUsHeader';
import FormCard from './Components/FormCard';

const ContactUs = () => {
  return (
    <Frame title="Contact Us">
      <div className="faq-container">
        <ContactUsHeader />
        <FormCard />
        <ContactDetailCard />
        <HomeFooter />
      </div>
    </Frame>
  )
}

export default ContactUs