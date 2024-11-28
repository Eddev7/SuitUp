import { useDispatch } from "react-redux"
import bagActionsTypes from "../../store/Bag/action-Types"

export default function ProductCard ({ produto, disabled }) {

  const dispatch = useDispatch();

  const addOnBag = () => {
    dispatch({
      type: bagActionsTypes.ADD,
      payload: { produto }
    })
  }

  return <>
    <div className={`w-44 lg:w-72 bg-fundoproduto flex items-center flex-col p-1 ${disabled || !(produto.estoque > 0) ? 'hidden' : ''} shadow-lg`}>
        <img src={produto.image} alt="" className="w-40 h-40 lg:w-72 lg:h-72 bg-blue-500 m-1"/>
        <div className="grid w-40 lg:w-64 lg:text-xl">
            <h3 className="truncate">{produto.nome}</h3>
            <p>R$ {produto.preco.toFixed(2).replace('.', ',')} {produto.desconto ? <sup className="text-red-600">- {produto.desconto}</sup> : <span></span>}</p>
            <button 
              className="font-light tracking-wider bg-terceira p-2 lg:p-3 lg:text-base text-sm text-white shadow-md rounded-md w-32 lg:w-52 mt-2 lg:mt-6 border-2 hover:border-black hover:solid hover:bg-fundoproduto hover:text-black transition"
              onClick={() => addOnBag()}
              >{produto.aluguel ? "Alugar" : "Comprar"}</button>
        </div>
    </div>
  </>
} 