"use client";
import { useForm } from "react-hook-form";

function FormPost() {
  const { register, handleSubmit, isEditing } = useForm();
  const onSubmit = (data) => console.log(data);
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
        {...register("content", { required: true, maxLength: 20, minLength: 5 })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post Content.."
      ></textarea>

      <select
        {...register("tag", { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue=""
      >
        <option disabled value="">
          Select Tags
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>

      <input
        type="submit"
        value={isEditing ? "Create" : "Edit"}
        className="btn btn-primary w-full max-w-lg"
      />
    </form>
  );
}
export default FormPost;
