import HeaderPages from "../components/Header/header";
import { Input, GenderInput} from "../components/Inputs/Inputs";

export default function Cadastro() {
    return <>
        <HeaderPages/>
        <form className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl mt-5">CADASTRO</h1>
            <Input name="nome" labelText="Nome:" placeholder="Digite seu primeiro nome" type="text"/>
            <Input name="sobrenome" labelText="Sobrenome:" placeholder="Digite seu sobrenome" type="text"/>
            <Input name="email" labelText="E-mail:" placeholder="Digite seu E-mail" type="text"/>
            <Input name="CPF" labelText="CPF:" placeholder="Digite seu CPF" type="text"/>
            <Input name="senha" labelText="Senha:" placeholder="Digite sua senha" type="text"/>
            <Input name="repetirsenha" labelText="Repita a senha:" placeholder="Digite sua senha novamente" type="text"/>
            <div className="w-11/12">
                <GenderInput/>
            </div>
            <button className="font-light bg-terceira p-3 text-lg text-white shadow-md rounded-md w-11/12 mt-2 border-2 hover:border-black hover:solid hover:bg-transparent hover:text-black transition">Finalizar</button>
        </form>
    </>
}   