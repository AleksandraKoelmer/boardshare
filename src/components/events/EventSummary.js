import React from 'react';
import { Link } from 'react-router-dom'

const EventSummary = ({ event }) => {
    return (

        <div className='project-summary'>
            <div className="col s12 m10">
                <h5 className="header">{event.eventTitle}</h5>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="http://m.wm.pl/2019/01/z9/kot-3-524198.jpg"></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{event.city}</p>
                            <p>{event.date}</p>
                        </div>
                        <div className="card-action">
                            <Link to={'/event/' + event.id}>
                                Szczegóły wydarzenia
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSummary
