import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.scss"
import { useEffect, useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            pass: password
        }

        if (password.length >= 6) {
            localStorage.setItem("userLogin", JSON.stringify(data))
            window.location.assign("/")
        } else {
            alert("برجاء دخول اكثر من 6 ارقام")
        }

    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])

    return (
        <div className={styles.login}>
            <div className="main-container">
                <div className={styles.container}>
                    <div className={styles.box}>

                        <div className={styles.form}>
                            <form onSubmit={handleLogin}>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    required
                                    autoComplete="off"
                                />

                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    required
                                    autoComplete="off"
                                />

                                <input type="submit" value="LogIn" />
                            </form>

                            <Link to="/sign-up">Register</Link>
                        </div>

                        <div className={styles.image} >
                            <p>LogIn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;