import { Link } from "react-router-dom";
import "./CatergorySection.scss";
import { useContext } from "react";
import { MainDataContext } from "../../context/contextData";

const CatergorySection = () => {
    const { category } = useContext(MainDataContext)

    return (
        <div className="catergory-section">
            <h2>Category</h2>

            <div className="main-container">
                <div className="category">
                    {category.map((el, i) => (
                        <Link
                            to="/products"
                            className="item"
                            key={i}
                            state={{
                                nameState: "singleCategory",
                                nameCategory: el
                            }}
                        >
                            {el}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CatergorySection;