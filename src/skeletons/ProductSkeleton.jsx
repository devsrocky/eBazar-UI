import { Col, Container, Row } from "react-bootstrap";

const ProductSkeleton = () => {
  return (
    <Container className="py-4">
      <style>{`
        .product-skel {
          border-radius: 8px;
          overflow: hidden;
          background: linear-gradient( 90deg, #f5f5f5 25%, #eaeaea 37%, #f5f5f5 63%);
          background-size: 400% 100%;
          animation: shimmer 1.4s ease infinite;
        }

        .skel-img {
          width: 100%;
          height: 180px;
        }

        .skel-title {
          width: 80%;
          height: 18px;
          border-radius: 4px;
          margin-bottom: 8px;
        }

        .skel-price {
          width: 50%;
          height: 14px;
          border-radius: 4px;
          margin-bottom: 12px;
        }

        .skel-btn {
          width: 45%;
          height: 34px;
          border-radius: 6px;
        }

        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>

      <Row>
        {Array.from({ length: 8 }).map((_, index) => (
          <Col lg={3} md={4} xs={6} className="pb-5" key={index}>
            <div className="product-skel">
              <div className="skel-img product-skel"></div>

              <div className="p-2">
                <div className="skel-title product-skel"></div>
                <div className="skel-price product-skel"></div>

                <div className="d-flex justify-content-between">
                  <div className="skel-btn product-skel"></div>
                  <div className="skel-btn product-skel"></div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductSkeleton;
