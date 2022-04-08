import axios from "axios";

// redux types
import { SIGN_OUT, SIGN_IN, SIGN_UP, GOOGLE_AUTH } from "./auth.type";

// NOTE: SIGN UP action
export const signUp = (userData) => async (dispatch) => {
    try {
      const User = await axios({
        method: "POST",
        url: `https://devtown-zomato-master.herokuapp.com/auth/signup`,
        data: { credentials: userData },
      });
  
      localStorage.setItem(
        "zomatoUser",
        JSON.stringify({ token: User.data.token })
      );
  
      window.location.reload();
  
      return dispatch({ type: SIGN_UP, payload: User.data });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };