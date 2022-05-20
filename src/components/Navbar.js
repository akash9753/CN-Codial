import styles from '../styles/navbar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks'
const Navbar = () => {
    const auth = useAuth();
    const navigate=useNavigate();
    return (
        <div className={styles.nav}>
            <div onClick={()=>navigate('/')} className={styles.leftDiv}>
                {/* <a href="/"> */}
                    <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="" />
                {/* </a> */}
            </div>

            <div className={styles.rightNav}>
                {auth.user && <div onClick={()=>navigate('/')} className={styles.user}>
                    {/* <Link to="/"> */}
                        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="" className={styles.userDp} />
                    {/* </Link> */}
                    <span>{auth.user.name}</span>
                </div>}

                <div className={styles.navLinks}>
                    <ul>
                        {auth.user ? (
                            <>
                                <li>
                                    <button onClick={auth.logout}>Log out</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link to="/login">Log in</Link>
                                </li>

                                <li>
                                    <Link to="/register">Ragister</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Navbar;