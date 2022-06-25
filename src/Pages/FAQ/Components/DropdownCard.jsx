import { Accordion } from "react-bootstrap";

const DropdownCard = () => {
  return (
    <div className="faq-dropdown-card">
        <div className="card faq-card">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>My meter reject the token?</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>I can't load my token</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>When I loaded the token, I got a response used but still don't have power supply.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Why do I have a debt on my meter?</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can I load the token I purchased on another prepaid meter?</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>I was debited for a failed transaction</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>The number of units I got was lesser.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>I bought for a wrong meter number.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>My meter is dispensing fast.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>I want to edit the name on my meter number.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">This could happen as a result of the following reasons:</div>
                        <ul className="acc-ls">
                            <li>The purchase was for the wrong meter number. Kindly confirm you are loading the token on the right meter.</li>
                            <li>The meter has not yet been activated- An activation code will be required from the distribution company.</li>
                            <li>There has been a change in your tariff index.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default DropdownCard