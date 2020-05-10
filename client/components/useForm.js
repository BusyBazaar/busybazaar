import { useState } from 'react';

const useForm = callback => {

  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    country: '',
    category: '',
    price: '',
    url: ''
  });
  const { name, description, country, category, price, url } = inputs;
  
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    console.log('hey')
    e.preventDefault();
    // setSubmitted(true);
    if (name && description && country && category && price && url) {
      callback();
    }
  }
  return {
    handleChange,
    handleSubmit,
    inputs
  }

}

export default useForm;