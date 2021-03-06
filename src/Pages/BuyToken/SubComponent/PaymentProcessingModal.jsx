import React, {useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import BounceLoader from "react-spinners/BounceLoader";
import { recharge_meter } from '../../../Services/rechargeService';
import { serviceError } from '../../../utilities/functions';

const PaymentProcessingModal = (props) => {

  useEffect(() => {
    if(props.steps === 3){
        const confirmRecharge = async() => {
            try{
              const res = await recharge_meter(props.tokenObject)
              if(res.status === 200 && res.data.response !== null){
                props.setResponseObj(res.data.response)
                props.setShowError(false)
              }
              else{
                props.setError("An Error Occured")
                props.setShowError(true)
              }
            }
            catch(err){
              serviceError(err, props.setError, props.setShowError)
            }
            finally{
              props.setSteps(4)
            }
        } 
        confirmRecharge()  
    }
  }, [props.steps])

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className='payment-loading'>
            <div className='loader'>
                <BounceLoader color="#00B6F0" loading={true}  size={80} />
            </div>
            <div className="generating-txt">Generating token...</div>
            <div className="wait-txt">Please wait for few seconds</div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default PaymentProcessingModal