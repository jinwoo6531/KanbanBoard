import { CONSTANTS } from '../actions';

let listID = 2;

const initialState = [
    {
        title: "Resources",
        id: 0,
        cards: [
            {
                id: 0,
                text: "1번 카드"
            },
            {
                id:1,
                text: "2번 카드"
            }
        ]
    },

    {
        title: "To Do",
        id: 1,
        cards: [
            {
                id: 0,
                text: "3번 카드"
            },
            {
                id:1,
                text: "4번 카드"
            },
            {
                id:2,
                text: "5번 카드"
            }
        ]
    }
]


export const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1
            return [...state, newList];        
    
        default:
            return state;
    }
}