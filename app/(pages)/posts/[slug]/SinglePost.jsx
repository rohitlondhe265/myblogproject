import SocialShare from "@/components/SocialShare";
import { format } from "date-fns";
import Image from "next/image";
import FAQSection from "./FAQSection";

const SinglePost = ({ post }) => {
  const date = format(new Date(post?.updatedAt.split("T")[0]), "MMM d, yyyy");
  return (
    <main className="md:w-4/6 md:p-6">
      <div className="md:w-9/12 md:max-h-72 md:mb-4 mb-2 mx-auto"></div>
      <Image
        src={post?.banner}
        alt={post?.title}
        width={600}
        height={150}
        className="rounded-2xl aspect-video mx-auto drop-shadow-md"
      />
      <div className="md:mx-12">
        <div className="flex justify-between font-semibold text-primary mt-3">
          <span>{post?.category?.title}</span>
          <span>{date.toString()}</span>
        </div>
        <SocialShare
          url={`${process.env.BASE_URL}/posts/${post?.slug}`}
          title={post?.title}
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{post?.title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: post?.content }}
          className="prose max-w-none text-justify md:prose-xl text-base prose-headings:text-base prose-p:text-muted prose-h2:text-2xl md:prose-h2:text-3xl md:prose-h3:text-2xl prose-h3:text-xl prose-h4:text-xl"
        ></article>
      </div>
      <FAQSection faqData={post?.faqs} />
    </main>
  );
};

export default SinglePost;
