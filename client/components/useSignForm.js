import { useState } from 'react';

const useSignForm = callback => {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const { username, password } = inputs;
  
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setSubmitted(true);
    if (username && password) {
      callback();
    }
  }
  return {
    handleChange,
    handleSubmit,
    inputs
  }

}

export default useSignForm;