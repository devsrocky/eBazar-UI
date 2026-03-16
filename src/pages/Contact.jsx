import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Subtitle from "../components/about/Subtitle";
import Layout from "../masterlayout/Layout";
import { Clock, Mailbox, Map, Phone } from "react-bootstrap-icons";
const  bg = 'https://demos.codezeel.com/wordpress/WCM08/WCM080196/default/wp-content/plugins/templatemela-plugin-jubilee/layouts/default/img/breadcumb-bkg.jpg';


export default function Contact() {
  return (
    <Layout>
      <Subtitle/>
      {/* CONTACT SECTION */}
      <section className="contact-section">
        <Container>
          <Row>

            {/* MAP */}
            <Col lg={8}>
              <div className="map-wrapper">
                <iframe title="map"  src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="1000" />
              </div>
            </Col>

            {/* FORM */}
            <Col lg={4} style={{background: 'rgba(246, 103, 145, 0.11)'}}>
              <div className="contact-form-box">
                <h3 className="title-text">Get In Touch With Us</h3>
                <p className="content-text">
                  If you wish to directly reach us, Please fill out the form
                  below -
                </p>

                <Form>

                  <Form.Group className="mb-3">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your message (optional)</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                  </Form.Group>

                  <Button className="submit-btn">SUBMIT</Button>

                </Form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      {/* CONTACT INFO STRIP */}
      <section className="contact-info-strip my-5">
        <Container>
          <Row>

            <Col md={3}>
              <div className="info-item">
                <div className="icon-circle"><Map/></div>
                <div>
                  <p><strong>Locate :</strong><br/>Banshmuri 5282 Dinajpur</p>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="info-item">
                <div className="icon-circle"><Phone/></div>
                <div>
                  <p><strong>Call us :</strong><br/>(+88) 01701-381850</p>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="info-item">
                <div className="icon-circle"><Mailbox/></div>
                <div>
                  <p><strong>Mail us :</strong><br/>devsrocky1@gmail.com</p>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="info-item">
                <div className="icon-circle"><Clock/></div>
                <div>
                  <p><strong>Open time :</strong><br/>24/7<sup>H</sup></p>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      {/* NEWSLETTER */}
      <section className="newsletter-section" style={{background: `url(${bg})`}}>

        <Container>
          <Row className="align-items-center">

            <Col md={6}>
              <h2 className="title-text" style={{textTransform: 'capitalize'}}>Subscribe To Our Newsletter</h2>
              <p className="content-text">
                Subscribe to our latest newsletter to get news about special discounts.
              </p>

              <div className="newsletter-form">
                <input type="email" placeholder="Email" />
                <button>SUBSCRIBE</button>
              </div>
            </Col>

          </Row>
        </Container>

      </section>
    </Layout>
  );
}