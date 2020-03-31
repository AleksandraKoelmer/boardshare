import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


import EventList from '../events/EventList'

class Dashboard extends Component {
    render() {
        const { events, auth } = this.props;
        console.log(events)

        if (events) {

            return (

                <div className='dashboard container'>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <EventList events={events.slice(0, 4)} />
                        </div>
                        <div className='col 12s m6'>
                            <EventList events={events.slice(5, 9)} />
                        </div>
                    </div>
                </div>
            )
        }

        else return (null)
    }
}

const mapStateToProps = (state) => {

    return {
        events: state.firestore.ordered.events,

    }
}

export default compose(
    firestoreConnect([{ collection: 'events', limit: 10, orderBy: ['createdAt', 'desc'] }]),
    connect(mapStateToProps)
)(Dashboard)