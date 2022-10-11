import './style.css'

import { toast } from 'react-toastify'

function ProductsList({products, currentSale, setCurrentSale, filteredProducts}){

    function adicionarNoCarrinho(product){
        const productExiste = currentSale.filter((item) => item.id === product.id )

        productExiste.length > 0 ? 
        
        (toast.error("produto já inserido")) :
        
        (setCurrentSale([...currentSale, product]))
    }

    return(

        <section className='productSection'>
            <div>
                <ul className='productContainer'>
                    {
                    filteredProducts.length > 0 ?
                     (filteredProducts.map((product) => (
                        <li key={product.id} className='productCard'>
                            <div className='divDaImagem'>
                                <img src={product.img} alt="produto" />
                            </div>
                            <div className='productInformation'>
                                <h2>{product.name}</h2>
                                <span>{product.category}</span>
                                <p>R$ {product.price}</p>
                                <button onClick={() => adicionarNoCarrinho(product)}>Adicionar</button>
                            </div>
                        </li>))) : 
                     (products.map((product) => (
                        <li key={product.id} className='productCard'>
                            <div className='divDaImagem'>
                                <img src={product.img} alt="produto" />
                            </div>
                            <div className='productInformation'>
                                <h2>{product.name}</h2>
                                <span>{product.category}</span>
                                <p>R$ {product.price}</p>
                                <button onClick={() => adicionarNoCarrinho(product)}>Adicionar</button>
                            </div>
                        </li>)
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProductsList;