import lupa from './assets/lupa.svg'

export default function Search() {
  return (
    <section className="bg-secundary w-full p-3">
      <div className="flex relative items-center w-full ">
        <input type="text" placeholder="Faça sua pesquisa..." className="p-3 w-full rounded-lg "/>
        <button className="absolute right-5"><img src={lupa} alt="lupa de pesquisa" /></button>
      </div>
    </section>
  )
}