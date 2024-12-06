import "./Products.scss";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";
import { useEffect } from "react";

const Products = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])

    return (
        <div className="all-products">
            <ProductsComponent />
        </div>
    );
}

export default Products;