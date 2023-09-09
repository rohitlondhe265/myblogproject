import Link from "next/link";
import { format } from "date-fns";

export default function BlogPostCard({
  title,
  banner,
  updatedAt,
  category,
  metaDescription,
  slug,
}) {
  const date = format(new Date(updatedAt.split("T")[0]), "MMM d, yyyy");
  return (
    <div className="max-w-sm mx-auto border border-gray-400  shadow-lg rounded-lg overflow-hidden h-fit">
      <img src={banner} alt={title} className="w-full" />
      <div className="p-3 space-y-3">
        <div className="flex justify-between">
          <span className="font-semibold text-primary hover:text-base">
            {category?.title}
          </span>
          <span className="font-semibold">{date}</span>
        </div>
        <Link
          href={`/posts/${slug}`}
          className="text-xl font-semibold mt-2 hover:text-primary focus:text-primary cursor-pointer"
        >
          {title}
        </Link>
        <p className="text-muted">{metaDescription}</p>
      </div>
    </div>
  );
}
