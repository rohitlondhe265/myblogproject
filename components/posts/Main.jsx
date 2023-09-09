import BlogPostCard from "./BlogPostCard";
import PaginationControls from "./PaginationControls";

async function getData(category, perPage, page) {
  let res = [];
  let apiUrl = `${process.env.API_BASE_URL}/posts/?perPage=${perPage}&page=${page}`;
  if (category) {
    apiUrl += `&category=${category}`;
  }
  res = await fetch(apiUrl, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Main({
  searchParams,
  title,
  description,
  category,
  showPagination,
  link,
}) {
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["perPage"] ?? "6";

  const data = await getData(category, perPage, page);

  return (
    <div className="md:mx-12 md:px-6 my-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="text-muted indent-24 md:max-w-3xl text-justify text-xl">{description}</p>}
      <div className="mt-6 grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.posts?.map((post, i) => (
          <BlogPostCard key={i} {...post} />
        ))}
      </div>
      {showPagination && (
        <PaginationControls
          hasNextPage={page * perPage < data?.total}
          hasPrevPage={page > 1}
          total={data?.total}
          link={link}
        />
      )}
    </div>
  );
}
