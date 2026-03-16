import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import BlogSection from "../components/home/BlogSection";
import Layout from "../masterlayout/Layout";
import Subtitle from "../components/about/Subtitle";
import FeaturesSection from "../components/home/FeaturesSection";

const About = () => {
  return (
    <Layout>
      <Subtitle />
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <h2 className=" mb-3 title-text">About eBazar</h2>
              <p className="content-text">
                eBazar is a modern and innovative online marketplace dedicated to delivering high-quality products while ensuring a smooth and enjoyable shopping experience for every customer. Our platform is designed to make online shopping simple, convenient, and reliable, allowing customers to browse a wide range of products from the comfort of their homes. From everyday essentials to trending items, eBazar carefully selects products that meet high standards of quality, value, and customer satisfaction.

                Our mission is to connect customers with the best products at competitive prices while maintaining fast delivery and dependable service. We believe that online shopping should be effortless, secure, and trustworthy. That is why we continuously work to improve our platform, optimize our services, and ensure that every order is handled with care and efficiency.

                At eBazar, customer satisfaction is at the heart of everything we do. We strive to provide a user-friendly shopping environment, secure payment options, responsive customer support, and timely delivery. Our team is committed to building long-term relationships with our customers by maintaining transparency, reliability, and consistent service quality.

                As eBazar continues to grow, we remain focused on expanding our product selection, enhancing our technology, and delivering an even better shopping experience for our community. Whether you are looking for great deals, trusted products, or convenient shopping, eBazar aims to be your reliable online marketplace every day.

              </p>
            </Col>

            <Col lg={6} md={12}>
              <img src="https://images.unsplash.com/photo-1556742031-c6961e8560b0" alt="about" className="img-fluid rounded" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <img  src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a" alt="story" className="img-fluid rounded"/>
            </Col>

            <Col lg={6} md={12}>
              <h3 className="title-text mb-3">Our Story</h3>
              <p className="content-text">
                  Founded with a vision to simplify and enhance the online shopping experience, eBazar was created to bridge the gap between customers and high-quality products available in the digital marketplace. Our journey began with the goal of building a platform where people can easily discover, compare, and purchase a wide range of products without the hassle often associated with traditional shopping. By focusing on convenience, trust, and efficiency, eBazar aims to make online shopping accessible and enjoyable for everyone.

                  From electronics and gadgets to fashion, lifestyle items, and everyday essentials, eBazar brings together a diverse collection of carefully selected products to meet the evolving needs of modern consumers. We work continuously to ensure that every product offered on our platform meets standards of quality and value, helping customers shop with confidence.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <BlogSection/>
      <FeaturesSection />
    </Layout>
  );
};

export default About;