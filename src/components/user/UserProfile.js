import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/pl'


import FavouriteGames from './FavouriteGames'

const UserProfile = (props) => {
    const {auth, fsUsers } = props;


    if (!auth.uid) return <Redirect to='/signin' />
    moment.locale('pl') // change language for displayed date
    console.log(auth)
    console.log(fsUsers)
    if(fsUsers){
    return (




        <div className='container teal lighten-5' style={{padding:'15px'}}>
            
            <div className="section">
                <h5>Dane profilu</h5>
            
                <p>E-mail: {auth.email}</p>
                <p>Nazwa użytkownika: {fsUsers[auth.uid].username}</p>


            </div>
            <div className="divider"></div>
            <div className="section">
                <h5>Ulubione typy gier</h5>
                <FavouriteGames></FavouriteGames>
            </div>
            <div className="divider"></div>
            <div className="section">
                <h5>Section 3</h5>
                <p>Stuff</p>
            </div>

        </div>
    )}
    else return(
        <div className="progress">
        <div className="indeterminate"></div>
    </div>
    )






}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const events = state.firestore.data.events;
    const event = events ? events[id] : null;


    return {
        auth: state.firebase.auth,
        fsUsers: state.firestore.data.users
    }
}

export default compose(
    firestoreConnect([{ collection: 'users' }]),
    connect(mapStateToProps)
)(UserProfile)


