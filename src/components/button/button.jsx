import './button.css'

export const Button = () => {
    return(
        <button className="btn-carrinho-compras" onClick={()=>alert(`Oferta quentinha!!!`)}>
            Vá ao seu carrinho de compras.
        </button>
    )
}