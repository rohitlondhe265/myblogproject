import Card from "./Card";

export default async function PostList() {
  const res = await fetch(`${process.env.API_BASE_URL}/posts`);
  const { posts } = await res.json();
  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-4">Related Blog Posts</h2>
      <div className="flex flex-col gap-3">
        {posts?.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
