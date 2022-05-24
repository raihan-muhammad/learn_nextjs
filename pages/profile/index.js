import Image from "next/image";
import Link from "next/link";
import gambar from "./bg.jpg";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Halaman Profile</title>
        <meta name="description" content="Ini adalah halaman profile" />
      </Head>
      <Link href="/profile/12">Masuk ke detail profile</Link>
      <h1>Halaman Profile</h1>

      <Image
        // src="https://images.unsplash.com/photo-1649859398021-afbfe80e83b9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
        src={gambar}
        width="800"
        height="800"
        placeholder="blur"
      />
    </>
  );
};
export default Profile;
