import FormPost from '@/app/components/FormPost';
import BackButton from '@/app/components/BackButton';
import { db } from '@/app/lib/db';

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

async function page({params}) {
  const blogId = params.blogId;
  const post = await getPost(blogId);
  return (
    <div className="mt-14">
      <BackButton />
      <p className="text-2xl font-bold text-center">Edit Post:</p>
      <FormPost post={post}/>
    </div>
  );
}
export default page;
