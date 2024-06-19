import { useState } from "react";

const useForm = (initialState) => {
  //state init
  const [input, setInput] = useState(initialState);

  //on change
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //clear form after submit
  const resetForm = () => {
    setInput(initialState);
  };

  return { input, handleInputChange, resetForm };
};

export default useForm;
