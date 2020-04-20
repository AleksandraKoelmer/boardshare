import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pl'
import EditableText from '../layout/EditableText'
import { updateEvent } from '../../store/actions/eventActions'

class UpdateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
           
           
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.update = this.update.bind(this);
    
      }

   
      handleFieldChange(key, value) {
        this.setState({ [key]: value });
      }

    

    update() {
        const updatedData = this.state
        delete updatedData.editMode
        const eventId = this.props.id
        this.props.updateEvent(updatedData, eventId)
        
    }

    render() {
        const { event, auth } = this.props;
        const id = this.props.id;



        if (event) {

            

            if (!auth.uid) return <Redirect to='/signin' />
            moment.locale('pl') // change language for displayed date
// type name
            return (
                <div className='container'>
                    <h5>Zmień szczegóły dotyczące Twojego wydarzenia</h5>
                    <div className='card'>
                        <div className='card-content'>
                            <span className='card-title'> <EditableText name={'eventTitle'} value={event.eventTitle} onChange={this.handleFieldChange}></EditableText> </span>
                            <p>Miasto: <EditableText name={'city'} value={event.city} onChange={this.handleFieldChange}></EditableText></p>
                            <p>Data: <EditableText name={'date'} value={event.date} onChange={this.handleFieldChange}></EditableText></p>
                            <p>Liczba osób: <EditableText name={'numOfGamers'} value={event.numOfGamers} onChange={this.handleFieldChange}></EditableText> </p>
                            <p>Typ gry: <EditableText name={'gameType'} value={event.gameType} onChange={this.handleFieldChange}></EditableText></p>
                            <p>Czas gry: <EditableText name={'duration'} value={event.duration} onChange={this.handleFieldChange}></EditableText></p>
                            <p>Minimalny wiek: <EditableText name={'minAge'} value={event.minAge} onChange={this.handleFieldChange}></EditableText></p>
                            <p>Opis wydarzenia: <EditableText name={'description'} value={event.description} onChange={this.handleFieldChange}></EditableText></p>
                            <div className="card-action">
                                <button  className='btn green' onClick={this.update}>Zatwierdź zmiany</button>

                                {auth.uid !== event.authorId ?
                                    <Link to={'/chat/' + id} >
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
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;


    return {
        event: event,
        auth: state.firebase.auth,
        id:id
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
     
        updateEvent: (updatedData, eventId) => dispatch(updateEvent(updatedData, eventId))
    }
}

export default compose(
    firestoreConnect([{ collection: 'events' }]),
    connect(mapStateToProps, mapDispatchToProps)
)(UpdateEvent)