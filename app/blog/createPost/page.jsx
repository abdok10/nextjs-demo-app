import FormPost from "@/app/components/FormPost";
import BackButton from "@/app/components/BackButton";

function CreatePost() {
  return (
    <div className="mt-14">
      <BackButton />
      <p className="text-2xl font-bold text-center">Create New Post:</p>
      <FormPost />
    </div>
  );
}
export default CreatePost;
