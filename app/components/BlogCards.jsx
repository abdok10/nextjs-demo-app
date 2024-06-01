import Link from "next/link";

function BlogCards({ post }) {
  const { title, content, tag } = post;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{content}</p>
          <div className="flex justify-between items-center">
            <span className="badge badge-outline">{tag.name}</span>
            <div className="card-actions ">
              <Link
                href={`/blog/${post.id}`}
                className="btn btn-primary btn-sm mt-4"
              >
                read more..
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogCards;
