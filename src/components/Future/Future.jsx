import styles from "./Future.module.scss";

import { FaCheck } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BiSolidPhoneCall } from "react-icons/bi";

const Future = () => {
    return (
        <div className={styles.future}>
            <div className="main-container">
                <div className={styles.box}>
                    <div className={styles.item}>
                        <FaCheck />
                        <p>Quality Product</p>
                    </div>
                    <div className={styles.item}>
                        <FaShippingFast />
                        <p>Free Shipping</p>
                    </div>
                    <div className={styles.item}>
                        <GiReturnArrow />
                        <p>14-Day Return</p>
                    </div>
                    <div className={styles.item}>
                        <BiSolidPhoneCall />
                        <p>24/7 Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Future;