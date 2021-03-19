import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  SELECT_UPDATE_SERVICE,
  REMOVE_SERVICE,
  RESET_SERVICE_FORM,
} from '../actions/actionTypes';

const initialState = [
  { id: nanoid(), name: 'Glass replace', price: 15000, disabled: false },
  { id: nanoid(), name: 'Battery replace', price: 9000, disabled: false },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload;
      return [
        ...state,
        { id: nanoid(), name, price: Number(price), disabled: false },
      ];
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
      return state.map((item) => ({
        ...item,
        disabled: (item.id === id),
      }));
    }

    case REMOVE_SERVICE: {
      const { id } = action.payload;
      return [...state.filter((item) => item.id !== id)];
    }

    case RESET_SERVICE_FORM: {
      return state.map((item) => ({ ...item, disabled: false }));
    }

    default:
      return state;
  }
}
