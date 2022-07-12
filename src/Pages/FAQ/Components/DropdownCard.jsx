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
                        <div className="acc-txt">Try the following steps:</div>
                        <ul className="acc-ls">
                            <li>Make sure there is power supply in your environment and the phase your on also has power; make sure your changeover is switched to power suppy mode. Punch in the numbers generated from the token and click on ‘Enter’. The light should turn green or orange or blink red.</li>
                            <li>Insert new batteries at the back of the keypad to power on the device. If the device does not come on, press 3 to power up the device.</li>
                            <li>If you still have units on your meter, when there is power supply, plug the Keypad to a wall socket.</li>
                            <li>Key in 5258 instead of the first four-meter digits followed by the consecutive meter digits while omitting the last digit of the meter.ex. 01011607946 then becomes 5258160794. Then press Send (blue or red button as the case maybe).</li>
                            <li>Load the token over again after the above has been done.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>When I loaded the token, I got a response used but still don't have power supply.</Accordion.Header>
                    <Accordion.Body>
                        <ul className="acc-ls">
                            <li>A token can only be utilized by a specific meter number. Used simply means, the token has already been loaded on the meter.</li>
                            <li>Ensure there is power supply in your area; confirm the phase you are on has power supply. Put off generators and inverters and do a change over to confirm power supply.</li>
                            <li>This could also be as a result of technical Fault or loss of phase and Meter entering tamper mode.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Why do I have a debt on my meter?</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">Debt on a meter can occur for several reasons:</div>
                        <ul className="acc-ls">
                            <li>The cost for the units on a newly installed meter is paid by the customer (as debt) on their first recharge of the meter.</li>
                            <li>Migration of Previous Debt: If the property used an analog meter before the installation of a Prepaid meter, or using the estimated billing (Post Paid) and there was a debt before the installation of the prepaid meter, the debt on the estimated (Postpaid) billing account is migrated to the Prepaid meter account.</li>
                            <li>Penalties: If there was a bypass or illegal connection discovered in the house, the penalty charge is added as debt to the prepaid meter account.</li>
                            <li>Kindly visit the nearest electricity distribution company office to discuss your debt profile. As all meters are domiciled with them.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can I load the token I purchased on another prepaid meter?</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">As of this writing; No: token is generated and encrypted using the unique ID of the meter. This is to ensure that token generated can only be used by the specific meter. </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>I was debited for a failed transaction</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">Usually, you will receive a reversal from your bank within 24 hours.</div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>The number of units I got was lesser.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">It could be as a result of the following:</div>
                        <ul className="acc-ls">
                            <li>There is a possibility a debt has been migrated on your meter, the lesser units is used to partially offset the debt.</li>
                            <li>If the previous payment was inclusive of free units. Kindly check your token details.</li>
                            <li>It could also mean your tariff plan index has been changed.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>I bought for a wrong meter number.</Accordion.Header>
                    <Accordion.Body>
                        <ul className="acc-ls">
                            <li>A token is generated and encrypted using the unique ID of the prepaid meter number. This is to ensure that token generated can only be used by the specific meter number it was vended on.</li>
                            <li>You can only load the token digits for the meter number you purchased for. Be sure to confirm the name and meter number before going ahead to vend.</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>My meter is dispensing fast.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">Kindly contact a Meter Engineer as this could be as a result of this following:</div>
                        <ul className="acc-ls">
                            <li>All prepaid meter token is generated from one central server both for online payments and the vending office. There is no difference buying online. Please turn of all appliances when not in use as appliances left on standby can still draw about 20% or more of normal electricity in use and use energy saver light bulbs.</li>
                            <li>High consumption</li>
                            <li>Electricity theft</li>
                            <li>Leakage</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>I want to edit the name on my meter number.</Accordion.Header>
                    <Accordion.Body>
                        <div className="acc-txt">The name and address displayed is same one registered on the distribution company’s system. Kindly visit the nearest electricity distribution company office to edit this information on your meter. However, we can process a utility bill for you. Please send us an email to <a href="mailto:support@myrecharge.ng">support@myrecharge.ng</a></div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default DropdownCard