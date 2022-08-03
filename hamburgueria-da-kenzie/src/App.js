// import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import ProductsList from './Components/ProductsList';
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  const [products, setProducts] = useState([])

  const [currentSale, setCurrentSale] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])

  function excluirProduto(produto){
    const filter = currentSale.filter((sale) => sale.id !== produto)

    setCurrentSale(filter)
  }

  function excluirTodos(){
    while(currentSale.length){
      currentSale.pop()
    }
  }
  
  const somaTotal = currentSale.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.price
  }, 0)

  function filtrarProdutos(valor){
    
    const resultado = products.filter((el) => el.category.toUpperCase().includes(valor.toUpperCase()) || el.name.toUpperCase().includes(valor.toUpperCase())) 

    return setFilteredProducts(resultado)
  }

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then((response) => response.json())
    .then((response) => {setProducts(response)})
    .catch((err) => console.log(err));
  }, [products])

  return (
    <>
    <ToastContainer />
    <div className="App">
          <Header filtrarProdutos={filtrarProdutos}/>
          <main className='main'>
            <ProductsList products={products}
                          setCurrentSale={setCurrentSale}
                          currentSale={currentSale}
                          filteredProducts={filteredProducts}
                          />
                          
            <Cart currentSale={currentSale}
                  excluirProduto={excluirProduto}
                  somaTotal={somaTotal}
                  excluirTodos={excluirTodos}/>
          </main>
    </div>
    
    </>
  );
}

export default App;
