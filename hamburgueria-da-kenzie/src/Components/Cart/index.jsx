import './style.css'

function Cart({currentSale, excluirProduto, excluirTodos, somaTotal}){

    return(
        <section className='cartSection'>
            <div>
                <h2 className='tituloCarrinho'>Carrinho de compras</h2>
                <ul className='cartContainer'>

                    {currentSale.length === 0 ? 
                    
                    (
                        <div className='divVazia'>
                            <h1 className='tituloVazio'>Sua sacola está vazia</h1>
                            <p className='pVazio'>Adicione Itens</p>
                        </div>
                    ):(
                        currentSale.map((sale, index) => (
                        <li key={sale.id} className='cartLi'>
                            <div className='ImageETitle'>
                                <img className='cartImage' src={sale.img} alt="product" />
                                
                                <div className='divNameSpan'>
                                    <h1 className='cartTitle'>{sale.name}</h1>
    
                                    <span className='cartCategory'>{sale.category}</span>
                                </div>
                            </div>
                            <button onClick={() => excluirProduto(sale.id)} className='cartButton'>Remover</button>
                        </li>
                        ))
                    )}

                </ul>
            </div>
            <div className='divTotal'>
                <div className='divDoPrice'>
                    <p className='total'>Total</p>
                    <span className='price'>R$ {somaTotal.toFixed(2)}</span>
                </div>
                 <button onClick={excluirTodos} className='buttonRemove'>Remover todos</button>
            </div>
        </section>
    )
}

export default Cart;