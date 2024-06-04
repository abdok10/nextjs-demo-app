"use client"

import FormPost from "@/app/components/FormPost";
import BackButton from "@/app/components/BackButton";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios";

function CreatePost() {
  const router = useRouter();

  const handleCreatePost = (data) => {
    createPost(data)
    console.log(data)
  }

  const { mutate: createPost, isPending: isLoadingSubmit } = useMutation({
    mutationFn: async (newPost) => {
      const response = await axios.post("/api/posts/create", newPost);
      return response.data;
    },
    onSuccess: () => {
      router.push("/blog")
      router.refresh()
    },
    onError: (error) => {
      console.error(error)
    },
  })
  return (
    <div className="mt-14">
      <BackButton />
      <p className="text-2xl font-bold text-center">Create New Post:</p>
      <FormPost submit={handleCreatePost} isEditing={false} isLoadingSubmit={isLoadingSubmit}/>
    </div>
  );
}
export default CreatePost;
