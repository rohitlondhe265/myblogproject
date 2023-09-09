import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

const Card = ({ post }) => {
  const date = format(new Date(post?.updatedAt.split("T")[0]), "MMM d, yyyy");
  return (
    <div className="flex mb-3">
      <div className="w-36">
        <Image
          src={post?.banner}
          alt={post?.title}
          width={900}
          height={300}
          className="drop-shadow-md"
        />
      </div>
      <div className="flex-1 px-2 md:px-4">
        <Link
          href={`/posts/${post?.slug}`}
          className="text-lg text-justify md:text-xl hover:text-primary font-semibold"
        >
          {post?.title}
        </Link>
        <div className="text-muted text-sm">{date.toString()}</div>
      </div>
    </div>
  );
};

export default Card;
