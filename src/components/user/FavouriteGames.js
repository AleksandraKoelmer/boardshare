import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateFavourites } from '../../store/actions/userActions'

class FavouriteGames extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favourites: []
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    onClick = (e) => {
        let clickedItem = e.target.id
        this.handleAdding(clickedItem)
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.updateFavourites(this.state.favourites)
    }

    handleAdding(clickedItem) {
        this.setState((state) => {
            if (state.favourites.includes(clickedItem)) {
                const favourites = state.favourites.filter(item => item !== clickedItem);
                return {
                    favourites
                };
            }
            else {
                const favourites = [...state.favourites, clickedItem]
                return {
                    favourites
                }
            }
        })
    }

    render() {
        const types = ['Bitewne', 'Ekonomiczne', 'Fabularne', 'Imprezowe', 'Karciane', 'Kooperacyjne', 'Logiczne', 'Quizy', 'RPG', 'Strategiczne']
        return (
            <div className='container'>
                <form onSubmit={this.handleFormSubmit}>
                    {types.map((type) =>
                        <div className='col s6 m6' >
                            <label onChange={this.onClick} >
                                <input type="checkbox" id={type} key={type} />
                                <span>{type}</span>
                            </label>
                        </div>)}
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFavourites: (favourites) => dispatch(updateFavourites(favourites))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteGames)

