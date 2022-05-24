import Link from "next/link";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img
          src="/images/logo.svg"
          alt="Logo Netbook"
          className={styles.logo}
        />
        <ul>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Community</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="">Events</Link>
          </li>
        </ul>
      </div>

      <div>
        <input type="text" placeholder="Search Here..." />
        <button>Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
