// import Post from "../components/Post";

import Link from "next/link";

async function PostsPage() {
  const response = await fetch("https://dummyjson.com/products?limit=5", {
    // cache: "no-store",
    next: {
      revalidate: 120,
    }
  }); 
  const posts = await response.json();

  return (
    <div className="mt-5 flex flex-col gap-3">
      {posts.products.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <section className="bg-gray-200 rounded-xl py-2 px-4 text-gray-800">
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p>{post.description}</p>
          </section>
        </Link>
      ))}

      {/* <Post /> */}
    </div>
  );
}
export default PostsPage;
