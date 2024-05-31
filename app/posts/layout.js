export const metadata  = {
  title: "Posts Page",
};

function PostsLayout({ children }) {
  return (
    <>
      <h1 className="text-violet-400 text-2xl font-bold">Posts Page:</h1>
      <main>{children}</main>
    </>
  );
}
export default PostsLayout;
