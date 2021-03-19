import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE,
  UPDATE_SERVICE,
  SELECT_UPDATE_SERVICE,
  RESET_SERVICE_FORM,
} from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
};

export default function serviceFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD: {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    }

    case SELECT_UPDATE_SERVICE: {
      const { id, name, price } = action.payload;
      return { id, name, price };
    }

    case ADD_SERVICE:
    case UPDATE_SERVICE:
    case RESET_SERVICE_FORM:
      return { ...initialState };

    default:
      return state;
  }
}
