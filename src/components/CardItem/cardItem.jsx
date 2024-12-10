import { FaRegTrashAlt } from "react-icons/fa";

//redux
import { useDispatch } from "react-redux"
import bagActionsTypes from "../../store/Bag/action-Types";

// animação
import 'animate.css';

export default function CardItem({ produto, index }) {

    const dispatch = useDispatch();
 
    const handleDelete = () => {
        dispatch({
            type: bagActionsTypes.REMOVE,
            payload: { index: index }
        })
    }

    return (<div className={"border border-solid border-black rounded-lg w-110 h-32 flex items-center p-2 gap-2 mb-6 animate__animated animate__fadeInLeft"}>
        <img src={`data:image/png;base64,` + produto.image} alt="" className="h-28 p-1 bg-fundoproduto"/>
        <div className="flex flex-col max-w-80 w-80 gap-8">
            <div>
                <p className="text-lg truncate">{produto.nome}</p>
                <p className="text-gray-500">Tamanho: {produto.sizeSelector}</p>
            </div>
            <div className="flex justify-between ">
                <p className="flex gap-1 justify-center items-center text-gray-500">Quatidade: <span className="border-2 border-gray-400 rounded-full flex justify-center items-center w-6 h-6">{produto.qnt}</span></p>
                <p className="text-lg">R$ {(produto.preco).toFixed(2).replace('.', ',')}</p>
            </div>
        </div>
        <button className="w-40 h-full flex justify-center items-center hover:animate-bounce" onClick={() => handleDelete()}>
            <FaRegTrashAlt size={30} className="text-red-700 cursor-pointer "/>
        </button>
    </div>)
}