const DetailPost = (props) => {
  console.log(props);
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

export async function getStaticPaths() {
  const dataPosts = await getDataPosts();
  return {
    paths: dataPosts?.map((post) => ({
      params: { idPost: `${post.id}` },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const dataDetailPost = await getDataPostById(context.params.idPost);
  return {
    props: {
      productDetail: dataDetailPost,
    },
  };
}

export default DetailPost;
