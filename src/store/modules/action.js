import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';

export const fetchNotes = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/'); 
    dispatch({
      type: FETCH_NOTES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_NOTES_ERROR,
      payload: error.message,
    });
  }
};
