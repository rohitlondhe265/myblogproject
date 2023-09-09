import { notFound } from "next/navigation";
import SinglePost from "./SinglePost";
import SidebarMenu from "./SidebarMenu";

export const dynamicParams = true;

async function fetchPost(slug) {
  const res = await fetch(`${process.env.API_BASE_URL}/posts/${slug}`, {
    next: { revalidate: 3600 },
  });
  const post = await res.json();
  return post;
}

// dynamic meta data
export async function generateMetadata({ params: { slug } }) {
  const post = await fetchPost(slug);
  if (!post)
    return {
      title: "Not Found",
      description: "The page is not found",
    };
  return {
    title: post.title,
    description: post.metaDescription,
    type: "article",
    publishedTime: post.createdAt,
    category: post.category?.title,
    keywords: post?.metaKeywords,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `/posts/${post.slug}`,
      type: "article",
      images: post.banner,
    },
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
  };
}

// page to render
export default async function ({ params: { slug } }) {
  const post = await fetchPost(slug);

  if (!post.slug) {
    return notFound();
  }

  return (
    <main className="flex justify-between gap-3 md:gap-9 flex-col md:flex-row">
      <SinglePost post={post} />
      <SidebarMenu />
    </main>
  );
}

// generate static paths
export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_BASE_URL}/posts`);
  const { posts } = await res.json();

  const trimedPosts = posts.splice(0, 10);
  return trimedPosts.map((post) => ({
    slug: post.slug.toString(),
  }));
}
