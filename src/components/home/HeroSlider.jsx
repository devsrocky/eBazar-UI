import { Carousel, Container } from "react-bootstrap";
import Spacer from "../../helper/Spacer";
import ProductStore from "../../store/ProductStore";
import HeroSkeleton from "../../skeletons/HeroSkeleton";

const HeroSlider = () => {

  const { SliderList } = ProductStore()

  if(SliderList === null) {
    return <HeroSkeleton />
  }else{
    return (
    <Carousel fade controls={false} indicators interval={4000}  pause={false}  className="hero-slider" style={{margin: '0px 0px'}} >

      {
        SliderList.map((item, index) => {
          return (
                <Carousel.Item key={index.toString()}>
                  <div className="hero-slide"
                    style={{ backgroundImage:  `url(${item['image']})`  }} >
                    <Container className="hero-content">
                      <h1 className="hero-title">{item['title']}</h1>
                      <span className="hero-subtitle">{item['des']}</span>
                      <Spacer size={12} />
                      <div>
                          <button className="hero-button">Shop now</button>
                      </div>
                    </Container>
                  </div>
              </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
  }
};

export default HeroSlider;