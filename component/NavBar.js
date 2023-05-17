import styles from '../styles/Nav.module.css';
import Link from "next/link";

export default function NavBar({ path }){
    return <>
        <nav className={styles.nav}>
            <img src='/popcorn.png' />
            <div>
                <Link href='/' className={path === 'Home' ? styles.active : ''}>Home</Link>
                <Link href='/source' className={path === 'Source' ? styles.active : ''}>Source</Link>
            </div>
        </nav>
    </>
}