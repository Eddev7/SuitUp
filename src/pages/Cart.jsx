import CardItem from "../components/CardItem/cardItem";

// redux
import { useSelector } from 'react-redux';

function Cart() {
  
  const { bag } = useSelector((rootReducer) => rootReducer.bagReducer);

  return <div className="flex flex-col items-center gap-5">
    <div className="w-screen flex flex-col h-111 max-h-111 overflow-scroll items-center mt-10 gap-8">
        {bag.length != 0 ? bag.map((prod, index) => <CardItem key={index} index={index} produto={prod} />) : <p>O Carrinho esta Vazio</p>}
    </div>
    <button 
      className="font-light bg-terceira p-3 text-lg text-white shadow-md rounded-md w-110 mt-2 mb-5 border-2 hover:border-black hover:solid hover:bg-transparent hover:text-black transition"
      type="submit">
        Finalizar
    </button>
  </div>
}

export default Cart;
