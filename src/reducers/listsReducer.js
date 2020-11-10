import { CONSTANTS } from '../actions';

let listID = 2;
let cardID = 3;

const initialState = [
  {
    title: 'Resources',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: '1번 카드',
      },
      {
        id: `card-${1}`,
        text: '2번 카드',
      },
    ],
  },

  {
    title: 'To Do',
    id: `list-${1}`,
    cards: [
      {
        id: `card-${0}`,
        text: '3번 카드',
      },
      {
        id: `card-${1}`,
        text: '4번 카드',
      },
      {
        id: `list-${2}`,
        text: '5번 카드',
      },
    ],
  },
];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
};
