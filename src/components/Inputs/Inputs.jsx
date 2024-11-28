import React, { useState } from 'react';

export function Input(props) {
    return <div className="flex flex-col w-11/12 lg:w-1/2 gap-1">
        <label htmlFor={props.name} className="text-xs lg:text-base">{props.labelText}</label>
        <input 
            name={props.name} 
            type={props.type} 
            placeholder={props.placeholder}
            className="border border-solid border-black p-3 rounded-md text-xs"
            onChange={props.onChange}
        />
        <div className={` text-red-600 ${props.error ? '' : 'hidden'}`}>
          {props.error}        
        </div>
    </div>
}


export function GenderInput(props) {
  const [gender, setGender] = useState('');
  

  return (
      <div className='flex flex-col justify-center items-start text-xs gap-1 lg:text-base'>
        <label htmlFor="gender">Gênero:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value)
            props.setGenero(e.target.value);
          }}
          className='p-2 rounded-lg border border-solid border-black bg-transparent'
          >
          <option value="">Escolha</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="nao_binario">Não-Binário</option>
          <option value="outro">Outro</option>
        </select>
        <div className={` text-red-600 text-base ${props.error ? '' : 'hidden'}`}>
          {props.error}        
        </div>
      </div>
  );
};