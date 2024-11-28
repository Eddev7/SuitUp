import React, { useEffect, useState } from "react"
import ProductCard from "../ProductCard/productCard";
import Filtro from "../Filtro/filtro";
import api from '../../config/axiosConfig'

export default function Products({ search }) {

  const [comprarFilter, setFilterComprar] = useState(false);
  const [aluguelFilter, setFilterAluguel] = useState(false);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get('/products');
        setProdutos(response.data);
      } catch (err) {
      }
    }
    fetchData();
  }, []);

  const handleFilter = ({ type }) => {

    if(type === 'comprar' && aluguelFilter) {
      setFilterAluguel(!aluguelFilter)
      return setFilterComprar(!comprarFilter)
    }

    if(type === 'aluguel' && comprarFilter) {
      setFilterComprar(!comprarFilter)
      return setFilterAluguel(!aluguelFilter)
    }

    if(type === 'comprar') {
      return setFilterComprar(!comprarFilter)
    }

    if(type === 'aluguel') {
      return setFilterAluguel(!aluguelFilter)
    }

  }

  return (
    <>

      {/* seção do filtro de compra / aluguel */}
      <Filtro handleFilter={handleFilter} comprarFilter={comprarFilter} aluguelFilter={aluguelFilter}/>

      {/* seção de produtos */}
      <section className="flex justify-center">
        <section className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-20">
          {
            produtos.map((produto) => {
              let valorDigitado = search.toLowerCase();
              if(search == '') {
                return (
                  <ProductCard
                    key={produto.id}
                    produto={produto}
                    disabled={produto.aluguel ? comprarFilter : aluguelFilter}
                  />
              )
              } else if(produto.nome.toLowerCase().includes(valorDigitado)){
                return (
                  <ProductCard
                    key={produto.id}
                    produto={produto}
                    disabled={produto.aluguel ? comprarFilter : aluguelFilter}
                  />
              )  
              }
            })
          } 
        </section>
      </section>
    </>
  )
}