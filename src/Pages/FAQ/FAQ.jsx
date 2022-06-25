import Frame from '../Components/Frame';
import HomeFooter from '../Home/SubComponents/HomeFooter';
import DropdownCard from './Components/DropdownCard';
import FAQHeader from './Components/FAQHeader';
import QuestionCard from './Components/QuestionCard';


const FAQ = () => {
  return (
    <Frame title="FAQ">
      <div className="faq-container">
        <FAQHeader />
        <DropdownCard />
        <QuestionCard />
        <HomeFooter />
      </div>
    </Frame>
  )
}

export default FAQ