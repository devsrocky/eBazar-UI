import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bag, Cart, CreditCard, Heart, Person } from "react-bootstrap-icons";
import { useLocation, useParams } from "react-router-dom";


const CustomerLayout = ({component}) => {

    const location = useLocation();
    const path = location.pathname.split('/')[1];


    return (
        <Container className="py-5">
                <Row>
                    <Col xs={12}>
                        <div className="d-flex">
                            <div className="prof-sideMenu">
                                <ul className="list-unstyled">
                                    <li><a href="/profile" className={path === 'profile' ? 'active-pro-menu' : ''}> <Person size={22} /> <span >User profile</span> </a></li>
                                    <li><a href="/orders" className={path === 'orders' ? 'active-pro-menu' : ''}> <Bag size={22} /> <span>Orders</span> </a></li>
                                    <li><a href="/payments" className={path === 'payments' ? 'active-pro-menu' : ''}> <CreditCard size={22} /> <span>Payments</span> </a></li>
                                    <li><a href="/wishes" className={path === 'wishes' ? 'active-pro-menu' : ''}> <Heart size={22} /> <span>Wishlist</span> </a></li>
                                    <li><a href="/carts" className={path === 'carts' ? 'active-pro-menu' : ''}> <Cart size={22} /> <span>Cart</span> </a></li>
                                </ul>
                            </div>
                            <div className="prof-content" style={{marginLeft: '20px'}}>
                                {component}
                            </div>
                        </div>
                    </Col>
                </Row>
        </Container>
    );
};

export default CustomerLayout;