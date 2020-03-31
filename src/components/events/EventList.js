import React from 'react'


import './EventList.css';

import EventSummary from './EventSummary'

const EventList = ({ events }) => {
    return (
        <div className='project-list section'>
            {events && events.map(event => {

                return (
                    <EventSummary event={event} key={event.id} />
                )
            })}

        </div>
    )
}

export default EventList;
