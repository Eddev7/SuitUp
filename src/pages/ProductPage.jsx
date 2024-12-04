import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../config/axiosConfig';
import SizeSelector from '../components/SizeSelector/sizeSelector';
import { Link } from 'react-router-dom';

//redux
import { useDispatch } from "react-redux"
import bagActionsTypes from '../store/Bag/action-Types'
import QntSelector from '../components/QntSelector/qntSelector';

// animação
import 'animate.css';

export default function ProductPage() {
    const { id } = useParams();

    const [produto, setProduto] = useState({});
    const [tamanhos, setTamanhos] = useState([])
    const [preco, setPreco] = useState('');
    const [sizeSelector, onSizeSelector] = useState(null);
    const [qnt, setQnt] = useState(1);
    const [error, setError] = useState('');
    const [isAddBag, setIsAddBag] = useState(false);

    const dispatch = useDispatch();

    const addOnBag = () => {
      if(!sizeSelector) return setError('Selecione um tamanho:');
      setError('');
      setIsAddBag(true);
      dispatch({
        type: bagActionsTypes.ADD,
        payload: { produto: {
          ...produto,
          sizeSelector,
          qnt
        } }
      })
    }  
    
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await api.get(`/products/${id}`);
            setProduto(response.data);
            setTamanhos(response.data.tamanhos.split(','))
            setPreco((response.data.preco).toFixed(2))
          } catch (err) {
          }
        }
        fetchData();
    }, []);
    
    return <>
        
        {/* Menu de escolha */}
        <div className={`${isAddBag ? '' : 'hidden'} fixed h-screen w-screen bg-blackTrans flex justify-center animate__animated animate__fadeIn z-30`}>
          <div className='w-110 h-52 bg-white mt-60 rounded-xl flex flex-col justify-center items-center animate__animated animate__fadeInUp'>
            <h2 className='text-2xl text-green-500 drop-shadow-md'>Produto adicionado ao seu carrinho!</h2>
            <p className='text-gray-400'>O que você deseja fazer a seguir?</p>
            <div className='flex w-full gap-10 justify-center'>
              <Link to={'/'} className="mb-4 mt-4 font-bold w-1/3 tracking-wider bg-terceira p-2 lg:p-4 lg:text-base text-sm text-white shadow-md rounded-md border-2 hover:border-black hover:solid hover:bg-fundoproduto hover:text-black transition">
                <button          
                  >Continuar Comprando
                </button>
              </Link>
              <button 
                className="mb-4 mt-4 font-bold w-1/3 tracking-wider bg-terceira p-2 lg:p-4 lg:text-base text-sm text-white shadow-md rounded-md border-2 hover:border-black hover:solid hover:bg-fundoproduto hover:text-black transition"
                >Finalizar Compra
              </button>
            </div>
          </div>
        </div>

        {/*Pagina do produto*/}
        <section className='flex flex-col lg:flex-row m-20 gap-10 justify-center items-center'>
            <img src={produto.image} alt="" className='h-111 p-1 rounded-lg bg-slate-500 animate__animated animate__fadeInDown'/>
            <div className='w-110 h-111 flex flex-col justify-start items-start'>
                <h1 className='text-4xl font-light mb-3'>{produto.nome}</h1>
                <span className='text-3xl font-semibold'>R$ {preco.replace('.', ',')}</span>
                <small className='leading-4 text-base'>no cartão em até <strong>10x</strong> de<br/> <strong>R$ {(Number(preco)/10).toFixed(2).replace('.', ',')}</strong> sem juros</small>
                <section className='mt-3'>
                    <h3 className='mb-4'><strong>Tamanhos:</strong></h3>
                    <div className={`${error ? '' : 'hidden'} text-red-700 animate__animated animate__fadeIn`}>{error}</div>
                    <SizeSelector tamanhos={tamanhos} onSizeSelector={onSizeSelector} setError={setError}/>
                </section>
                <section className='w-full h-full flex flex-col justify-end'>
                  <QntSelector qnt={qnt} setQnt={setQnt}/>
                  <button 
                    className="mb-4 mt-4 font-light w-10/12 tracking-wider bg-terceira p-2 lg:p-4 lg:text-base text-sm text-white shadow-md rounded-md border-2 hover:border-black hover:solid hover:bg-fundoproduto hover:text-black transition"
                    onClick={() => addOnBag()}>
                      {produto.aluguel ? "Alugar" : "Comprar"}
                  </button>
                </section>
            </div>
        </section>
    </>
}   