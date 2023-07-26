// src/App.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitFormData } from "./actions";

const App = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const responseData = useSelector((state) => state.data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitFormData(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} />
        <input type="email" name="email" onChange={handleChange} />
        <button type="submit" disabled={loading}>
          Submit
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
      {responseData && (
        <div>
          <h2>Response Data:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
