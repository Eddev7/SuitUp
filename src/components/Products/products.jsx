import Product from "../Product/product"

export default function Products() {
  return (
    <>
      {/* seção do filtro de compra / aluguel */}
      <section className="flex gap-5 items-center justify-center h-20">
        <button className="p-3 border-solid border-black border w-40 rounded-full hover:bg-black hover:text-white transition">COMPRAR</button>
        <button className="p-3 border-solid border-black border w-40 rounded-full hover:bg-black hover:text-white transition">ALUGAR</button>
      </section>
      {/* seção de produtos */}
      <section className="flex gap-4 justify-center">
        <Product preco="825,00" />
        <Product preco="915,00"/>
      </section>
    </>
  )
}