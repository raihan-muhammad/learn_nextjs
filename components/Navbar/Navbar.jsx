import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <section>
          <div>
            <Image
              width="143"
              height="34"
              src="/images/logo.svg"
              alt="Logo Netbook"
            />
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Community</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Events</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className={styles["input-group-search"]}>
              <img
                className={styles["icon-search"]}
                src="/images/icon-search.svg"
              />
              <input
                className={styles["input-search"]}
                type="text"
                placeholder="Search Here..."
              />
            </div>
            <button className={styles["btn-login"]}>Log in</button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
