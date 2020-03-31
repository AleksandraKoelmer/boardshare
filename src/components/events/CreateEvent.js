import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createEvent } from '../../store/actions/eventActions'



class CreateEvent extends Component {
    state = {
        eventTitle: '',
        city: '',
        date: '',
        gameType: '',
        duration: '',
        minAge: '',
        description: ''

    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createEvent(this.state)
        this.props.history.push('/');
    }




    render() {

        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div>
                <div className='container'>
                    <form onSubmit={this.handleSubmit} className='white'>
                        <h5 className='grey-text'> Dodaj nowe wydarzenie </h5>
                        <div className='input-field'>
                            <label htmlFor='eventTitle'>Nazwa wydarzenia</label>
                            <input type='text' id='eventTitle' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='city'>Miasto</label>
                            <input type='text' id='city' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='date'>Data wydarzenia</label>
                            <input type='date' id='date' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='gameType'>Rodzaj gry</label>
                            <input type='text' id='gameType' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='duration'>Przewidywany czas gry</label>
                            <input type='number' id='duration' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='minAge'>Minimalny wiek użytkowników</label>
                            <input type='number' id='minAge' onChange={this.handleChange}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='description'>Opis wydarzenia</label>
                            <textarea id='description' className='materialize-textarea' onChange={this.handleChange}></textarea>
                        </div>

                        <div className='input-field'>
                            <button className='btn green'>Utwórz wydarzenie</button>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => dispatch(createEvent(event))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)
