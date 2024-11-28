import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_ERROR = 'FETCH_NOTES_ERROR';
export const FETCH_NOTES_LOADING = 'FETCH_NOTES_LOADING';

export const fetchNotes = () => async (dispatch) => {
  dispatch({ type: FETCH_NOTES_LOADING });

  try {
    const response = await axios.get('https://port-0-testserver-m40ng5qod08f0898.sel4.cloudtype.app/'); 
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
