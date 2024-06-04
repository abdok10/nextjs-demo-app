"use client";
import FormPost from "@/app/components/FormPost";
import BackButton from "@/app/components/BackButton";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

function page({ params }) {
  const router = useRouter();
  const blogId = params.blogId;

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${blogId}`);
      return response.data;
    },
  });

  const { mutate: updatePost, isPending: isLoadingSubmit } = useMutation({
    mutationFn: async (newPost) => {
      return await axios.patch(`/api/posts/${blogId}`, newPost);
    },
    onSuccess: () => {
      router.push("/blog");
      router.refresh();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleEditPost = (data) => {
    updatePost(data);
  };

  if (isLoadingPost)
    return (
      <div className="flex justify-center items-center mt-14">
        <span className="loading loading-lg"></span>
      </div>
    );

  return (
    <div className="mt-14">
      <BackButton blogId={blogId} />
      <p className="text-2xl font-bold text-center">Edit Post:</p>
      <FormPost
        post={post}
        submit={handleEditPost}
        isEditing={true}
        isLoadingSubmit={isLoadingSubmit}
      />
    </div>
  );
}
export default page;
