import { Container, Row, Nav } from "react-bootstrap";

const TabSkeleton = ({ count = 5 }) => {
  return (
    <div className="tabs-wrapper">
      <Container>
        <style>{`
          .tab-skel {
            height: 200px;
            width: 200px;
            border-radius: 50%;
            background: linear-gradient( 90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63% );
            background-size: 400% 100%;
            animation: shimmer 1.4s ease infinite;

          }

          @keyframes shimmer {
            0% { background-position: 100% 0; }
            100% { background-position: -100% 0; }
          }
        `}</style>

        <Row>
          <Nav className="custom-tabs">
            {Array.from({ length: count }).map((_, index) => (
              <Nav.Item key={index}  className={index === count - 1 ? "d-none d-md-block" : ""} >
                <div className="tab-skel"></div>
              </Nav.Item>
            ))}
          </Nav>
        </Row>
      </Container>
    </div>
  );
};

export default TabSkeleton;
