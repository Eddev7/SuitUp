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
    aluguel
  }) {

  return <>
    <div className="w-44 bg-red-500 flex items-center flex-col p-2">
        <img src={imagem} alt="" className="w-40 h-40 bg-blue-500 m-1"/>
        <div className="flex flex-col">
            <h3>Terno Slim Masculino</h3>
            <p>R$ {preco} {desconto ? <sup className="text-red-600">- {desconto}</sup> : <span></span>}</p>
            <button className="bg-terceira p-2 text-sm text-white rounded-md w-32 mt-2">{aluguel ? "Alugar" : "Comprar"}</button>
        </div>
    </div>
  </>
}