const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

const createMessage = (message => {
    return admin.firestore().collection('chats')
    .add(message)
    .then( doc => console.log(doc))

})

exports.newMessage = functions.firestore
.document('events/{eventId}').onWrite((change, context) => {
    
    const message = 'sss'

    return createMessage(message)

})



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

