import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import icons
import logo from './assets/logo.svg'
import { CgMenu } from "react-icons/cg";
import Bag from '../Bag'

export default function Menu() {

  const [menuActive, setMenuActive] = useState(false);

  return (<>
    <header className="bg-primary w-1/1 h-17 p-7 flex justify-around items-center">
      <button onClick={() => setMenuActive(!menuActive)} className=''><CgMenu size={30}/></button>
      <Link to='/'><img src={logo} alt="logo do suitup" className='w-25'/></Link>
      <button><Bag size={30} qnt={0}/></button>
    </header>

    <aside className={`bg-gray-300 absolute z-10 w-full transition-all ${menuActive ? 'h-4/5' : 'h-0'} transition duration-700`}>
      <nav className={`flex flex-col items-center list-none ${menuActive ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity`}>
        <Li to="/cadastro" className="">CADASTRAR-SE</Li>
        <Li to="/login">ENTRAR</Li>
      </nav>
    </aside>
  </>)

  function Li(props) {
    return <li 
    className={'w-full border-b border-solid border-black'}>
      <Link onClick={() => setMenuActive(!menuActive)} to={props.to} className='w-full flex justify-center items-center p-3 hover:p-10 cursor-pointer transition-all '>{props.children}</Link>
    </li>
  }
}

