import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
    state = {
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
        this.props.signIn(this.state)
    }

    render() {
        const { authError, auth } = this.props;

        if (auth.uid) return <Redirect to='/'/>


        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.handleSubmit} className='white'>
                        <h5 className='grey-text'> Zaloguj się </h5>
                        <div className='input-field'>
                            <label htmlFor='username'>E-mail użytkownika</label>
                            <input type='email' id='email' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Hasło</label>
                            <input type='password' id='password' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <button className='btn green'>Zaloguj</button>
                            <div className='red-text center'>
                                { authError ? <p>{authError}</p> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
