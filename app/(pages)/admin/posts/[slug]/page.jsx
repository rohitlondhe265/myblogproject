import Edit from "./Edit";

export default function page({ params }) {
  const slug = params.slug;

  return (
    <div>
      <Edit slug={slug} />
    </div>
  );
}
