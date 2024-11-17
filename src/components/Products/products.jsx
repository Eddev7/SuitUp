import Product from "../Product/product"
import produtos from '../../assets/produtos'

export default function Products() {
  return (
    <>
      
      {/* seção do filtro de compra / aluguel */}
      <section className="flex gap-5 items-center justify-center h-20 lg:gap-20 lg:m-3">
        <button className="p-3 lg:p-4 border-solid border-black border-2 w-40 lg:w-64 rounded-full hover:bg-black hover:text-white transition">COMPRAR</button>
        <button className="p-3 lg:p-4 border-solid border-black border-2 w-40 lg:w-64 rounded-full hover:bg-black hover:text-white transition">ALUGAR</button>
      </section>

      {/* seção de produtos */}
      <section className="flex justify-center">
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-20">
          {
            produtos.map((produto) => (
              <Product 
                nome={produto.nome} 
                imagem={produto.image} 
                preco={produto.preco} 
                emEstoque={produto.estoque} 
                aluguel={produto.aluguel}
              />
            ))
          }
        </section>
      </section>
    </>
  )
}