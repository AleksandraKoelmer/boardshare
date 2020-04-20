import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import UserEventsControlPanel from '../user/UserEventsControlPanel'


const EventSummary = (props) => {

    const { event } = props
    let location = useLocation();
  
 
    return (
<div>
        <div className='project-summary'>
            <div className="col s12 m10">
                <h5 className="header">{event.eventTitle}</h5>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://www.tornado-studios.com/sites/default/files/styles/slider_full/public/products/1172/reel-360-1/chess-pieces-pawn-white-0000.jpg?itok=aJqHwY8Q" alt={'pawn'}></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{event.city}</p>
                            <p>{event.date}</p>
                        </div>
                        <div className="card-action">
                            <div>
                            <Link to={'/event/' + event.id}>
                                Szczegóły wydarzenia
                            </Link>
                            </div>
                            <div>
                            
                            </div>

                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        { location.pathname.includes("userevents") ?  <UserEventsControlPanel eventId={event.id}/> : null }
         
          </div>
    )
}

export default EventSummary
