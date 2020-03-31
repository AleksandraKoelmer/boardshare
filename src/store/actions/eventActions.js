export const createEvent = (event) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid
        firestore.collection('events').add({
            ...event,
            author: profile.username,
            authorId: authorID,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT_SUCCESS' });
          }).catch(err => {
            dispatch({ type: 'CREATE_EVENT_ERROR' }, err);
          });
        }
      };