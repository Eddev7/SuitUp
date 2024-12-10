import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// import icons
import logo from './assets/logo.svg'
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import Bag from '../Bag'

// redux
import { useSelector } from 'react-redux';

export default function Menu() {

  // pega o estado atual da bag com reducer
  const { bag } = useSelector((rootReducer) => rootReducer.bagReducer);

  const [menuActive, setMenuActive] = useState(false);

  return (<div>
    <div className='w-full h-28'></div>
    <div className='fixed top-0 w-full z-20'>
      <header className="bg-primary w-full h-28 p-7 flex justify-around items-center">
        <button onClick={() => setMenuActive(!menuActive)} className=''>{menuActive ? <IoMdClose size={40}/>: <CgMenu size={40}/>}</button>
        <Link to='/'><img src={logo} alt="logo do suitup" className='w-25'/></Link>
        <Link to='/cart'><Bag size={50} qnt={bag.length}/></Link>
      </header>

      <aside className={`bg-menu bsolute w-full transition-all ${menuActive ? 'h-screen' : 'h-0'} transition duration-700`}>
        <nav className={`flex flex-col items-center list-none ${menuActive ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity`}>
          <Li to="/cadastro" className="">CADASTRAR-SE</Li>
          <Li to="/login">ENTRAR</Li>
        </nav>
      </aside>
    </div>
  </div>)

  function Li(props) {
    return <li 
    className={'w-full border-b border-solid border-black'}>
      <Link onClick={() => setMenuActive(!menuActive)} to={props.to} className='w-full flex justify-center items-center p-3 hover:p-10 cursor-pointer transition-all '>{props.children}</Link>
    </li>
  }
}

