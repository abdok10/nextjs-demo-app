// "use client";

import BackButton from "@/app/components/BackButton";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { db } from "@/app/lib/db";

async function BlogPostDetails({ params }) {
  const blogId = params.blogId;
  const post = await db.post.findUnique({
    where: { id: parseInt(blogId) },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  console.log(post);
  return (
    <div className="mt-14">
      <BackButton />
      <h1 className="text-2xl font-bold mt-5">Post Details:</h1>
      {/* <div className="mt-5">
        <div className="flex gap-4">
          <Link
            href={`/blog/editPost/${blogId}`}
            className="flex items-center btn"
          >
            <Pencil />
            Edit
          </Link>
          <button
            className="btn btn-error"
            onClick={() => document.getElementById("deleteModal").showModal()}
          >
            <Trash2 />
            Delete
          </button>
        </div>
        <dialog id="deleteModal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Are u sure u wanna delete this Post ?</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">NO</button>
              </form>
              <form method="dialog">
                <button className="btn btn-error">YES</button>
              </form>
            </div>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div> */}

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
