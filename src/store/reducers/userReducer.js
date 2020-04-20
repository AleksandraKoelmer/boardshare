const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_FAVOURITES_SUCCESS':
            return state;

        case 'UPDATE_FAVOURITES_ERROR':
            return state;

            case 'DELETE_EVENT_ERROR':
                return state;
    
            case 'DELETE_EVENT_SUCCESS':
                return state;

        default:
            return state;



    }

}

export default userReducer; 















