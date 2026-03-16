import { Carousel, Container } from "react-bootstrap";
import Spacer from "../helper/Spacer";


const HeroSkeleton = () => {
  return (
    <div>
      <style>{`
        .skeleton-slide {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 50px;
          overflow: hidden;
          background: linear-gradient(90deg, #fff8fb 25%, #f2ecee 37%, #ddeae785 63%);
          background-size: 400% 100%;
          animation: shimmer 1.5s linear infinite;
        }

        .skeleton-title {
          width: 50%;
          height: 48px;
          border-radius: 6px;
          background-color: #d8e1e0;
          margin-bottom: 12px;
        }

        .skeleton-subtitle {
          width: 30%;
          height: 20px;
          border-radius: 4px;
          background-color: #d8e1e0;
          margin-bottom: 24px;
        }

        .skeleton-button {
          width: 120px;
          height: 40px;
          border-radius: 6px;
          background-color: #d8e1e0;
        }

        @keyframes shimmer {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>

      <div>
            <div className="skeleton-slide responsive-skel">
                <Container style={{ color: "transparent" }}>
                <div className="skeleton-title"></div>
                <Spacer size={12} />
                <div className="skeleton-subtitle"></div>
                <Spacer size={24} />
                <div className="skeleton-button"></div>
                </Container>
            </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
