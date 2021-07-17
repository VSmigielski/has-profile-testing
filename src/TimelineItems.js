import React from 'react'

const TimelineItems = ({classRow, image, title, time, description}) => {
    return (
            <li className={classRow}>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src={image} alt={title} /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <h4>{time}</h4>
                        <h4 className="subheading">{title}</h4>
                    </div>
                    <div className="timeline-body">
                        <p className="text-muted">{description}</p>
                    </div>
                    </div>
            </li>
    )
}

export default TimelineItems
