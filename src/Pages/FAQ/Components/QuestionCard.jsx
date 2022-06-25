import { Link } from "react-router-dom"


const QuestionCard = () => {
  return (
    <div className="q-card-section">
        <div className="card q-card">
            <div className="q-header">Still have a question?</div>
            <div className="q-body">If you could not find answer to your question in our FAQ, you can always <Link to="/contact-us">contact us</Link>. We will answer you shortly!</div>
        </div>
    </div>
  )
}

export default QuestionCard