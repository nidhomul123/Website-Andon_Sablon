import React from 'react'
// eslint-disable-next-line
import {Container, Row, Col} from "react-bootstrap";

const HeroAndon = () => {
  return (
    <div className= "hero min-vh-100 w-10" id='home'>
     <Container>
        <Row>
            <Col>
            <h1 className='text-bold text-center animate_animated animate__fadeInUp' >
               Andon Sablon
            </h1>
          <p className='text-white-45'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, debitis? Temporibus excepturi unde illum perspiciatis in et optio exercitationem reiciendis, cupiditate quod, aut molestiae repellat pariatur natus vero consequatur ratione?
          </p>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default HeroAndon
