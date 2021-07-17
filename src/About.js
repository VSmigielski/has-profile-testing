import React, {useState} from 'react'
import dataTimeline from './datatimeline'
import TimelineItems from './TimelineItems';

const About = () => {
    const [data] = useState(dataTimeline);
    return (
        <div>
            <section className="page-section" id="about">
            <div className="container mb-5">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                {
                data.map((project)=> {
                    return <TimelineItems key={project.id} {...project}/>;
                })
            }
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </div>
    )
}

export default About
