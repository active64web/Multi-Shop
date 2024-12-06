import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default MainLayout;