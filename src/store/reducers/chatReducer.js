const initState = {
    chats: [{
        timestamp:1111,
        user: 'erverbwrfvwfv',
        content: 'dummy data'
    },
    {
        timestamp:1111,
        user: 'erverbwrfvwfv',
        content: 'dummy data'
    }
   ]
};


const chatReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'NEW_MESSAGE_SENT':
           
            return [
                ...state,
                {
                  text: action.text,
                  completed: false
                }
              ]

        case 'SENDING_MESSAGE_ERROR' :
            return state

           
        default:
            return state;



    }

}

export default chatReducer