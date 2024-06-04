"use client";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function FormPost({ post, submit, isEditing, isLoadingSubmit }) {
  const { register, handleSubmit } = useForm({
    defaultValues: post,
  });

  const { data: tags, isLoading: isLoadingTags } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    submit(data);
    if (isEditing) {
      console.log("Editing...");
    } else {
      console.log("Creating...");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-5 mt-10"
    >
      <input
        {...register("title", { required: true, maxLength: 20, minLength: 5 })}
        type="text"
        placeholder="Post Title.."
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...register("content", {
          required: true,
          minLength: 5,
        })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post Content.."
      ></textarea>

      {isLoadingTags ? (
        <>
          {/* <div className="skeleton w-32 h-32"></div> */}
          {/* <div className="skeleton input input-bordered w-full max-w-lg"></div> */}
          <span className="loading loading-infinity loading-lg"></span>
        </>
      ) : (
        <select
          {...register("tagId", { required: true })}
          className="select select-bordered w-full max-w-lg"
          defaultValue=""
        >
          <option disabled value="">
            Select Tags
          </option>
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      )}

      {/* <input
        type="submit"
        value={post ? "Edit" : "Create"}
        className="btn btn-primary w-full max-w-lg"
      /> */}
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isLoadingSubmit ? (
          <>
            <span className="loading loading-spinner"></span>
            <span>{isEditing ? "Editing.." : "Creating.."}</span>
          </>
        ) : isEditing ? (
          "Edit"
        ) : (
          "Create"
        )}
      </button>
    </form>
  );
}
export default FormPost;
