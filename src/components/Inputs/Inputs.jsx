import React, { useState } from 'react';

export function Input(props) {
    return <div className="flex flex-col w-11/12 gap-1">
        <label htmlFor={props.name} className="text-xs lg:text-base">{props.labelText}</label>
        <input 
            name={props.name} 
            type={props.type} 
            placeholder={props.placeholder}
            className="border border-solid border-black p-3 rounded-md text-xs"
        />
    </div>
}


export function GenderInput() {
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gender) {
      setError('Por favor, selecione um gênero.');
    } else {
      setError('');
      alert(`Gênero selecionado: ${gender}`);
    }
  };

  return (
      <div className='flex flex-col justify-center items-start text-xs gap-1 lg:text-base'>
        <label htmlFor="gender">Gênero:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className='p-2 rounded-lg border border-solid border-black bg-transparent'
        >
          <option value="">Escolha</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="nao_binario">Não-Binário</option>
          <option value="outro">Outro</option>
        </select>
      </div>
  );
};