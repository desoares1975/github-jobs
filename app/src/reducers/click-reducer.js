import { SEND_QUERY } from '../actions/types';

const initialState = {
  description: '',
  location: '',
  fullTime: false,
  list: {total:0, data: []}
};

export const clickReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_QUERY:
      return {
        ...state,
        list: action.jobs
      };
    default:
      return state;
  }
}
