import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom'
import  moment from 'moment'
import 'moment/locale/pl'

const EventDetails = (props) => {
    const { event, auth,  } = props;
    const eventId = window.location.href;
    const id = eventId.split('event/')[1]
    
    if (event) {
        console.log()
        if (!auth.uid) return <Redirect to='/signin' />
        moment.locale('pl') // change language for displayed date
        
        return (
            <div className='container'>
                <div className='card'>
                    <div className='card-content'>
                        <span className='card-title'> {event.eventTitle} </span>
                        <p>Miasto: {event.city}</p>
                        <p>Data: {event.date}</p>
                        <p>Liczba osób: {event.numOfGamers} </p>
                        <p>Typ gry: {event.gameType}</p>
                        <p>Czas gry: {event.duration}</p>
                        <p>Minimalny wiek: {event.minAge}</p>
                        <p>Opis wydarzenia: {event.description}</p>
                        <div className="card-action">
                            <Link to={'/'}>
                                Powrót
                            </Link>

                          {auth.uid!==event.authorId ? 
                            <Link to={'/chat/'+ id} >
                                Kontakt z organizatorem
                            </Link> : null}
                        </div>
                        
                        <div className='card-action  grey-text'>
                            <div> Właściciel wydarzenia: {event.author}</div>
                            <div>Data utworzenia wydarzenia: {moment(event.createdAt.toDate()).format('LLLL')} </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
    else {
        return (
            <div className='container center'>Ładowanie danych...</div>
        )

    }
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    console.log(id)
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;


    return {
        event: event,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect([{ collection: 'events' }]),
    connect(mapStateToProps)
)(EventDetails)


