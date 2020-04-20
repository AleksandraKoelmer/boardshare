export const sendMessage = (newMessage) => {
    return (dispatch, getState, { getFirestore }) => {
        console.log(newMessage.eventId)
        const firestore = getFirestore();
        
        const messages = firestore.collection('events').doc(newMessage.eventId)

        messages.update({
            chat: firestore.FieldValue.arrayUnion({
                
                message: {
                    user: newMessage.user,
                    content: newMessage.content,
                    timestamp: Date.now(),
                }
            })
        })
            .then(() => {
                dispatch({ type: 'NEW_MESSAGE_SENT' })
            }).catch(err => {
                dispatch({ type: 'SENDING_MESSAGE_ERROR', err })
            })
    }
}

export const newMessage = () => {
    return (dispatch, getState, { getFirestore }) => {
  
        const firestore = getFirestore();
        
        const messages = firestore.collection('events').doc(newMessage.eventId)

       console.log(messages)
            .then(() => {
                dispatch({ type: 'NEW_MESSAGE_RECEIVED' })
                console.log('action')
            }).catch(err => {
                dispatch({ type: 'RECEIVING_MESSAGE_ERROR', err })
            })
    }
}



