import Marquee from "react-fast-marquee";

import Prand1 from "../../assets/Images/vendor-1.jpg"
import Prand2 from "../../assets/Images/vendor-2.jpg"
import Prand3 from "../../assets/Images/vendor-3.jpg"
import Prand4 from "../../assets/Images/vendor-4.jpg"
import Prand5 from "../../assets/Images/vendor-5.jpg"
import Prand6 from "../../assets/Images/vendor-6.jpg"

const Prands = () => {
    const prands = [
        { src: Prand1 },
        { src: Prand2 },
        { src: Prand3 },
        { src: Prand4 },
        { src: Prand5 },
        { src: Prand6 },
    ]
    return (
        <div className="prands" style={{ paddingBlock: "20px" }}>
            <div className="main-container">
                <Marquee
                    speed={100}
                    loop={0}
                    autoFill={true}
                >
                    {prands.map((el, idx) => (
                        <div className="item" key={idx} style={{ margin: "0 30px" }}>
                            <img src={el.src} alt={`prand-${idx}`} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default Prands;