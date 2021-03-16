import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="username" name="username" ref={register({required: true, maxLength: 15})} />
      <input type="text" placeholder="password" name="password" ref={register({required: true, min: 4, pattern: /^[A-Za-z]\w{7,14}$/i})} />

      <input type="submit" />
    </form>
  );
}