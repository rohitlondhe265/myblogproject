import Main from "@/components/posts/Main";
export const metadata = {
  title: "All Posts Page",
  description: "This is the description of dummy blog",
  alternates: {
    canonical: "/posts",
  },
  keywords: ["Chemical Engineering", "React", "JavaScript"],
  openGraph: {
    title: "All Blogs Page",
    description: "Lists of all the blog posts",
    url: `/posts`,
  },
};
export default async function Page({ searchParams }) {
  return (
    <Main
      title="All Posts"
      category=""
      searchParams={searchParams}
      showPagination={true}
      link="posts"
    />
  );
}
