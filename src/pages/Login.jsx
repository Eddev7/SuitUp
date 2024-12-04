import { Input } from "../components/Inputs/Inputs";
import { useState } from "react";

const validarFormulario = (email, senha) => {
    const erros = {};
    
    // Validação de Email
    if (!email) {
      erros.email = "O e-mail é obrigatório.";
    }
    
    // Validação de Senha
    if (!senha) {
      erros.senha = "A senha é obrigatória.";
    }
    
    return erros;
};

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();
        const errors = validarFormulario(email, senha);
        setError(errors);
    }

    return <div>
        <form className="flex flex-col justify-center items-center gap-4 mt-32" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="text-4xl mt-5">LOGIN</h1>
            <Input name="email" labelText="E-mail:" placeholder="Digite seu E-mail" type="text" onChange={(e) => setEmail(e.target.value)} error={error.email}/>
            <Input name="senha" labelText="Senha:" placeholder="Digite sua senha" type="text" onChange={(e) => setSenha(e.target.value)} error={error.senha}/>
            <button className="font-light bg-terceira p-3 text-lg text-white shadow-md rounded-md w-11/12 lg:w-1/2 mt-2 border-2 hover:border-black hover:solid hover:bg-transparent hover:text-black transition" type="submit">Entrar</button>
            <div className="w-11/12 lg:w-1/2 font-light -mt-3">
                <p className="text-sm">Não lembra da sua senha? <span className=" text-terceira underline cursor-pointer">Entre aqui</span></p>
            </div>
        </form>
    </div>
}   