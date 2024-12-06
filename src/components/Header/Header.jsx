import "./Header.scss";
import { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { MainDataContext } from "../../context/contextData";
import { FaCartShopping } from "react-icons/fa6";
import Search from "../Search/Search";

const Header = () => {
    const { category, numCart } = useContext(MainDataContext)
    const [showManuCategory, setShowMenuCategory] = useState(false)
    const userLogin = JSON.parse(localStorage.getItem("userLogin"))

    return (
        <div className="header">
            <div className="top-header">
                <div className="main-container">
                    <Link to="/login">Login</Link>
                    <button>Register</button>
                </div>
            </div>

            <div className="main-container">
                <div className="mid-header">
                    <div className="logo">
                        <Link to="/">
                            <span>Multi</span><span>Shop</span>
                        </Link>
                    </div>

                    <Search />

                    <div className="customer-service">
                        <p>Customer Service</p>
                        <p>+0123654789</p>
                    </div>
                </div>
            </div>

            <div className="bottom-header">
                <div className="main-container">
                    <div className="category">
                        <button onClick={() => setShowMenuCategory(!showManuCategory)}>
                            <span>Category</span>
                            <div className="icon">
                                <IoMenu />
                            </div>
                        </button>

                        {showManuCategory &&
                            <div className="list">
                                <ul>
                                    {category.map((el, i) => (
                                        <li key={i}>
                                            <Link>{el}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </div>

                    <div className="links">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    {userLogin &&
                        <div className="cart">
                            <Link to="/cart">
                                <FaCartShopping />
                                <span>{numCart}</span>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;