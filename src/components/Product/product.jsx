export default function Product({
    nome,
    preco,
    descricao,
    imagem,
    tamanhosDisponiveis,
    coresDisponiveis,
    emEstoque,
    desconto,
    material,
    modelo,
    onAddToCart,
    aluguel,
    disabled
  }) {

  return <>
    <div className={`w-44 lg:w-72 bg-fundoproduto flex items-center flex-col p-1 ${disabled || !(emEstoque > 0) ? 'hidden' : ''} shadow-lg`}>
        <img src={imagem} alt="" className="w-40 h-40 lg:w-72 lg:h-72 bg-blue-500 m-1"/>
        <div className="grid w-40 lg:w-64 lg:text-xl">
            <h3 className="truncate">{nome}</h3>
            <p>R$ {preco.toFixed(2).replace('.', ',')} {desconto ? <sup className="text-red-600">- {desconto}</sup> : <span></span>}</p>
            <button className="font-light bg-terceira p-2 lg:p-3 lg:text-base text-sm text-white shadow-md rounded-md w-32 lg:w-52 mt-2 lg:mt-6 border-2 hover:border-black hover:solid hover:bg-fundoproduto hover:text-black transition">{aluguel ? "Alugar" : "Comprar"}</button>
        </div>
    </div>
  </>
} 