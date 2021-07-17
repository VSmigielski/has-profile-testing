import React, {useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import data from './data'

const PortfolioItems = ({project}) => {
    return (
            <Col sm={6} lg={4} className="mb-4">
                {/* <!-- Portfolio item--> */}
                <div className="portfolio-item">
                    <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                </div>
                <img className="img-fluid" src={project.image} alt={project.title} />
                </a>
                <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{project.title}</div>
                <div className="portfolio-caption-subheading text-muted">{project.description}</div>
                </div>
                </div>
            </Col>
    )
}

const PortfolioItem = () => {
    const [portfolioData] = useState(data);
    return (
        <div>
            <Row>
                {
                portfolioData.map((project, i)=> {
                    return <PortfolioItems  project={project} key={i}/>;
                })
                }
            </Row>
        </div>
    )
}

export default PortfolioItem
