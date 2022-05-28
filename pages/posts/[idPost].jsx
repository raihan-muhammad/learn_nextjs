const DetailPost = (props) => {
  return (
    <>
      <h1>{props.productDetail.title}</h1>
    </>
  );
};

const getDataPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const resJson = await res.json();
  return resJson;
};

const getDataPostById = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const resJson = await res.json();
  return resJson;
};

export async function getServerSideProps(context) {
  const data = await getDataPostById(context.params.idPost);
  return {
    props: {
      productDetail: data,
    },
  };
}

// export async function getStaticPaths() {
//   const dataPosts = await getDataPosts();
//   return {
//     paths: [
//       {
//         params: { idPost: `1` },
//       },
//       {
//         params: { idPost: `2` },
//       },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const dataDetailPost = await getDataPostById(context.params.idPost);
//   return {
//     props: {
//       productDetail: dataDetailPost,
//     },
//   };
// }

export default DetailPost;
