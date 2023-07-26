// src/reducers.js
const initialState = {
  data: null,
  loading: false,
  error: null
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM_REQUEST":
      return { ...state, loading: true, error: null };
    case "SUBMIT_FORM_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "SUBMIT_FORM_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default formReducer;
