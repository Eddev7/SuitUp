import logo from './assets/logo.svg'
import menu from './assets/menu.svg'
import bag from './assets/bag.svg'

export default function HeaderPages() {
  return (<>
    <header className="bg-primary w-1/1 h-17 p-7 flex justify-around items-center">
      <button><img src={menu} alt="menu de opções" className='w-7'/></button>
      <img src={logo} alt="logo do suitup" className='w-25'/>
      <button><img src={bag} alt="menu de opções" className='w-8'/></button>
    </header>
  </>)
}