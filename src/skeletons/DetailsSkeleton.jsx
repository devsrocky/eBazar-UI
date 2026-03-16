import { Container, Row, Col } from "react-bootstrap";

const DetailsSkeleton = () => {
  return (
    <div>
      <style>{`

        .product-skeleton {
          background: transparent;
          background-size: 400% 100%;
          animation: shimmer 1.4s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        .skel-box{
        background: linear-gradient(90deg, #fff8fb 25%, #f2ecee 37%, #ddeae785 63%);
        background-size: 400% 100%;
        animation: shimmer 1.4s linear infinite;
        border-radius:6px;
        }
        .skel-subbaner{
          border-radius:0px;
          width:100%;
          height:150px;
        }
        .skel-image{
          width:100%;
          height:420px;
        }
        .skel-bread-cumb{
          width:20%;
          height:30px;
        }
        .skel-bread-tag{
          width:15%;
          height: 20px;
        }
        .skel-title{
          width:70%;
          height:40px;
        }

        .skel-rating{
          width:160px;
          height:20px;
        }

        .skel-text{
          width:100%;
          height:16px;
        }

        .skel-stock{
          width:120px;
          height:18px;
        }

        .skel-circle{
          width:22px;
          height:22px;
          border-radius:50%;
        }

        .skel-size{
          width:32px;
          height:22px;
          border-radius:4px;
        }

        .skel-qty{
          width:40px;
          height:32px;
        }

        .skel-btn{
          width:150px;
          height:40px;
        }

        .skel-meta{
          width:200px;
          height:16px;
        }

      `}</style>

      <Container className="mt-5">
        <Row>
            <Col xs={12}>
                <div className="skel-box skel-subbaner d-flex flex-column align-items-center justify-content-center">
                    <div className="skel-box skel-bread-cumb mb-3"></div>
                    <div className="skel-box skel-bread-tag mb-3"></div>
                </div>
            </Col>
        </Row>
      </Container>
      <Container className="py-5 product-skeleton">
        <Row>

          {/* Image */}
          <Col lg={5} xs={12}>
            <div className="skel-box skel-image"></div>
          </Col>

          {/* Content */}
          <Col lg={7} xs={12}>
            <div className="pt-2">

              {/* Title */}
              <div className="skel-box skel-title mb-3"></div>

              {/* Rating */}
              <div className="skel-box skel-rating mb-3"></div>

              {/* Description */}
              <div className="skel-box skel-text mb-2"></div>
              <div className="skel-box skel-text mb-2"></div>
              <div className="skel-box skel-text mb-3"></div>

              {/* Stock */}
              <div className="skel-box skel-stock mb-4"></div>

              {/* Color */}
              <div className="d-flex gap-3 mb-3">
                <div className="skel-box skel-circle"></div>
                <div className="skel-box skel-circle"></div>
                <div className="skel-box skel-circle"></div>
                <div className="skel-box skel-circle"></div>
              </div>

              {/* Size */}
              <div className="d-flex gap-2 mb-4">
                <div className="skel-box skel-size"></div>
                <div className="skel-box skel-size"></div>
                <div className="skel-box skel-size"></div>
                <div className="skel-box skel-size"></div>
              </div>

              {/* Quantity + Button */}
              <div className="d-flex gap-2 mb-4">
                <div className="skel-box skel-qty"></div>
                <div className="skel-box skel-qty"></div>
                <div className="skel-box skel-qty"></div>
                <div className="skel-box skel-btn"></div>
              </div>

              {/* Meta */}
              <div className="skel-box skel-meta mb-2"></div>
              <div className="skel-box skel-meta mb-2"></div>
              <div className="skel-box skel-meta"></div>

            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default DetailsSkeleton;