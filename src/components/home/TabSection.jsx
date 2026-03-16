import { useState } from "react";
import { Nav, Container, Row } from "react-bootstrap";
import ProductStore from "../../store/ProductStore";

const TabSection = () => {

const { productListByRemarkRequest } = ProductStore();

  const [active, setActive] = useState("new");
  const  handleClick = async (value) => {
    setActive(value);
    await productListByRemarkRequest(value)
  }

  return (
    <div className="tabs-wrapper mt-5">
      <Container>
        <Row>
        <Nav className="custom-tabs">
          <Nav.Item>
            <Nav.Link active={active === "new"}  onClick={() => handleClick('new')} >  New </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link active={active === 'trending'}  onClick={() => handleClick('trending')} > Trending </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link active={active === "popular"} onClick={() => handleClick('popular')} > Popular </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link active={active === "top"} onClick={() => handleClick('top')} > Top </Nav.Link>
          </Nav.Item>

          <Nav.Item className="d-none d-md-block">
            <Nav.Link active={active === "special"} onClick={() => handleClick('special')} > Special </Nav.Link>
          </Nav.Item>
        </Nav>
        </Row>
      </Container>
    </div>
  );
};

export default TabSection;
