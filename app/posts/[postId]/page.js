import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

async function ShowPost({ params }) {
  const postId = params.postId;

  const loadingJsx = (
    <div className="flex justify-center">
      <p className="text-2xl text-cyan-500 font">Loading...</p>
    </div>)

  return (
    <div>
      <p>Post Details:</p>

      <Suspense fallback={loadingJsx}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
export default ShowPost;
