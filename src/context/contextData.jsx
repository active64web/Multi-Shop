/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";

export const MainDataContext = createContext();

const ContextDataProvider = ({ children }) => {
    const [category, setCategory] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setloading] = useState(false)

    const cartStorge = JSON.parse(localStorage.getItem("cart")) || []

    const [numCart, setNumCart] = useState(cartStorge.length)

    const handleCategory = async () => {
        const res = await axios.get("https://fakestoreapi.com/products/categories")
        setCategory(res.data)
    }

    const handleProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)
    }

    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            await handleCategory()
            await handleProducts()
            setloading(false)
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <MainDataContext.Provider value={{
            category,
            products,
            numCart,
            setNumCart
        }}>
            {children}
        </MainDataContext.Provider>
    )
}

export default ContextDataProvider;