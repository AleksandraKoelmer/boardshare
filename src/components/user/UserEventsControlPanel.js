import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteEvent } from '../../store/actions/userActions'
import { Link } from 'react-router-dom';

class UserEventsControlPanel extends Component {
    constructor(props) {
        super(props)
         this.deleteEvent = this.deleteEvent.bind(this)
    }


    deleteEvent() {
      
        this.props.deleteEvent(this.props.eventId)
    }

    render() {

        const style = {
            display: 'flex',
            justifyContent: 'space-between'
        }


        

        
        return (
          
            <div className="col s12 m10" style={style} >
                <a className="waves-effect waves-light btn" onClick={this.deleteEvent}><i className="material-icons left">clear</i>Usuń</a>
                <a className="waves-effect waves-light btn" ><Link to={'/update/' + this.props.eventId} ><i className="material-icons left">autorenew</i>Edytuj</Link></a>
            </div>
        )



    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (eventId) => dispatch(deleteEvent(eventId))
    }
}

export default connect(null, mapDispatchToProps)(UserEventsControlPanel);

