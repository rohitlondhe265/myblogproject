import Main from "@/components/posts/Main";

export const dynamicParams = true;

async function getCat(id) {
  const res = await fetch(`${process.env.API_BASE_URL}/category/?slug=${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return undefined;
  return res.json();
}
export async function generateMetadata({ params }) {
  const res = await getCat(params.slug);
  const category = res[0];
  if (!category)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: category.title,
    description: category.description,
    publishedTime: category.createdAt,
    category: category.title,
    keywords: category.metaKeywords,
    openGraph: {
      title: category.title,
      description: category.description,
      url: `/category/${category.slug}`,
    },
    alternates: {
      canonical: `/category/${category.slug}`,
    },
  };
}
export default async function ({ params, searchParams }) {
  const slug = params.slug;
  const res = await getCat(slug);
  const category = res[0];
  return (
    <main>
      <Main
        title={`Category: ${category.title}`}
        description={category.description}
        category={slug}
        searchParams={searchParams}
        showPagination={true}
        link={`category/${slug}`}
      />
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_BASE_URL}/category`);
  const posts = await res.json();

  const trimedPosts = posts.splice(0, 10);
  return trimedPosts.map((post) => ({
    slug: post.slug.toString(),
  }));
}
