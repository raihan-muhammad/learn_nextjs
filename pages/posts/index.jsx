import { useEffect, useState } from "react";
const PostPage = (props) => {
  const { posts } = props;
  // const [posts, setPosts] = useState([]);

  // console.log(posts);

  // const getDataPosts = async () => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  //   const resJson = await res.json();
  //   setPosts(resJson);
  // };

  // useEffect(() => {
  //   getDataPosts();
  // }, []);

  return (
    <>
      <h1>List Post</h1>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

const getDataPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const resJson = await res.json();
  return resJson;
};

export async function getStaticProps() {
  const data = await getDataPosts();
  return {
    props: {
      posts: data,
    },
  };
}

export default PostPage;
