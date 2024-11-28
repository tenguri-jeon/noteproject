import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';
export const FETCH_NOTES_LOADING = 'FETCH_NOTES_LOADING';

export const fetchNotes = () => async (dispatch) => {
  dispatch({ type: FETCH_NOTES_LOADING });

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000'; 

  try {
    const response = await axios.get(`${apiUrl}/`);  

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
