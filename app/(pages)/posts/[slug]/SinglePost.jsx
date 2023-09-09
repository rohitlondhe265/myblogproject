import { format } from "date-fns";
import Image from "next/image";

const SinglePost = ({ post }) => {
  const date = format(new Date(post?.updatedAt.split("T")[0]), "MMM d, yyyy");
  return (
    <div className="md:w-4/6 md:p-6">
      <div className="md:w-9/12 md:max-h-72 md:mb-4 mb-2 mx-auto"></div>
      <Image
        src={post?.banner}
        alt={post?.title}
        width={600}
        height={150}
        className="rounded-2xl aspect-video mx-auto drop-shadow-md"
      />
      <div className="flex justify-between font-semibold text-primary md:mx-12 mt-3">
        <span>{post?.category?.title}</span>
        <span>{date.toString()}</span>
      </div>
      <h1 className="text-3xl font-bold mb-2 md:mx-12">{post?.title}</h1>
      <article
        dangerouslySetInnerHTML={{ __html: post?.content }}
        className="prose md:prose-lg text-base mx-auto prose-headings:text-base prose-p:text-muted"
      ></article>
    </div>
  );
};

export default SinglePost;
