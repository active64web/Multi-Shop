import { useContext, useState } from "react";
import "./Cart.scss";
import { MainDataContext } from "../../context/contextData";

const Cart = () => {
    const { numCart, setNumCart } = useContext(MainDataContext)
    const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const handleDelete = (el) => {
        const updateData = [...cartProducts]
        updateData.splice(el, 1)
        setCartProducts(updateData)
        localStorage.setItem("cart", JSON.stringify(updateData))
        setNumCart(numCart - 1)
    }

    return (
        <div className="cart">
            <div className="main-container">
                {cartProducts.length > 0 ?
                    <>
                        {
                            cartProducts.map((el) => (
                                <div className="item" key={el.id}>
                                    <h3>{el.title}</h3>
                                    <button onClick={() => handleDelete(el)}>Del</button>
                                </div>
                            ))
                        }
                    </>
                    :
                    <div>No Result</div>
                }
            </div>
        </div>
    );
}

export default Cart;