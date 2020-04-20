import React from 'react'
import { Link } from 'react-router-dom'
import { SideNavItem, Button, SideNav } from 'react-materialize'

import { connect } from 'react-redux';


import { signOut} from '../../store/actions/authActions'

const Sidebar = (props) => {
    const sideNavItenStyle={
        padding: '10px'    
    }
    const { auth } = props;
    if (auth.uid){
       
    return (

      
       
        <div>

            <SideNav className='sidenav' style={{ paddingTop: '80px' }}
                id="SideNav-10"
                options={{ closeOnClick: true }}
                trigger={<Button node="button"> Menu </Button>}
            >
                <SideNavItem divider />
                <SideNavItem style = {sideNavItenStyle}><Link to={'/user/'+auth.uid}>Moje konto</Link></SideNavItem>
                <SideNavItem style = {sideNavItenStyle}><Link to={'/userevents/'+auth.uid}>Moje wydarzenia</Link></SideNavItem>
                <SideNavItem style = {sideNavItenStyle}>Gry które udostępniasz</SideNavItem>

                <SideNavItem divider />

                <SideNavItem style = {sideNavItenStyle}>Dodaj grę do wypożyczenia</SideNavItem>
                <SideNavItem style = {sideNavItenStyle}><Link to={'/create'}>Dodaj wydarzenie</Link></SideNavItem>
                
                <SideNavItem divider />

                <SideNavItem style = {sideNavItenStyle}>Szukaj wydarzenia</SideNavItem>
                <SideNavItem style = {sideNavItenStyle}>Szukaj gry do wypożyczenia</SideNavItem>

                <SideNavItem divider />

                <SideNavItem style = {sideNavItenStyle} onClick={props.signOut}>Wyloguj</SideNavItem>

                <SideNavItem divider />


            </SideNav>
        </div>
    )}
    else return null
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Sidebar);





