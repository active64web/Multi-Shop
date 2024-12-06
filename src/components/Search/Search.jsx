import { useContext, useState } from "react";
import "./Search.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MainDataContext } from "../../context/contextData";
import { Link } from "react-router-dom";

const Search = () => {
    const { products } = useContext(MainDataContext)
    const [textSearch, setTextSearch] = useState("")

    const CearchProducts =
        products.filter((el) => el.title.toLowerCase().startsWith(textSearch.toLowerCase()))

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search Of Products"
                onChange={(e) => setTextSearch(e.target.value)}
                value={textSearch}
            />
            <div className="icon">
                <AiOutlineSearch />
            </div>

            {textSearch !== "" &&
                <div className="result">
                    {CearchProducts.map((el) => (
                        <Link
                            key={el.id}
                            state={el.id}
                            to="/product-details"
                            onClick={() => setTextSearch("")}
                        >
                            {el.title}
                        </Link>
                    ))}
                </div>
            }
        </div>
    );
}

export default Search;