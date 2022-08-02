import './style.css'

import logo from '../../img/Mask Group.svg'
import { useState } from 'react';

function Header({filtrarProdutos}){

  const [pesquisa, setPesquisa] = useState("")

  function handlePesquisa(event){
    filtrarProdutos(event)
    setPesquisa("")

  }

    return(
      <section className='section'>
        <div className='divContainer'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className='divInput'>
              <form action="">
                <input placeholder='Digitar Pesquisa' type="text" onChange={(event) => setPesquisa(event.target.value)} value = {pesquisa}/>
                <button type='button' onClick={() => (handlePesquisa(pesquisa))}>Pesquisar</button>
              </form>
            </div>
        </div>
      </section>  
    )
}

export default Header;