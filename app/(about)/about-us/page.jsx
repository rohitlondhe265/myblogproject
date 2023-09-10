export const metadata = {
  title: {
    absolute: "About Page",
  },
  robots: {
    index: false,
    nocache: true,
  },
};

export default function page() {
  return (
    <div className="bg-skin-on-fill p-6 rounded-lg shadow-lg md:max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p className="">
        CareerPages.me is dedicated to providing you with valuable information
        about the exciting field of chemical engineering, technology, and
        diverse career opportunities. Our mission is to guide you towards a
        fulfilling career path where science, engineering, and innovation
        converge.
      </p>
      <p className=" mt-4">
        Explore our blog, discover the latest trends in the industry, and
        uncover the potential that awaits you in the world of chemical
        engineering and technology.
      </p>
    </div>
  );
}
