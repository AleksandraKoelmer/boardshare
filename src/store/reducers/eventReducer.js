const initState = {
    events: [
        { id: '1', eventTitle: 'dupa', city: 'Dziura', date: '23.04.2020' },
        { id: '2', eventTitle: 'rtfd', city: 'Dupa', date: '25.04.2020' }
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