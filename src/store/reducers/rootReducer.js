import { combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

import  userReducer from './userReducer'
import authReducer from './authReducer'
import eventReducer from './eventReducer'
import chatReducer from './chatReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    event: eventReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    user: userReducer,
    chat: chatReducer
})

export default rootReducer;