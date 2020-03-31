import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';


import { signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <ul className='right'>

            <li> <NavLink to='/create'>Nowe wydarzenie</NavLink> </li>
            <li> <NavLink to='/'>Wydarzenia</NavLink> </li>
            <li><a onClick={props.signOut}>Wyloguj</a> </li>
            <li> <NavLink to='/' className='btn btn-floating green'> {props.profile.initial} </NavLink> </li>
        </ul>


    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps )(SignedInLinks);