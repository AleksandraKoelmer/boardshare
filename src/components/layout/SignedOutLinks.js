import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className='right'>

            <li> <NavLink to='/signin'>Zaloguj</NavLink> </li>
            <li> <NavLink to='/signup'>Zarejestruj</NavLink> </li>
      
        </ul>


    )
}

export default SignedOutLinks;