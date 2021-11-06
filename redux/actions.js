import axios from "axios";
export const GET_HELLO = 'GET_HELLO';

export const getHello = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`/`);
      if (res.data) {
        dispatch({
          type: GET_HELLO,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(`Error Am ${error}`);
  }
};