import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    reqData();
  }, []);
  return (
    <>
      <Head>
        <title>Halaman Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header>
          <Navbar />
        </header>
        {props.products?.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
      </main>
    </>
  );
}

export const reqData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const resJson = await res.json();
  return resJson;
};

export async function getStaticProps() {
  const data = await reqData();
  return {
    props: {
      products: data,
    },
  };
}
