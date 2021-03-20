import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  SELECT_UPDATE_SERVICE,
  REMOVE_SERVICE,
  RESET_SERVICE_FORM,
} from '../actions/actionTypes';

const initialState = {
  items: [
    { id: nanoid(), name: 'Glass replace', price: 15000 },
    { id: nanoid(), name: 'Battery replace', price: 9000 },
  ],
  editing: null,
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          { id: nanoid(), name, price: Number(price) },
        ]
      };
    }

    case UPDATE_SERVICE: {
      const { id, name, price } = action.payload;
      return [
        ...state.filter((item) => item.id !== id),
        { id, name, price, disabled: false },
      ];
    }

    case SELECT_UPDATE_SERVICE: {
      const { id } = action.payload;
      return { ...state, editing: id };
    }

    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== id)],
      };
    }

    case RESET_SERVICE_FORM: {
      return { ...state, editing: null };
    }

    default:
      return state;
  }
}
