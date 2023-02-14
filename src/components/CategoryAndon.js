import React from "react";

import { Container,Row,Col } from "react-bootstrap";
import category1 from "../assets/img/gallery/1.jfif";
import category2 from "../assets/img/gallery/2.jfif";
import category4 from "../assets/img/gallery/4.jfif";
import category5 from "../assets/img/gallery/5.jfif";
import category6 from "../assets/img/gallery/6.jpg";
import category7 from "../assets/img/gallery/7.jpeg";

const CategoryAndon = () => {
    return <div className="category min-vh-100 d-flex-align-items-center card" id="category">
        <Container >
            
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-3">
            <Col className="card-body">
            <img src= {category1} alt="unsplash.com" className="w-100 card-img-top"
            data-aos="fade-up" data-aos-delay="200"/>
            <h5 className="card-title bold"> Sablon Kaos</h5>
            <p
            className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </Col>
            <Col className="card-body">
            <img src= {category2} alt="unsplash.com" className="w-100 card-img-top" data-aos="fade-up" data-aos-delay="400"/>
            <h5 className="card-title bold">Sablon DTF</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium aspernatur voluptas necessitatibus possimus a illo?</p>
            <a href="#" className="btn btn-primary">Go SomeWhere</a>
            </Col>
            <Col className="card-body">
            <img src= {category4} alt="unsplash.com" className="w-100 card-img-top" data-aos="fade-up" data-aos-delay="600"/>
            <h5 className="card-title bold">Sablon Tas Jinjing</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sequi iure consectetur.</p>
            <a href="#" className="btn btn-primary">Go SomeWhere</a>
            </Col>
            <Col className="card-body">
            <img src= {category5} alt="unsplash.com" className="w-100 card-img-top" data-aos="fade-up" data-aos-delay="800"/>
            <h5 className="card-title bold">Sablon Kaos Bola</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, asperiores autem!</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </Col>
            <Col className="card-body">
            <img src= {category6} alt="unsplash.com" className="w-100 card-img-top" data-aos="fade-up" data-aos-delay="1000"/>
            <h5 className="card-title bold">Sablon Gelas</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sint!</p>
            <a href="#" className="btn btn-primary">go somewhere</a>
            </Col>
            <Col className="card-body">
            <img src= {category7} alt="unsplash.com" className="w-100 card-img-top" data-aos="fade-up" data-aos-delay="1200"/>
            <h5 className="card-title">Sablon Payung</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum.</p>
            <a href="#"className="btn btn-primary">go somewhere</a>
            </Col>
        </Row>
        </Container>
        </div>
}
export default CategoryAndon;