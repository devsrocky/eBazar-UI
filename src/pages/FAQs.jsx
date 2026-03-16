import { Container, Accordion, Col, Row } from "react-bootstrap";
import Layout from "../masterlayout/Layout";
import Subtitle from "../components/about/Subtitle";
const image =  'https://demos.codezeel.com/wordpress/WCM08/WCM080196/default/wp-content/uploads/2023/12/faq-banner.jpg';
const  bg = 'https://demos.codezeel.com/wordpress/WCM08/WCM080196/default/wp-content/plugins/templatemela-plugin-jubilee/layouts/default/img/breadcumb-bkg.jpg';

import img from '../assets/images/faq-banner.jpg'


const faqs = [
  {
    question: "How can I create an account?",
    answer:
      "Click the 'Sign Up' button at the top right, fill in your information, and verify your email to activate your account.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We accept credit/debit cards, PayPal, and other major online payment options for your convenience.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can change your subscription plan anytime from your account settings without losing data.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Reach out via our Contact page or email support@example.com. Our team responds within 24 hours.",
  },
];

const FAQs = () => {
  return (
    <Layout>
        <Subtitle />
        <Container className="py-5">
            <Row>
                <Col lg={6} md={6} xs={12}>
                    <strong style={{color: 'var(--down-color)', opacity: 0.4}}>FAQs</strong>
                    <h2 className="title-text py-3" style={{color: 'var(--bg-primary)'}}>Frequently Asked Question</h2>
                    <p className="content-text" style={{color: 'var(--down-color)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>
                    <img src={img} alt="faqs" style={{width: '100%'}} />
                </Col>
                <Col lg={6} md={6} xs={12} className="d-flex flex-column justify-content-center">
                    {
                        faqs.map((item, index) => {
                            return (
                                <div key={index.toString()} className="questions">
                                    <h3 className="" style={{textTransform: 'capitalize', color: 'var(--bg-primary)'}}>{item['question']}</h3>
                                    <p className="">{item['answer']}</p>
                                </div>
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
        <Container className="py-5">
            <Row>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <h6 className=" text-center" style={{color: 'var(--down-color)'}}>Pick one of 3 FAQ styles</h6>
                    <h2 className="title-text py-3 text-center" style={{color: 'var(--bg-primary)'}}>Display FAQ accordions</h2>
                    <Accordion defaultActiveKey="0" flush>
                        {faqs.map((faq, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{faq.question}</Accordion.Header>
                            <Accordion.Body>{faq.answer}</Accordion.Body>
                        </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
                <Col xs={2}></Col>
            </Row>
        </Container>
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
};

export default FAQs;