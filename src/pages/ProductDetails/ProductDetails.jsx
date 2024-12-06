import "./ProductDetails.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

const ProductDetails = () => {
    const [count, setCount] = useState(1)
    const location = useLocation()
    const [singleProduct, setSingleProduct] = useState({})
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
        const handleSingleProduct = async () => {
            const res = await axios.get(`https://fakestoreapi.com/products/${location.state}`)
            setSingleProduct(res.data)
            setloading(false)
        }
        handleSingleProduct()
    }, [location.state])

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="product-details">
            <div className="main-container">
                <div className="item">
                    <div className="image">
                        <img src={singleProduct.image} alt={singleProduct.title} />
                    </div>

                    <div className="content">
                        <h3>{singleProduct.title}</h3>
                        <p className="price">{singleProduct.price}$</p>
                        <p className="description">{singleProduct.description}</p>
                        <p className="stock"><span>Stock:</span>{singleProduct?.rating?.count}</p>

                        <div className="qunt">
                            <button
                                onClick={() => {
                                    if (count === 1) {
                                        return
                                    }
                                    setCount(count - 1)
                                }}
                            >-</button>
                            <span className="quntNum">{count}</span>
                            <button onClick={() => setCount(count + 1)}>+</button>
                        </div>

                        <button
                            className="cardBtn"
                        >
                            Add To Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;