"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationControls({
  total,
  link,
  hasNextPage,
  hasPrevPage,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "6";

  return (
    <div className="flex gap-3 justify-center items-center mt-3 md:mt-6">
      <button
        className={`bg-primary text-white p-1 cursor-pointer rounded-lg ${
          !hasPrevPage && "cursor-not-allowed bg-opacity-60"
        }`}
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/${link}/?page=${Number(page) - 1}&perPage=${perPage}`);
        }}
      >
        prev page
      </button>

      <div>
        {page} / {Math.ceil(total / Number(perPage))}
      </div>

      <button
        className={`bg-primary text-white p-1 cursor-pointer rounded-lg ${
          !hasNextPage && "cursor-not-allowed bg-opacity-60"
        }`}
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/${link}/?page=${Number(page) + 1}&perPage=${perPage}`);
        }}
      >
        next page
      </button>
    </div>
  );
}
