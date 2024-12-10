import lupa from './assets/lupa.svg'

export default function Search({ onSearch }) {
  return (
    <div>
      <div className='h-16'></div>
      <div className='fixed z-10'>
        <section className="bg-secundary w-full p-3 fixed top-28">
          <div className="flex relative items-center w-full">
            <input onChange={(e) => onSearch(e.target.value)} type="text" placeholder="Faça sua pesquisa..." className="p-3 w-full rounded-lg "/>
            <div className="absolute right-5"><img src={lupa} alt="lupa de pesquisa" /></div>
          </div>
        </section>
      </div>
    </div>
  )
}