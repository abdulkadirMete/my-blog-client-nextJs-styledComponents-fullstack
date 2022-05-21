import { useRouter } from "next/router";
import Footer from "../../components/footer/Footer";
import { PostDetail } from "../../components/postDetail/PostDetail";

const Post = ({ post }) => {
  return (
    <>
      <PostDetail post={post} />;
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/post/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}

export default Post;
