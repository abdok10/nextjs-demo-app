import BlogCards from "@/app/components/BlogCards";
import Link from "next/link";

function BlogPage() {
  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Blog Page:</p>
        <Link href={`/blog/createPost`} className="btn btn-success btn-sm mt-4">Create Post</Link>
      </div>
      <div className="grid items-start justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <BlogCards />
        <BlogCards />
        <BlogCards />
        <BlogCards />
      </div>
    </div>
  );
}
export default BlogPage;
