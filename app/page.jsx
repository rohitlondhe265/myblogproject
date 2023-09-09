import Hero from "@/components/Hero";
import Main from "@/components/posts/Main";

export default function page({ searchParams }) {
  return (
    <main>
      <Hero />
      <Main
        title="Latest Posts"
        category=""
        searchParams={searchParams}
        showPagination={false}
        link=""
      />
    </main>
  );
}
