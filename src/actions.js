// src/actions.js
import axios from "axios";

export const submitFormRequest = () => ({
  type: "SUBMIT_FORM_REQUEST"
});

export const submitFormSuccess = (data) => ({
  type: "SUBMIT_FORM_SUCCESS",
  payload: data
});

export const submitFormFailure = (error) => ({
  type: "SUBMIT_FORM_FAILURE",
  payload: error
});

export const submitFormData = (formData) => {
  return (dispatch) => {
    dispatch(submitFormRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1", formData)
      .then((response) => {
        dispatch(submitFormSuccess(response.data));
      })
      .catch((error) => {
        dispatch(submitFormFailure(error));
      });
  };
};
