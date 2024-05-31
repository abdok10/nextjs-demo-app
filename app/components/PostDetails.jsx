async function PostDetails({ postId }) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div className="flex justify-center">
      <div className="w-[400px] border border-cyan-500 rounded-lg p-5">
        <p>Id: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Body: {post.body}</p>
      </div>
    </div>
  );
}
export default PostDetails;
