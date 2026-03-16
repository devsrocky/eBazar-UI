
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Person, Cart, Truck, Headset, Vimeo, Instagram, Twitter, Facebook} from "react-bootstrap-icons";
import payments from '../assets/images/payment.png'
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          {/* Left */}
          <Col lg={4}>
            <div className="left-logo">
                <div className="logo d-flex"><sub>e</sub><h1 style={{color: 'var(--bg-light)'}}>BAZAR</h1></div>
            </div>
            <p className="footer-copy">© WPCode Studio</p>

            <div className="payment-icons">
              <img src={payments} alt="visa" />
            </div>

            <div className="social-icons">
              <Vimeo />
              <Instagram />
              <Twitter />
              <Facebook />
            </div>
          </Col>

          {/* Locate us */}
          <Col lg={4}>
            <h5 className="footer-title">locate us</h5>
            <ul className="footer-list">
              <li>Banshmuri Ghoraghat Dinajpur</li>
              <li>phone: +88 01701-381850</li>
              <li>phone: +88 01701-381850</li>
              <li>e-mail: devsrocky1@gmail.com</li>
            </ul>
          </Col>

          {/* Profile */}
          <Col lg={2}>
            <h5 className="footer-title">profile</h5>
            <ul className="footer-list icon-list hover">
              <li><Person size={20}/> <a href="#">my account</a></li>
              <li><Cart size={20}/> <a href="#">checkout</a></li>
              <li><Truck size={20} /> <a href="#">order tracking</a></li>
              <li><Headset size={20} /> <a href="#">help & support</a></li>
            </ul>
          </Col>

          {/* Subscribe */}
          <Col lg={2}>
            <Form className="subscribe-form">
              <input type="email" placeholder="e-mail" className="subscribe-input" required/>
              <Button className="subscribe-btn">subscribe</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="pb-4">
        <Row>
          <Col xs={12}>
            <hr className="my-3"/>
            <h6 className="text-center copyright" title="contact with developer">©2025 | Developed by <Link to='https://fiverr.com/rabiulr'>DevsRocky</Link></h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
