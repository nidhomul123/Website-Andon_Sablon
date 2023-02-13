import React from 'react'
import { Container,Row,Col,Accordion } from 'react-bootstrap';
const FaqAndon = () => {
  return (
    <div className='faq' id='faq'>
        <Container>
        <Row className='mb-5'>
            <Col>
            <h1 className='text-center fw-bold' data-aos="fade-up"> Yang Bisa Ditanyakan ?</h1>
            <p className='text-center'data-aos="fade-up" data-aos-delay="200"> Lorem ipsum dolor sit amet consectetur adipisicing.</p>            
            </Col>
        </Row>
        <Row className='row-cols-lg-2 row-cols-md-2 row-cols-1 g-3'>
            <Col data-aos="fade-up" data-aos-delay="200">
             <Accordion>
             <Accordion.Item eventKey="0">
              <Accordion.Header>Perbedaan Sablon DTF dengan Plastisol</Accordion.Header>
             <Accordion.Body>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                 minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                 aliquip ex ea commodo consequat. Duis aute irure dolor in
                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                 culpa qui officia deserunt mollit anim id est laborum.
             </Accordion.Body>
             </Accordion.Item>
             </Accordion>
             </Col>
             <Col  data-aos="fade-up" data-aos-delay="400">
             <Accordion>
             <Accordion.Item eventKey="1">
             <Accordion.Header>Diandon Sablon, Bisa nyablon apa saja?</Accordion.Header>
             <Accordion.Body>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                   aliquip ex ea commodo consequat. Duis aute irure dolor in
                   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </Col>
              <Col  data-aos="fade-up" data-aos-delay="600">
              <Accordion>
              <Accordion.Item eventKey="2">
              <Accordion.Header>Berapa Lama Kalau Saya Ingin Menyablon Di Andon?</Accordion.Header>
              <Accordion.Body>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                 culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
              </Accordion.Item>
              </Accordion>
              </Col>
              <Col  data-aos="fade-up" data-aos-delay="800">
              <Accordion>
              <Accordion.Item eventKey="3">
              <Accordion.Header>Apakah Bisa Nyamblon Wajah Sendiri/ Costum?</Accordion.Header>
              <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
    <Col  data-aos="fade-up" data-aos-delay="1000">
    <Accordion>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Bahan Kaosnya Berkualitas Tidak?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </Col>
      <Col  data-aos="fade-up" data-aos-delay="1200">
      <Accordion>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Bagaimana Cara Ordernya?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Col>
        </Row>
        </Container>
     
    </div>
  )
}

export default FaqAndon
