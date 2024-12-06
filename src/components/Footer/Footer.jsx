import styles from "./Footer.module.scss"

import { Link } from "react-router-dom";

import { FaAngleRight, FaEnvelope, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {

    const fullyear = new Date()

    return (
        <div className={styles.footer}>
            <div className="main-container">
                <div className={styles.content}>
                    <div className={styles.touch}>
                        <h3>Get In Touch</h3>
                        <p><FaLocationDot /> 123 Street, New Cairo, Egypt</p>
                        <p><FaEnvelope /> Mail@domain.com</p>
                        <p><IoCallSharp /> +0123654789</p>
                    </div>

                    <div className={styles.quickShop}>
                        <h3>Quick Shop</h3>
                        <Link to="/"><FaAngleRight /> <span>Home</span></Link>
                        <Link to="/shop"><FaAngleRight /> <span>Shop</span></Link>
                        <Link to="/about"><FaAngleRight /> <span>About</span></Link>
                        <Link to="/contact"><FaAngleRight /> <span>Contact</span></Link>
                    </div>

                    <div className={styles.myAccount}>
                        <h3>My Account</h3>
                        <Link to="/"><FaAngleRight /> <span>Home</span></Link>
                        <Link to="/shop"><FaAngleRight /> <span>Shop</span></Link>
                        <Link to="/about"><FaAngleRight /> <span>About</span></Link>
                        <Link to="/contact"><FaAngleRight /> <span>Contact</span></Link>
                    </div>

                    <div className={styles.follow}>
                        <h3>Follow Us</h3>
                        <div className={styles.links}>
                            <Link to="#"><AiOutlineTwitter /></Link>
                            <Link to="#"><FaFacebookF /></Link>
                            <Link to="#"><FaLinkedinIn /></Link>
                            <Link to="#"><BsInstagram /></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.copyRight}>
                <div className="main-container">
                    <p>
                        Copyright &copy; {fullyear.getFullYear()} All rights reserved Coding By &#128151; <span>Your Name</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;