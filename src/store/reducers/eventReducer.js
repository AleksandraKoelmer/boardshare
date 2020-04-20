const initState = {
    events: [
   ]
};


const eventReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log('created event', action.event)
            return state;

        case 'CREATE_EVENT_ERROR':
            console.log('create project error');
            return state;

        default:
            return state;



    }

}

export default eventReducer; 