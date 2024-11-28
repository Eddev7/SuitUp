import React, { useState } from "react";
import { Input, GenderInput} from "../components/Inputs/Inputs";
import { validate } from "email-validator";
import { cpf } from "cpf-cnpj-validator"; 

const validarFormulario = (nome, sobrenome, email, CPF, senha, repetirSenha, genero) => {
    const erros = {};
  
    // Validação de Nome
    if (!nome.trim()) {
      erros.nome = "O nome é obrigatório.";
    } else if (nome.length < 2) {
      erros.nome = "O nome deve ter pelo menos 2 caracteres.";
    }
  
    // Validação de Sobrenome
    if (!sobrenome.trim()) {
      erros.sobrenome = "O sobrenome é obrigatório.";
    } else if (sobrenome.length < 2) {
      erros.sobrenome = "O sobrenome deve ter pelo menos 2 caracteres.";
    }
  
    // Validação de Email
    if (!email.trim()) {
      erros.email = "O e-mail é obrigatório.";
    } else if (!validate(email)) {
      erros.email = "Digite um e-mail válido.";
    }
  
    // Validação de CPF
    if (!CPF.trim()) {
      erros.CPF = "O CPF é obrigatório.";
    } else if (!cpf.isValid(CPF)) {
      erros.CPF = "Digite um CPF valido.";
    }
  
    // Validação de Senha
    if (!senha) {
      erros.senha = "A senha é obrigatória.";
    } else if (senha.length < 8) {
      erros.senha = "A senha deve ter pelo menos 8 caracteres.";
    }
  
    // Validação de Repetir Senha
    if (!repetirSenha) {
      erros.repetirSenha = "Por favor, repita a senha.";
    } else if (repetirSenha !== senha) {
      erros.repetirSenha = "As senhas não coincidem.";
    }

    // Validação de Repetir Senha
    if (!genero) {
      erros.genero = "Por favor escolha um genero.";
    }
  
    return erros;
};

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCPF] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [genero, setGenero] = useState('');
    const [error, setError] = useState({});
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const errors = validarFormulario(nome, sobrenome, email, CPF, senha, repetirSenha, genero);

      if(errors.length == 0) {
        setError({});
        e.onSubmit();
      } else {
        setError(errors)
      }
    }

    return <>
        <form className="flex flex-col justify-center items-center gap-4" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-4xl mt-5">CADASTRO</h1>
            <Input name="nome" labelText="Nome:" placeholder="Digite seu primeiro nome" type="text" onChange={(e) => setNome(e.target.value)} error={error.nome}/>
            <Input name="sobrenome" labelText="Sobrenome:" placeholder="Digite seu sobrenome" type="text" onChange={(e) => setSobrenome(e.target.value)} error={error.sobrenome}/>
            <Input name="email" labelText="E-mail:" placeholder="Digite seu E-mail" type="text" onChange={(e) => setEmail(e.target.value)} error={error.email}/>
            <Input name="CPF" labelText="CPF:" placeholder="Digite seu CPF" type="text" onChange={(e) => setCPF(e.target.value)} error={error.CPF}/>
            <Input name="senha" labelText="Senha:" placeholder="Digite sua senha" type="password" onChange={(e) => setSenha(e.target.value)} error={error.senha}/>
            <Input name="repetirsenha" labelText="Repita a senha:" placeholder="Digite sua senha novamente" type="password" onChange={(e) => setRepetirSenha(e.target.value)} error={error.repetirSenha}/>
            <div className="w-11/12 lg:w-1/2">
                <GenderInput setGenero={setGenero} error={error.genero}/>
            </div>
            
            <button 
                className="font-light bg-terceira p-3 text-lg text-white shadow-md rounded-md w-11/12 lg:w-1/2 mt-2 mb-5 border-2 hover:border-black hover:solid hover:bg-transparent hover:text-black transition"
                type="submit"
            >Finalizar</button>
        </form>
    </>
}   