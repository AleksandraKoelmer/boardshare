import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'

import EventList from '../events/EventList'


const UserEvents = (props) => {
    const { auth, events } = props;
    const userEvents = []
    const style = {
       
        textAlign: 'center',
      
    }

    if (!auth.uid) return <Redirect to='/signin' />


    if (events) {
        events.map(function (userEvent) {
            if (userEvent.authorId === auth.uid) {
                userEvents.push(userEvent)
                
            }
            return null
        })

        if (userEvents.length === 0) {
            console.log(userEvents.length)
            return (
                <div style={style}>
                     <h5 className="header">Nic tu narazie nie ma! </h5>
                  
                      <Link to={'/create'}><h6>Utwórz swoje wydarzenie</h6></Link>
                </div>
            )
        }

        else {
            return (
                <div className='dashboard container'>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <EventList events={userEvents.slice(0, 4)} />
                        </div>
                        <div className='col 12s m5'>
                            <EventList events={userEvents.slice(5, 9)} />
                        </div>
                    </div>
                </div>
            )
        }
    }
    return null

}


const mapStateToProps = (state) => {

    return {
        events: state.firestore.ordered.events,
        auth: state.firebase.auth

    }
}

export default compose(
    firestoreConnect([{ collection: 'events', limit: 10, orderBy: ['createdAt', 'desc'] }]),
    connect(mapStateToProps)
)(UserEvents)