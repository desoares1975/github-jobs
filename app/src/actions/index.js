import { SEND_QUERY } from './types';
import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_API_PATH}/search`;
const initialState = {
  description: '',
  location: '',
  fullTime: false,
  list: {total: 0, data: []}
};

const fetchJobs = (jobs) => {
  return {
    type: SEND_QUERY,
    jobs
  }
};

export default function fetchAllJobs(state = initialState) {
  return (dispatch) => {

    return axios.post(apiUrl, state, {
      headers: {
        'Authorization': `Basic QVdXQ29yOnNlY3JldA==`
      }
    })
      .then(response => {
        dispatch(fetchJobs(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
