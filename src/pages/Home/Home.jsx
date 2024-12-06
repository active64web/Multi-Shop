import { useEffect } from "react";
import CatergorySection from "../../components/CatergorySection/CatergorySection";
import Future from "../../components/Future/Future";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import Prands from "../../components/Prands/Prands";
import ProductsComponent from "../../components/ProductsComponent/ProductsComponent";

const Home = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0
        })
    }, [])
    return (
        <div className="home">
            <MainCarousel />

            <Future />

            <CatergorySection />

            <ProductsComponent />

            <Prands />
        </div>
    );
}

export default Home;