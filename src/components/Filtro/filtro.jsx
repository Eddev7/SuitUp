import 'animate.css';

export default function Filtro({ handleFilter, comprarFilter, aluguelFilter, className}) {
    return (
        <section className={"flex gap-5 items-center justify-center h-20 lg:gap-20 lg:m-3" + className}>
        <button 
          onClick={() => handleFilter({ type: "comprar" })} 
          className={`
            p-3 lg:p-4 border-solid border-black border-2 w-40 lg:w-64 rounded-full 
            hover:bg-black hover:text-white transition
            ${comprarFilter ? "bg-black text-white" : 's'}
            animate__animated animate__fadeInDown animate__faster
            `}
          >COMPRAR</button>
        <button 
          onClick={() => handleFilter({ type: "aluguel"})} 
          className={`
            p-3 lg:p-4 border-solid border-black border-2 w-40 lg:w-64 rounded-full 
            hover:bg-black hover:text-white transition
            ${aluguelFilter ? "bg-black text-white" : ""}
            animate__animated animate__fadeInDown animate__faster
            `}
        >ALUGAR</button>
      </section>
    )
}