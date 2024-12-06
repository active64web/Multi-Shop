import styles from "./MainCarousel.module.scss";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import carousel1 from "../../assets/Images/carousel-1.jpg";
import carousel2 from "../../assets/Images/carousel-2.jpg";
import carousel3 from "../../assets/Images/carousel-3.jpg";
import offer1 from "../../assets/Images/offer-1.jpg";
import offer2 from "../../assets/Images/offer-2.jpg";

import { Link } from "react-router-dom";


const MainCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className={styles.mainCarousel}>
            <div className="main-container">
                <div className={styles.box}>
                    <div className={styles.carousel}>
                        <Carousel
                            responsive={responsive}
                            showDots={true}
                            draggable={true}
                            infinite={true}
                            arrows={false}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                        >
                            <div className={styles.item}>
                                <img src={carousel1} alt="shop carousel 1" />
                                <div className={styles.content}>
                                    <h3>Men Fashion</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam cum iste expedita provident quasi?
                                    </p>
                                    <Link to="/products">Shop Now</Link>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <img src={carousel2} alt="shop carousel 1" />
                                <div className={styles.content}>
                                    <h3>Woman Fashion</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam cum iste expedita provident quasi?
                                    </p>
                                    <Link to="/products">Shop Now</Link>
                                </div>
                            </div>

                            <div className={styles.item}>
                                <img src={carousel3} alt="shop carousel 1" />
                                <div className={styles.content}>
                                    <h3>Kids Fashion</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit numquam cum iste expedita provident quasi?
                                    </p>
                                    <Link to="/products">Shop Now</Link>
                                </div>
                            </div>

                        </Carousel>
                    </div>

                    <div className={styles.offer}>
                        <div className={styles.offerItem}>
                            <img src={offer1} alt="offer1" />
                            <div className={styles.content}>
                                <span>Save 20%</span>
                                <p>Special Offer</p>
                                <Link to="/shop">Shop Now</Link>
                            </div>
                        </div>
                        <div className={styles.offerItem}>
                            <img src={offer2} alt="offer2" />
                            <div className={styles.content}>
                                <span>Save 20%</span>
                                <p>Special Offer</p>
                                <Link to="/shop">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>



    );
}

export default MainCarousel;