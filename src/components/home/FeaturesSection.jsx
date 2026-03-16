import { Container, Row, Col } from "react-bootstrap";
import { CashCoin, Headset, ArrowRepeat, Tag} from "react-bootstrap-icons";
import Spacer from "../../helper/Spacer";


const features = [
  {
    icon: <CashCoin size={35} />,
    title: "Flexible Payment",
    text: "Choose the payment plan that works best for you.",
  },
  {
    icon: <Headset size={35} />,
    title: "Best Online Support",
    text: "Always available to assist with any questions or issues.",
  },
  {
    icon: <ArrowRepeat size={35} />,
    title: "14 Day Returns",
    text: "Return any item within 14 days for a full refund.",
  },
  {
    icon: <Tag size={35} />,
    title: "Premium Support",
    text: "Receive priority assistance from our dedicated team.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <Container>
        <Row>
          {features.map((item, index) => (
            <Col key={index} md={3} xs={6} className="feature-item pb-2">
              <div className="icon">{item.icon}</div>
              <Col>
                <h6>{item.title}</h6>
                <Spacer size={10} />
                <p>{item.text}</p>
              </Col>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
