import { Col, Container, Row } from "react-bootstrap";
import SubmitBtn from "../../helper/SubmitBtn";
import ConfirmCheckout from "./ConfirmCheckout";


const CheckoutComponent = () => {
    return (
        <section className="py-5 checkout">
            <Container className="py-3 checkout-title bg-clr">
                <Row>
                    <Col xs={12}>
                        <h5 className="text-center">Checkout</h5>
                    </Col>
                </Row>
            </Container>
            <Container className="pt-5">
                <Row>
                    <Col lg={8} md={8} xs={12}>
                        <div className="shipping-details-1 px-5">
                            <div className='d-flex gap-3'>
                                <div className='cust-field'>
                                    <label htmlFor="Name">Name</label>              
                                    <input  type="text" placeholder="Rocky prodhan"  className={`focus shipping-field`} id="Name" />
                                </div>
                                <div className='cust-field'>
                                    <label htmlFor="Number">Phone</label>
                                    <input  type="text" placeholder='+88 01701381850' className={`focus shipping-field`} id="Number" />
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='cust-field'>
                                    <label htmlFor="Country">Country</label>              
                                    <input  type="text" placeholder="Bangladesh"  className={`focus shipping-field`} id="Country" />
                                </div>
                                <div className='cust-field'>
                                    <label htmlFor="State">State</label>
                                    <input  type="text" placeholder='Rangpur' className={`focus shipping-field`} id="State" />
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className='cust-field'>
                                    <label htmlFor="City">City</label>              
                                    <input  type="text" placeholder="Bangladesh"  className={`focus shipping-field`} id="City" />
                                </div>
                                <div className='cust-field'>
                                    <label htmlFor="Postal">Zip Postal code</label>
                                    <input  type="text" placeholder='5282' className={`focus shipping-field`} id="Postal" />
                                </div>
                            </div>
                            <div className='cust-field'>
                                <label htmlFor="Home">Home/village Address</label>
                                <input  type="text" placeholder='Banshmuri chatshal-5282 Ghoraghat Dinajpur' className={`focus shipping-field`} id="Home" />
                            </div>
                            <SubmitBtn Text='Save for Next' />
                        </div>
                    </Col>
                    <Col lg={4} md={4} xs={12} className="check-out">
                        <ConfirmCheckout/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CheckoutComponent;