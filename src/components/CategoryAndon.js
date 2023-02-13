import React from "react";

import { Container,Row,Col } from "react-bootstrap";
import category1 from "../assets/img/gallery/1.jfif";
import category2 from "../assets/img/gallery/2.jfif";
import category4 from "../assets/img/gallery/4.jfif";
import category5 from "../assets/img/gallery/5.jfif";
import category6 from "../assets/img/gallery/6.jpg";
import category7 from "../assets/img/gallery/7.jpeg";

const CategoryAndon = () => {
    return <div className="category min-vh-100 d-flex-align-items-center" id="category">
        <Container >
            
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
            <Col>
            <img src= {category1} alt="unsplash.com" className="w-100"
            data-aos="fade-up" data-aos-delay="200"/>
            </Col>
            <Col>
            <img src= {category2} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="400"/>
            </Col>
            <Col>
            <img src= {category4} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="600"/>
            </Col>
            <Col>
            <img src= {category5} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="800"/>
            </Col>
            <Col>
            <img src= {category6} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="1000"/>
            </Col>
            <Col>
            <img src= {category7} alt="unsplash.com" className="w-100" data-aos="fade-up" data-aos-delay="1200"/>
            </Col>
        </Row>
        </Container>
        </div>
}
export default CategoryAndon;