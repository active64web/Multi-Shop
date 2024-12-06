/* eslint-disable react/prop-types */
import "./ProductsComponent.scss";

import { Link, useLocation } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react";
import { MainDataContext } from "../../context/contextData";
import axios from "axios";
import Loading from "../Loading/Loading";

const ProductsComponent = ({ cart }) => {
    const { products, numCart, setNumCart } = useContext(MainDataContext)
    const [showProducts, setShowProducts] = useState([]);
    const location = useLocation()
    const [loading, setloading] = useState(false)

    useEffect(() => {
        if (location.pathname === "/") {
            setShowProducts(products.slice(0, 4))

        } else if (location?.state?.nameState === "singleCategory") {
            const handleSingleCategory = async () => {
                setloading(true)
                const res = await axios.get(`https://fakestoreapi.com/products/category/${location?.state?.nameCategory}`)
                setShowProducts(res.data)
                setloading(false)
            }
            handleSingleCategory()

        } else if (cart) {
            setShowProducts(cart)
        } else {
            setShowProducts(products)
        }
    }, [cart, location.pathname, location?.state, products]);

    const handleAddToCart = (item) => {
        const cartStorge = JSON.parse(localStorage.getItem("cart")) || []
        const isItemInCart = cartStorge.some((el) => el.id === item.id);

        if (!isItemInCart) {
            const updatedCart = [...cartStorge, item];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="main-container">
            <h2>{cart ? "Your Cart " : "Products"}</h2>
            {
                location?.state?.nameState === "singleCategory"
                &&
                <h3>Category: {location?.state?.nameCategory}</h3>
            }
            <div className="products-component">
                {showProducts.map((el) => (
                    <div className="product" key={el.id}>
                        <img
                            src={el.image}
                            alt={el.title}
                            loading="lazy"
                        />

                        <div className="content">
                            <div>
                                <h4>{el.title}</h4>
                                <p>Category : {el.category}</p>
                            </div>

                            <div>
                                <div className="price">
                                    <p>${el.price}</p>
                                    <p>Stock : {el.rating.count}</p>
                                </div>

                                <div className="btn">
                                    <span
                                        onClick={() => {
                                            handleAddToCart(el)
                                            setNumCart(numCart + 1)
                                        }}
                                    >
                                        <FaBasketShopping />
                                    </span>
                                    <Link
                                        to="/product-details"
                                        state={el.id}
                                    >
                                        <FaRegEye />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {location.pathname === "/" &&
                <Link to="/products" className="showMore">Show More</Link>
            }
        </div>
    );
}

export default ProductsComponent;