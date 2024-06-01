import FormPost from '@/app/components/FormPost';
import BackButton from '@/app/components/BackButton';

function page() {
  return (
    <div className="mt-14">
      <BackButton />
      <p className="text-2xl font-bold text-center">Edit Post:</p>
      <FormPost />
    </div>
  );
}
export default page;
