export const updateFavourites = (favourites) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const currentuser = firebase.auth().currentUser;
        const uid = currentuser.uid;
             firestore.collection('users').doc(uid).update({  
                favourites: favourites
            })
        .then(() => {
            dispatch({ type: 'UPDATE_FAVOURITES_SUCCESS' })
        }).catch(err => {
            dispatch({ type: 'UPDATE_FAVOURITES_ERROR', err })
        })
    }
}

export const deleteEvent = (eventId) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
                firestore.collection('events').doc(eventId).delete()
                
        .then(() => 
            dispatch({ type: 'DELETE_EVENT_SUCCESS' })
        ).catch(err => {
            dispatch({ type: 'DELETE_EVENT_ERROR', err })
        })
    }
}