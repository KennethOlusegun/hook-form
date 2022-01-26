import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import FormLogo from './assets/form-logo.png'

import './App.css';


const schema = yup.object({
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 dígitos').required('A senha é obrigatória'),
}).required();

function App() {
  const { register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });;

  console.log(watch("password"));

  function onSubmit(userdata) {
    console.log(userdata)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='container'>
        <div className='imagem'>
          <img src={FormLogo} alt='imagem-logo' />
        </div>

        <div className='botao'>
          <h1>Faça seu login</h1>

          <label>
            Email
            <input 
                placeholder='Digite seu e-mail'
                type='text'
                {...register("email")} />
            {<span>{errors.email?.message}</span>}
          </label>

          <label>
            Senha
            <input
                placeholder='Digite sua senha' 
                type="password"
                {...register("password")} 
            />
            {<span>{errors.password?.message}</span>}
          </label>

          <button type='submit'>Entrar</button>
        </div>
      </div>


    </form>
  );
}

export default App;
