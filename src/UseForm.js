import { useState } from "react";

function useForm() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const finalFormEndpoint = e.target.action;
    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});



      fetch(finalFormEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => {
        setMessage("We'll be in touch soon.");
        setStatus('success');
      })
      .catch((err) => {
        setMessage(err.toString());
        setStatus('error');
      });
  };
  window.location.reload(true);
  return { handleSubmit, status, message };
}

export default useForm;