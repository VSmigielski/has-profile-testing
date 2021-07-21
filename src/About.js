import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const About = () => {
    return (
        <div>
            <section class="page-section" id="about">
            <Container>
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">About</h2>
                    <h3 class="section-subheading text-muted mb-3">Ha Nguyen</h3>
                </div>
                <Row class="text-center">
                    <Col>
                        <img className="picture-of-me" src="https://media-exp1.licdn.com/dms/image/C4E03AQHmrpvckS15iw/profile-displayphoto-shrink_400_400/0/1587604769212?e=1632355200&v=beta&t=zpNXVwEktOTGAQIJjPHJV8z869ITYAVv0HChbpM2xtE" alt=""/>
                    </Col>
                </Row>
                <Row>
                    <Col md={1} lg={2}>
                    </Col>
                    <Col sm={12} md={10} lg={8}> 
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </Col>
                    <Col md={1} lg={2}>
                    </Col>
                </Row>
                    
            </Container>
        </section>
        </div>
    )
}

export default About
