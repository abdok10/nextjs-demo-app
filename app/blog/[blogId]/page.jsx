import BackButton from "@/app/components/BackButton";
import ButtonAction from "@/app/components/ButtonAction";
import { db } from "@/app/lib/db";

const getPost = async (id) => {
  const response = await db.post.findUnique({
    where: { id: parseInt(id) },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
}

async function BlogPostDetails({ params }) {
  const blogId = params.blogId;
  const post = await getPost(blogId);
  console.log(post);

  return (
    <div className="mt-14">
      <BackButton />
      <h1 className="text-2xl font-bold mt-5">Post Details:</h1>
      <ButtonAction blogId={blogId}/>

      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <div className="mt-4">CONTENT: {post.content}</div>
        <div className="mt-4">
          <span>TAG:</span>
          <span className="badge badge-accent badge-outline ml-3">
            {post.tag.name}
          </span>
        </div>
      </div>
    </div>
  );
}
export default BlogPostDetails;
