import { Input, GenderInput} from "../components/Inputs/Inputs";

export default function Login() {
    return <div>
        <form className="flex flex-col justify-center items-center gap-4 mt-32">
            <h1 className="text-4xl mt-5">LOGIN</h1>
            <Input name="email" labelText="E-mail:" placeholder="Digite seu E-mail" type="text"/>
            <Input name="senha" labelText="Senha:" placeholder="Digite sua senha" type="text"/>
            <button className="font-light bg-terceira p-3 text-lg text-white shadow-md rounded-md w-11/12 lg:w-1/2 mt-2 border-2 hover:border-black hover:solid hover:bg-transparent hover:text-black transition">Entrar</button>
            <div className="w-11/12 lg:w-1/2 font-light -mt-3">
                <p className="text-sm">Não lembra da sua senha? <span className=" text-terceira underline cursor-pointer">Entre aqui</span></p>
            </div>
        </form>
    </div>
}   