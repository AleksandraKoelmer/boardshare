import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        email: '',
        username: '',
        password: ''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }




    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />

        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.handleSubmit} className='white'>
                        <h5 className='grey-text'> Rejestracja nowego użytkownika </h5>
                        <div className='input-field'>
                            <label htmlFor='email'>E-mail</label>
                            <input type='email' id='email' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='username'>Nazwa użytkownika</label>
                            <input type='text' id='username' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Hasło</label>
                            <input type='password' id='password' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <button className='btn green'>Zarejestruj</button>
                            <div className='red-text center'>
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))

    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
