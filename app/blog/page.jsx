import BlogCards from "@/app/components/BlogCards";
import Link from "next/link";
import { db } from "@/app/lib/db";

const getPosts = async () => {
  const response = await db.post.findMany({
    select: {
        id: true,
        title: true,
        content: true,
        tag: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return response;
}

export default async function BlogPage() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Blog Page:</p>
        <Link href={`/blog/createPost`} className="btn btn-success btn-sm mt-4">
          Create Post
        </Link>
      </div>
      <div className="grid items-start justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {posts?.map((post) => (
          <BlogCards key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
