import {Link} from 'react-router-dom';

const BuyToken = () => {
  return (
    <div className='bt-container'>
        <div className='bt-desc'>
            <div className='bt-desc-header'>Buy electricity token conveniently </div>
            <div className='bt-desc-body'>MyRecharge allows you to buy electricity token and track your meter payments with our new monthly tracker feature</div>
            <Link to="/buy-token">Buy electricity token</Link>
        </div>
        <div className='bt-img'>
            <img src='./assets/images/mediamodifier.svg' alt='media'/>
        </div>
    </div>
  )
}

export default BuyToken