import { useRouter } from "next/router";
import Link from "next/link";

const DetailProfile = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>Halaman detail profile untuk user {id}</h1>
      <Link href="/profile">Kembali</Link>
    </>
  );
};

export default DetailProfile;
